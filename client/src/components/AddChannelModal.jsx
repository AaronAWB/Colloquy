import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { socket } from '@Utils/index';
import '@Styles/AddChannelModal.css';

const AddChannelModal = ({ show, hide }) => {

    const [channelName, setChannelName] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        try {
            socket.emit('add_channel', {"Channel_Name": channelName});
        } catch (err) {
            console.log(err);
        }
        setChannelName("");
        hide();
    };

    return(
        <Modal className='add-channel-modal' centered show={show} onHide={hide} backdrop='static'>
            <Modal.Header closeButton>
                <Modal.Title className='modal-title text-center'>Add Channel</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <p>
                        Add a new channel! Name cannot be more than 15 characters.
                    </p>
                    <Form.Group>
                        <Form.Control 
                            type='text' 
                            placeholder='Enter channel name'
                            value={channelName}
                            onChange={e => setChannelName(e.target.value)} 
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
    )
}

export default AddChannelModal;