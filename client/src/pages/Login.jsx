import { useState } from "React";
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import '@Styles/Login.css'

function Login () {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/login', {username: username, password: password})
        .then (res => {
            localStorage.setItem('access_token', res.data.access_token);
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
                    <Button className='mt-3' variant="primary" type="submit">Sign In</Button>
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