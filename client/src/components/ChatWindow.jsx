import { Form, InputGroup, Button } from 'react-bootstrap';

const ChatWindow = ({ guest }) => {
    return(
        <div className='chat-container rounded shadow p-3 mb-3 mt-3'>
            <div className='message-bar-container'>
                <InputGroup>
                    <Form.Control className='message-bar' type='text' id='messageInput' />
                    <Button type='submit' variant='primary' disabled={guest}>Send</Button>
                </InputGroup>
            </div>
        </div>
    );
}

export default ChatWindow;