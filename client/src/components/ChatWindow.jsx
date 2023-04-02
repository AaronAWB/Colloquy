import { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import io from 'socket.io-client';

const ChatWindow = ({ guest, currentChannel }) => {

    const [message, setMessage] = useState("");

    const socket = io();

    const handleSend = e => {
        e.preventDefault();
        console.log({message}, {currentChannel})
        if (message) {
            socket.emit('add_message', { message: {message}, channel: {currentChannel} });
        };
        setMessage("");
    }

    return(
        <div className='chat-container rounded shadow p-3 mb-3 mt-3'>
            <div className='message-bar-container'>
                <InputGroup>
                    <Form.Control 
                        className='message-bar' 
                        type='text' 
                        id='messageInput' 
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        />
                    <Button 
                        type='submit' 
                        variant='primary' 
                        disabled={guest} 
                        onClick={handleSend}
                        >Send</Button>
                </InputGroup>
            </div>
        </div>
    );
}

export default ChatWindow;