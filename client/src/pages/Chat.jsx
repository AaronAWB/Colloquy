import { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { AuthMethods, ChannelList } from '@Components/index';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import '@Styles/Chat.css'


function Chat () {

    const [channels, setChannels] = useState([])

    const auth = new AuthMethods();
    const navigate = useNavigate();
    const decoded_token = auth.decode();
    const user = decoded_token.sub;
    const isGuest = user === 'Guest'
    
    useEffect(() => {
        if (!auth.loggedIn()) {navigate('/login')};
        axios.get('/api/channels')
        .then(res => {
            setChannels(res.data);
        })
        .catch (err => {
            console.log(err)
        })
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
                <div className='mt-3 channels-title-container rounded shadow'>
                    <h3 className='channels-title'>Channels</h3>
                </div>
                <div className='mt-3'>
                    <ChannelList channels={channels} />
                </div>
            </Col>
            <Col md={9}>
                <div className='chat-container rounded shadow p-3 mb-3 mt-3'>
                    <div className='message-bar-container'>
                        <InputGroup>
                            <Form.Control className='message-bar' type='text' id='messageInput' />
                            <Button type='submit' variant='primary' disabled={isGuest}>Send</Button>
                        </InputGroup>
                    </div>
                </div>
            </Col>
            </Row>
        </Container>
        
    );
}

export { Chat }