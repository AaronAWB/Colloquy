import { useState } from 'react'
import axios from 'axios'
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import '@Styles/SignUp.css'

function SignUp({ hide, show }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [alertMessage, setAlertMessage] = useState("");
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = async e => {
        e.preventDefault();
        if (username.length > 15 || username.includes(" ") || username === "") {
            setAlertMessage('Username cannot be blank, longer than 15 characters, or contain spaces. Please choose a new username.');
            setShowAlert(true);
        } else {
            let path = '/api/users'
            try {
                const res = await axios.post(path, {username, password});
                console.log(res.data);
                if (res.data["Error"]) {
                    setAlertMessage(`Username '${username}' already exists`);
                    setShowAlert(true)
                }
                setUsername("");
                setPassword("");
                hide();
            } catch (err) {
                console.log(err)
                };
            };
        };

    return (
        <Modal className='signup-modal' centered show={show} onHide={hide} onExit={() => (setShowAlert(false))} backdrop='static'>
            <Modal.Header className='signup-modal-header'>
                <Modal.Title className='modal-title text-center'>Sign Up</Modal.Title>
            </Modal.Header>
            <Alert
                className='signup-modal-alert' 
                variant="danger" 
                show={showAlert} 
                onClose={() => setShowAlert(false)} dismissible
                >
                {alertMessage}
            </Alert>
            <Modal.Body className='signup-modal-body'>
                <p className='signup-text'>
                    Sign up to gain access to the chat. 
                    Usernames cannot be longer than 15 characters or contain spaces.
                </p>
                <Form className='signup-modal-form' onSubmit={handleSubmit}>
                    <Form.Group className='signup-modal-form mt-4'>
                        <Form.Control 
                            className='signup-modal-form username-input shadow'
                            type='text' 
                            placeholder="Enter new username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                             />
                    </Form.Group>

                    <Form.Group className='signup-modal-form mt-4 mb-4'>
                        <Form.Control 
                            className='signup-modal-form password-input shadow'
                            type='password' 
                            placeholder="Enter new password" 
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer className='signup-modal-footer'>
                <Button className='modal-dismiss-button' data-dismiss='modal' onClick={hide}>
                    Close
                </Button>
                <Button className='modal-submit-button' type='submit' onClick={handleSubmit}>
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SignUp
