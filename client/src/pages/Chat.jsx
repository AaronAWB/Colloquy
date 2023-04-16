import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ChannelList, ChatWindow, AddChannelModal } from '@Components/index';
import { AuthMethods, socket, socketConnect, socketDisconnect } from '@Utils/index';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '@Styles/Chat.css';

function Chat () {

    const [currentChannel, setCurrentChannel] = useState('General');
    const [username, setUsername] = useState('Guest');
    const [decodedToken, setDecodedToken] = useState("");
    const [userId, setUserId] = useState("");
    const [showChannelModal, setShowChannelModal] = useState(false);

    const auth = new AuthMethods();
    const navigate = useNavigate();
    const isGuest = username === 'Guest'
    
    const handleShowChannelModal = () => {setShowChannelModal(true)};
    const handleHideChannelModal = () => {setShowChannelModal(false)};
    
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

    const handleLogout = e => {
        e.preventDefault();
        auth.logout();
        socketDisconnect();
        navigate('/login')
        };

    const handleChannelChange = (channel) => {
        setCurrentChannel(channel);
        };

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
            <div className='logout-button-container mt-3'>
                <p className='user-id'>
                    Logged in as: {username}
                </p>
                <Button className ='logout-button' onClick={handleLogout}>
                    Logout
                </Button>
            </div>
            <Row>
            <Col md={3}>
                <div className='mt-3 channels-title-container rounded shadow'>
                    <h3 className='channels-title'>Channels</h3>
                </div>
                <div className='channel-list-container mt-3'>
                    <ChannelList handleChannelChange={handleChannelChange} />
                </div>
                <Button 
                    className='new-channel-button btn-sm mt-3' 
                    onClick={handleShowChannelModal} 
                    disabled={isGuest} > 
                    +  
                </Button>
                <AddChannelModal 
                    show = {showChannelModal}
                    hide = {handleHideChannelModal}
                    >
                </AddChannelModal>
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