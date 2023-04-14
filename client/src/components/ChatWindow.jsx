import { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { socket } from '@Utils/index';
import { MessagesContainer, Message } from '@Components/index';
import '@Styles/ChatWindow.css';


const ChatWindow = ({ guest, currentChannel, userId }) => {

    const [newMessage, setNewMessage] = useState("");
    const [displayedMessages, setDisplayedMessages] = useState([]);

    useEffect(() => {
        getChannelMessages();
    }, [currentChannel]);

    useEffect(() => {
        console.log(displayedMessages);
    }, [displayedMessages]);

    useEffect(() => {
        socket.on('message_added', (data) => {
            console.log(data)
            setDisplayedMessages(prevMessages => [...prevMessages, data]);
            console.log(`Returned new message: ${JSON.stringify(data)}`)
        })
    }, []);

    const getChannelMessages = async () => {
        try {
            const res = await axios.get(`/api/messages/${currentChannel}`);
            console.log(res.data)
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
                username={message.Username}
                message={message.Message}
                time={message.CreatedAt}
            />
        ));
    }

    return(
        <div className='chat-container rounded shadow p-3 mb-3 mt-3'>
            <MessagesContainer content={renderMessages()} />
            <div className='message-bar-container'>
                <InputGroup>
                    <Form.Control 
                        className='message-bar shadow' 
                        type='text' 
                        id='messageInput' 
                        value={newMessage}
                        onChange={e => setNewMessage(e.target.value)}
                        />
                    <Button 
                        className='send-button shadow'
                        type='submit' 
                        disabled={guest} 
                        onClick={handleSendMessage}
                        >Send</Button>
                </InputGroup>
            </div>
        </div>
    );
}

export default ChatWindow;