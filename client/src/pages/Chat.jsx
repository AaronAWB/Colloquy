import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import '@Styles/Chat.css'

let userSelf = {
    name: 'AaronAWB',
    messages: [
        { text: "Testing! Testing!"},
        { text: "This is me!"}
    ]
}

let userAndy = {
    name: 'AndyS',
    messages: [
        { text: "Andy1"},
        { text: "Andy2"}
    ]
}

const users = [userSelf, userAndy]

function renderMessage (user, message) {
    return <p>{user.name}: {message}</p>
}

function Chat () {
    return (
        <Container>
            <Row>
            <Col md={3}>
                <div className='users-container rounded bg-light p-3 mt-5 d-flex flex-column'>
                    <h2>Users</h2>
                    <div className='flex-grow-1'>
            
                    </div>
                </div>
            </Col>
            <Col md={9}>
                <div className='chat-container rounded bg-white p-3 mb-3 mt-5'>
                    <h2>Chat</h2>
                    <div>
                        {renderMessage(userAndy, userAndy.messages[0].text)}
                        {renderMessage(userSelf, userSelf.messages[0].text)}
                        {renderMessage(userSelf, userSelf.messages[1].text)}
                    </div>
                </div>
                <div className='message-input-container rounded bg-light p-3'>
                    <InputGroup>
                        <Form.Control type='text' id='messageInput' />
                        <Button type='submit' variant='primary'>Send</Button>
                    </InputGroup>
                </div>
            </Col>
            </Row>
        </Container>
    );
}

export { Chat }