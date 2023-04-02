import { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import '@Styles/Channels.css'

const ChannelList = ({ channels }) => {
  const [selectedChannel, setSelectedChannel] = useState(null);

  const handleChannelClick = (channel) => {
    setSelectedChannel(channel);
  };

  return (
    <ListGroup className='channel-list'>
      {channels.map((channel) => (
        <ListGroup.Item
            className='channel-list-item'
            key={channel.id}
            onClick={() => handleChannelClick(channel)}
            active={selectedChannel && selectedChannel.id === channel.id}
        >
          {channel.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default ChannelList;