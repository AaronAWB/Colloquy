import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import { SignUp } from '@Components/index';
import { AuthMethods, socketConnect } from '@Utils/index';
import '@Styles/Login.css'

function Login () {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showModal, setShowModal] = useState(false);

    const auth = new AuthMethods();
    const navigate = useNavigate();

    useEffect(() => {
        if (auth.loggedIn()) {navigate('/')};
    }, []);

    const handleLogin = async e => {
        e.preventDefault();
        try {
            const login = await auth.login(username, password);
            if (login === true) {
                socketConnect();
                navigate('/')
            }
        } catch (err) {
            console.log(`Login failed: ${err}`)
            }
    };
    
    const handleGuestLogin = async e => {
        e.preventDefault();
        try {
            const guestLogin = await auth.login("Guest", "GuestPwd");
            if (guestLogin === true) {navigate('/')}
        } catch (err) {
            console.log(`Guest login failed ${err}`)
            }
    };

    const handleShowModal = () => {setShowModal(true)};
    const handleHideModal = () => {setShowModal(false)};
        
    return (
        <Container className='content-container'> 
            <Container className="login-box rounded shadow">
            <div className='login-title'>
                <h2>Login</h2>
            </div>
            <Form className='mt-3' onSubmit={handleLogin}>
                <Form.Group controlId='formBasicUsername' className='mt-3'>
                    <Form.Control 
                        type='text' 
                        placeholder="Username" 
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        className='text-center' 
                        />
                </Form.Group>
                <Form.Group controlId='formBasicPassword' className='mt-3'>
                    <Form.Control 
                        type='password' 
                        placeholder="Password" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)} 
                        className='text-center'
                        />     
                </Form.Group>
                <div className ='button-container'>
                    <Button className='mt-3 login-button' variant='secondary' type='submit'>Sign In</Button>
                </div>
            </Form>
            <div className='signup-prompt'>
                <p>Don't have an account? <a href='#' onClick={handleShowModal}>Sign up</a></p>
                <SignUp 
                    show={showModal}
                    hide={handleHideModal}
                    />
            </div>
            <div className='guest-prompt'>
                <p>Continue as <a href='#' onClick={handleGuestLogin}>Guest</a></p>
            </div>
        </Container>
    </Container>
  );
}

export { Login } 