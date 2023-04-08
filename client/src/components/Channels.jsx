import { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import axios from 'axios';
import '@Styles/Channels.css'

const ChannelList = ({ handleChannelChange }) => {
  
    const [channels, setChannels] = useState([]);
    const [selectedChannel, setSelectedChannel] = useState(null);

    useEffect(() => {
        axios.get('/api/channels')
        .then(res => {
            setChannels(res.data);
            setSelectedChannel(res.data[0]);
        })
        .catch (err => {
            console.log(err)
        })
    }, []);

    const handleChannelClick = (channel) => {
        const channelName = channel.ChannelName;
        setSelectedChannel(channel);
        console.log(`Channel changed to ${channelName}`);
        try {
            handleChannelChange(channelName);
        } catch (err) {
            console.error(err);
        }
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