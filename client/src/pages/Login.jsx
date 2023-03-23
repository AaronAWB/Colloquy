import { useState } from "React";
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import '@Styles/Login.css'

function Login () {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/login', {username: username, password: password})
        .then (resp => {
            localStorage.setItem('access_token', resp.data.access_token);
            window.location.href = '/chat';

        })
        .catch(error => console.log(error));
    }

    return (
        <Container className='content-container'> 
            <Container className="login-box rounded shadow">
            <div className='login-title'>
                <h2>Login</h2>
            </div>
            <Form className='mt-3' onSubmit={handleSubmit}>
                <Form.Group controlId='formBasicUsername' className='mt-3'>
                    <Form.Label className ='form-lable'>Username:</Form.Label>
                    <Form.Control 
                        type='text' 
                        placeholder="Enter username" 
                        value={username}
                        onChange={e => setUsername(e.target.value)} />
                </Form.Group>
                <Form.Group controlId='formBasicPassword' className='mt-3'>
                    <Form.Label className='form-lable'>Password:</Form.Label>
                    <Form.Control 
                        type='password' 
                        placeholder="Enter password" 
                        value={password} 
                        onChange = {e => setPassword(e.target.value)} />
                </Form.Group>
                <div className ='button-container'>
                    <Button className='mt-3 me-4' variant="primary" type="submit">Sign In</Button>
                    <Button className='mt-3' variant="success">Continue as Guest</Button>
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