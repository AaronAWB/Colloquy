import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Header, ChatWindow, ChannelSidebar } from '@Components/index';
import { AuthMethods, socket, socketConnect } from '@Utils/index';
import { Container, Row, Col } from 'react-bootstrap';
import '@Styles/Chat.css';

function Chat () {

    const [currentChannel, setCurrentChannel] = useState('General');
    const [username, setUsername] = useState("");
    const [decodedToken, setDecodedToken] = useState("");
    const [userId, setUserId] = useState("");
    
    const auth = new AuthMethods();
    const navigate = useNavigate();
    const isGuest = username === 'Guest'
        
    useEffect(() => {
        if (!auth.loggedIn()) {navigate("/login")}
        setDecodedToken(auth.decode());
        }, []);

    useEffect(() => {
        if (auth.loggedIn() && !socket.connected) {
            socketConnect();
            };
        }, []);

    useEffect(() => {
    if (decodedToken) {
        setUserId(decodedToken.sub);
        };
    }, [decodedToken]);

    useEffect(() => {
        if (userId) {
            getUsername()
            };
    }, [userId]);

    const getUsername = async () => {
        try {
            const res = await axios.get(`/api/users/${userId}`)
            setUsername(res.data.Username);
        } catch (err) {
            console.log(err)
            };
        };

    return (
        
        <Container>
            <Header username={username} />
            <Row>
            <Col md={3}>
                <ChannelSidebar setCurrentChannel={setCurrentChannel} isGuest={isGuest} />
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