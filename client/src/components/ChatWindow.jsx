import { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { socket } from '@Utils/index';
import { Message } from '@Components/index';

const ChatWindow = ({ guest, currentChannel, username, userId }) => {

    const [newMessage, setNewMessage] = useState("");
    const [displayedMessages, setDisplayedMessages] = useState([]);

    useEffect(() => {
        getChannelMessages();
    }, [currentChannel]);

    socket.on('message_added', (data) => {
        setDisplayedMessages([...displayedMessages, data]);
        console.log(`Returned new message: ${JSON.stringify(data)}`)
    })

    const getChannelMessages = async () => {
        try {
            const res = await axios.get(`/api/messages/${currentChannel}`)
            setDisplayedMessages(res.data);
        } catch (err) {
            console.log(err)
        }
    }

    const handleSendMessage = e => {
        e.preventDefault();
        if (newMessage) {
            let messageData = { 
                message: newMessage, 
                channel: currentChannel, 
                userId: userId 
            }
        console.log(messageData)
            socket.emit('add_message', messageData);
            setNewMessage("");
        };
    };

    
    const renderMessages = () => {
        return displayedMessages.map((message) => (
            <Message 
                key={message.Id}
                username={username}
                message={message.Message}
                timestamp={message.CreatedAt}
            />
        ));
    }

    return(
        <div className='chat-container rounded shadow p-3 mb-3 mt-3'>
            <div className='messages-container'>
                {renderMessages()}
            </div>
            <div className='message-bar-container'>
                <InputGroup>
                    <Form.Control 
                        className='message-bar' 
                        type='text' 
                        id='messageInput' 
                        value={newMessage}
                        onChange={e => setNewMessage(e.target.value)}
                        />
                    <Button 
                        type='submit' 
                        variant='primary' 
                        disabled={guest} 
                        onClick={handleSendMessage}
                        >Send</Button>
                </InputGroup>
            </div>
        </div>
    );
}

export default ChatWindow;