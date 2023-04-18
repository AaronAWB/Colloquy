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
        socket.on('message_added', (data) => {
            setDisplayedMessages(prevMessages => [...prevMessages, data]);
        })
    }, []);

    const getChannelMessages = async () => {
        try {
            const res = await axios.get(`/api/messages/${currentChannel}`);
            const data = res.data;
            setDisplayedMessages(data);
        } catch (err) {
            console.log(err)
        }
    };

    const handleSendMessage = e => {
        e.preventDefault();
        if (newMessage) {
            let messageData = { 
                message: newMessage, 
                channel: currentChannel, 
                userId: userId 
                };
            socket.emit('add_message', messageData);
            setNewMessage("");
        };
    };

    const renderMessages = () => {
        let prevMessageDate = null;
        return displayedMessages.map((message, index) => {
            const messageDate = new Date(message.CreatedAt).toLocaleDateString(
                undefined,
                {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                }
            );
            const dateHasChanged = messageDate !== prevMessageDate;
            prevMessageDate = messageDate;
            return (
                <div key={index}>
                    {dateHasChanged && (
                        <div className='message-date-divider'>
                            <div className='left-line'></div>
                            <div className='message-date'>
                                <span>{messageDate}</span>
                            </div>
                            <div className='right-line'></div>
                        </div>
                    )}
                    <Message 
                        key={message.Id}
                        username={message.Username}
                        message={message.Message}
                        time={message.CreatedAt}
                        isUserMessage={message.UserId === userId}
                    />
                </div>
            )});
    }

    return(
        <div className='chat-container rounded shadow p-3 mb-3 mt-3'>
            <MessagesContainer content={renderMessages()} />
            <div className='message-bar-container'>
                <Form onSubmit={handleSendMessage}>
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
                            >Send</Button>
                    </InputGroup>
                </Form>
            </div>
        </div>
    );
}

export default ChatWindow;