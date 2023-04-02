import { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import '@Styles/Channels.css'

const ChannelList = ({ channels }) => {
  
    const [selectedChannel, setSelectedChannel] = useState(null);

    const handleChannelClick = (channel) => {
    setSelectedChannel(channel);
    };


  return (
        <ListGroup className='channel-list shadow'>
        {channels.map((channel) => (
            <ListGroup.Item
                className='channel-list-item'
                key={channel.Id}
                onClick={() => handleChannelClick(channel)}
                active={selectedChannel && selectedChannel.Id === channel.Id}
            >
            # {channel.ChannelName}
            </ListGroup.Item>
        ))}
        </ListGroup>
  );
};

export default ChannelList;