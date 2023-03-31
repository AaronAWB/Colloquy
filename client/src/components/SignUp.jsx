import { useState } from 'react'
import axios from 'axios'
import { Modal, Button, Form } from 'react-bootstrap';

function SignUp({ hide, show }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();
        let path = '/api/users'
        try {
            const res = await axios.post(path, {username, password});
            console.log(res);
            setUsername("");
            setPassword("");
            hide();
        } catch (err) {
            console.log(err)
        }
    };

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
