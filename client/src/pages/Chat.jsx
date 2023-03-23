import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';
import '@Styles/Chat.css'

function renderMessage (user, message) {
    return <p>{user.name}: {message}</p>
}

function Chat () {
    return (
        <Container>
            <Row>
            <Col md={3}>
                <div className='users-container rounded shadow p-3 mt-5 d-flex flex-column'>
                    <div className='panel-header'>
                        <h4>Channels</h4>
                    </div>
                    <div className='flex-grow-1'>
            
                    </div>
                </div>
            </Col>
            <Col md={9}>
                <div className='chat-container rounded shadow p-3 mb-3 mt-5'>
                    <div className='message-bar-container'>
                        <InputGroup>
                            <Form.Control className='message-bar' type='text' id='messageInput' />
                            <Button type='submit' variant='primary'>Send</Button>
                        </InputGroup>
                    </div>
                </div>
            </Col>
            </Row>
        </Container>
    );
}

export { Chat }