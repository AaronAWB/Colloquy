import { useState } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { socket } from '@Utils/index';
import '@Styles/AddChannelModal.css';

const AddChannelModal = ({ show, hide }) => {

    const [channelName, setChannelName] = useState("");
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if (channelName.length > 15 || channelName.includes(" ")) {
            setShowAlert(true);
        } else {
            try {
                socket.emit('add_channel', {"Channel_Name": channelName});
            } catch (err) {
                console.log(err);
            }
            setChannelName("");
            hide();
        };
    };

    return(
        <Modal className='add-channel-modal' centered show={show} onHide={hide} backdrop='static'>
            <Modal.Header className='add-channel-modal-header'>
                <Modal.Title className='modal-title text-center'>Add Channel</Modal.Title>
            </Modal.Header>
            <Alert
                className='add-channel-modal-alert' 
                variant="danger" 
                show={showAlert} 
                onClose={() => setShowAlert(false)} dismissible
                >
                Channel name cannot be more than 15 characters or contain spaces.
            </Alert>
            <Modal.Body className='add-channel-modal-body'>
                <Form>
                    <p className='add-channel-modal-text'>
                        Add a new channel! Name cannot be more than 15 characters or contain spaces.
                    </p>
                    <Form.Group>
                        <Form.Control
                            className='channel-name-input shadow' 
                            type='text' 
                            placeholder='Enter channel name'
                            value={channelName}
                            onChange={e => setChannelName(e.target.value)} 
                            />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer className='add-channel-modal-footer'>
                <Button className='add-channel-modal-close-button' data-dismiss='modal' onClick={hide}>
                    Close
                </Button>
                <Button className='add-channel-modal-submit-button' type='submit' onClick={handleSubmit}>
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddChannelModal;