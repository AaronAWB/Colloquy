import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import { AuthMethods } from '@Components/index';
import '@Styles/Login.css'

function Login () {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const auth = new AuthMethods();
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        auth.login(username, password)
        .then(res => {
            if (res === false) {
                return alert('Invalid credentials.');
            }
            navigate('/');
            })
            .catch(err => {
                alert(err);
            });
        };
    
    return (
        <Container className='content-container'> 
            <Container className="login-box rounded shadow">
            <div className='login-title'>
                <h2>Login</h2>
            </div>
            <Form className='mt-3' onSubmit={handleSubmit}>
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
                    <Button className='mt-3 login-button' variant="primary" type="submit">Sign In</Button>
                </div>
            </Form>
            <div className='signup-prompt'>
                <p>Don't have an account? <a>Sign up</a></p>
            </div>
        </Container>
    </Container>
  );
}

export { Login } 