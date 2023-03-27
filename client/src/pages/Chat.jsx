import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthMethods } from '@Components/index';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import '@Styles/Chat.css'


function Chat ({ token }) {

    const auth = new AuthMethods();
    const navigate = useNavigate();
    let user = token ? token.sub : 'Guest';

    useEffect(() => {
        if (!auth.loggedIn()) {navigate('/login')};
    }, []);

    const handleLogout = e => {
        e.preventDefault();
        auth.logout();
        navigate('/login')
        };

    return (
        
        <Container>
            <div className='logout-button-container mt-3'>
                <p className='user-id'>
                    Logged in as: {user}
                </p>
                <Button variant='danger' className ='logout-button' onClick={handleLogout}>
                    Logout
                </Button>
            </div>
            <Row>
            <Col md={3}>
                <div className='channels-container rounded shadow p-3 mt-3 d-flex flex-column'>
                    <div className='panel-header'>
                        <h4>Channels</h4>
                    </div>
                    <div className='flex-grow-1'>
            
                    </div>
                </div>
            </Col>
            <Col md={9}>
                <div className='chat-container rounded shadow p-3 mb-3 mt-3'>
                    <div className='message-bar-container'>
                        <InputGroup>
                            <Form.Control className='message-bar' type='text' id='messageInput' />
                            <Button type='submit' variant='primary'>Send</Button>
                        </InputGroup>
                    </div>
                </div>
            </Col>
            </Row>
        </Container>
        
    );
}

export { Chat }