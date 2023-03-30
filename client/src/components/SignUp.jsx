import { Modal, Button } from 'react-bootstrap';

function SignUp({ hide, show }) {
    return (
        <Modal centered show={show} onHide={hide}>
            <Modal.Header>
                <Modal.Title>Sign Up</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Here is the body text.
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' data-dismiss='modal' onClick={hide}>
                    Close
                </Button>
                <Button variant='primary' onClick={hide}>
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default SignUp
