import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ChannelList, ChatWindow } from '@Components/index';
import { AuthMethods } from '@Utils/index';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '@Styles/Chat.css'


function Chat () {

    const [currentChannel, setCurrentChannel] = useState('General');
    const [username, setUsername] = useState("");

    const auth = new AuthMethods();
    const navigate = useNavigate();
    const decoded_token = auth.decode();
    const userId = decoded_token.sub;
    const isGuest = username === 'Guest'
    
    useEffect(() => {
        if (!auth.loggedIn()) {navigate('/login')};
        getUsername()
    }, []);

    const handleLogout = e => {
        e.preventDefault();
        auth.logout();
        navigate('/login')
        };

    const handleChannelChange = (channel) => {
            setCurrentChannel(channel);
        };
    
    const getUsername = async () => {
        try {
            const res = await axios.get(`/api/users/${userId}`)
            setUsername(res.data.Username);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        console.log(`The channel state in the Chat component is ${currentChannel}`)
        }, [currentChannel])

    return (
        
        <Container>
            <div className='logout-button-container mt-3'>
                <p className='user-id'>
                    Logged in as: {username}
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
                <ChatWindow 
                    guest={isGuest} 
                    currentChannel={currentChannel}
                    username={username}
                    userId={userId} 
                    />
            </Col>
            </Row>
        </Container>
    );
}

export { Chat }