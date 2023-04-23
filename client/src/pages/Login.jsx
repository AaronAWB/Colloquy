import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { SignUp } from '@Components/index';
import { AuthMethods, socketConnect } from '@Utils/index';
import '@Styles/Login.css'

function Login () {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [loginError, setLoginError] = useState(false);

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
                navigate('/')
                socketConnect();
            } else {
                setLoginError(true);
                setUsername("");
                setPassword("");
            }
        } catch (err) {
            console.log(`Login failed: ${err}`)
            };
    };
    
    const handleGuestLogin = async e => {
        e.preventDefault();
        try {
            const guestLogin = await auth.login("Guest", "GuestPwd");
            if (guestLogin === true) {
                navigate('/')
                socketConnect();
            }
        } catch (err) {
            console.log(`Guest login failed ${err}`)
            }
    };

    const handleShowModal = () => {setShowModal(true)};
    const handleHideModal = () => {setShowModal(false)};
        
    return (
        <Container className='content-container'>
            <div className='login-container'>
                <Container className='alert-container'>
                    {loginError && (
                    <Alert className='login-alert' variant="danger" onClose={() => setLoginError(false)} dismissible>
                        <p>
                            Invalid username or password. Please try again.
                        </p>
                    </Alert>
                )}
                </Container> 
                <Container className='login-box rounded shadow'>
                <div className='app-title-container'>
                    <h1 className='app-title'>Colloquy. <span className='app-subtitle'>A lightweight chat app.</span></h1>
                </div>
                <Form className='mt-3' onSubmit={handleLogin}>
                    <Form.Group controlId='formBasicUsername' className='mt-3'>
                        <Form.Control 
                            className='text-center username-input shadow' 
                            type='text' 
                            placeholder="Username" 
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            />
                    </Form.Group>
                    <Form.Group controlId='formBasicPassword' className='mt-3'>
                        <Form.Control 
                            className='text-center password-input shadow'
                            type='password' 
                            placeholder="Password" 
                            value={password} 
                            onChange={e => setPassword(e.target.value)} 
                            />     
                    </Form.Group>
                    <div className ='button-container'>
                        <Button className='mt-3 login-button shadow' type='submit'>
                            <span className='login-button-text'>Sign In</span>
                        </Button>
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
        </div>
    </Container>
  );
}

export { Login } 