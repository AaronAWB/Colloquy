import { Container, Form, Button } from 'react-bootstrap';
import '@Styles/Login.css'

function Login () {
    return (
        <Container className='content-container'> 
            <Container className="login-box rounded shadow">
            <div className='login-title'>
                <h2>Login</h2>
            </div>
            <Form className='mt-3'>
                <Form.Group controlId="formBasicUsername" className='mt-3'>
                    <Form.Label className ='form-lable'>Username:</Form.Label>
                    <Form.Control type="text" placeholder="Enter username"  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword" className='mt-3'>
                    <Form.Label className='form-lable'>Password:</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>
            <Button className='mt-3' variant="primary" type="submit">Login</Button>
            </Form>
            <div className='signup-prompt'>
                <p>Don't have an account? <a>Sign up</a></p>
            </div>
        </Container>
    </Container>
  );
}

export { Login } 