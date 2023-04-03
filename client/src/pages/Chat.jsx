import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthMethods, ChannelList, ChatWindow } from '@Components/index';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '@Styles/Chat.css'


function Chat () {

    const [currentChannel, setCurrentChannel] = useState('General');

    const auth = new AuthMethods();
    const navigate = useNavigate();
    const decoded_token = auth.decode();
    const user = decoded_token.sub;
    const isGuest = user === 'Guest'
    
    useEffect(() => {
        if (!auth.loggedIn()) {navigate('/login')};
    }, []);

    const handleLogout = e => {
        e.preventDefault();
        auth.logout();
        navigate('/login')
        };

    const handleChannelChange = (channel) => {
            setCurrentChannel(channel);
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
                    <ChannelList handleChannelChange={handleChannelChange} />
                </div>
            </Col>
            <Col md={9}>
                <ChatWindow guest={isGuest} channel={currentChannel} />
            </Col>
            </Row>
        </Container>
    );
}

export { Chat }