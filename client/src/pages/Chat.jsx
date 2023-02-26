import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '@Styles/Chat.css'

function Chat () {
    return (
        <Container>
            <Row>
            <Col md={3}>
                <div className='users-container rounded bg-light p-3 mt-5 d-flex flex-column'>
                    <h2>Users</h2>
                    <ul className='flex-grow-1'>
                        
                    </ul>
                </div>
            </Col>
            <Col md={9}>
                <div className='chat-container rounded bg-white p-3 mb-3 mt-5'>
                    <h2>Chat</h2>
                    <div>
                        
                    </div>
                </div>
                <div className='message-input-container rounded bg-light p-3'>
                    <Form>
                        <Form.Group className='mb-3'>
                        <Form.Control type='text' id='messageInput' />
                        </Form.Group>
                        <Button type='submit' variant='primary'>Send</Button>
                    </Form>
                </div>
            </Col>
            </Row>
        </Container>
    );
}

export { Chat }