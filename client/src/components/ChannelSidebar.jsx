import { useState } from 'react';


import ChannelList from './ChannelList';
import AddChannelModal from './AddChannelModal';
import { socket } from '@Utils/index';

import { Button } from 'react-bootstrap';

const channelSidebar = ({ setCurrentChannel, isGuest }) => {

    const [showChannelModal, setShowChannelModal] = useState(false);

    
    const handleShowChannelModal = () => {setShowChannelModal(true)};
    const handleHideChannelModal = () => {setShowChannelModal(false)};

    const handleChannelChange = (channel, previousChannel) => {
        socket.emit('leave', previousChannel);
        setCurrentChannel(channel);
        };
    

    
    return(
        <>
            <div className='mt-3 channels-title-container rounded shadow'>
                <h3 className='channels-title'>Channels</h3>
            </div>
            <div className='channel-list-container mt-3'>
                <ChannelList handleChannelChange={handleChannelChange} />
            </div>
                <Button 
                    className='new-channel-button btn-sm mt-3' 
                    onClick={handleShowChannelModal} 
                    disabled={isGuest} > 
                    +  
                </Button>
                <AddChannelModal 
                    show = {showChannelModal}
                    hide = {handleHideChannelModal}
                    >
                </AddChannelModal>
        </>
    )    
}

export default channelSidebar;