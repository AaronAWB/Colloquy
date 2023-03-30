import { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';

function SignUp({ hide, show }) {

    const [username, setUsername] = ("");
    const [password, setPassword] = ("");

    const handleSubmit = e => {
        e.preventDefault();
        hide();
    }

    return (
        <Modal centered show={show} onHide={hide}>
            <Modal.Header>
                <Modal.Title>Sign Up</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className='mt-4'>
                        <Form.Control 
                            type='text' 
                            placeholder="Enter new username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                             />
                    </Form.Group>

                    <Form.Group className='mt-4 mb-4'>
                        <Form.Control 
                            type='password' 
                            placeholder="Enter new password" 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' data-dismiss='modal' onClick={hide}>
                    Close
                </Button>
                <Button variant='primary' type='submit' onClick={handleSubmit}>
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SignUp
