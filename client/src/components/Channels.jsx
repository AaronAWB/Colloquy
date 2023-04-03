import { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import axios from 'axios';
import '@Styles/Channels.css'

const ChannelList = ({ handleChannelChange }) => {
  
    const [channels, setChannels] = useState([]);
    const [selectedChannel, setSelectedChannel] = useState(channels[0]);

    useEffect(() => {
        axios.get('/api/channels')
        .then(res => {
            setChannels(res.data);
        })
        .catch (err => {
            console.log(err)
        })
    }, []);

    const handleChannelClick = (channel) => {
        const channelName = channel.name;
        setSelectedChannel(channel);
        handleChannelChange(channelName);
    };

    console.log(selectedChannel)

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