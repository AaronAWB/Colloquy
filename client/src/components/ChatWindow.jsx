import { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { socket } from '@Utils/index';

const ChatWindow = ({ guest, currentChannel, user }) => {

    const [message, setMessage] = useState("");

    const handleSend = e => {
        e.preventDefault();
        console.log(currentChannel)
        if (message) {
            socket.emit('add_message', { message: message, channel: currentChannel, user: user });
            setMessage("");
        };
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