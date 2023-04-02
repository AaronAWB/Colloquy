import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import io from 'socket.io-client';
import { AuthMethods, ChannelList, ChatWindow } from '@Components/index';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '@Styles/Chat.css'


function Chat () {

    const [channels, setChannels] = useState([]);
    const [currentChannel, setCurrentChannel] = useState(null);

    const auth = new AuthMethods();
    const navigate = useNavigate();
    const socket = io();
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

    const handleSelectChannel = (channel) => {
            setCurrentChannel(channel);
            console.log(`Channel ${channel} selected.`)
            console.log({currentChannel})
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
                    <ChannelList channels={channels} selectChannel={handleSelectChannel} />
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