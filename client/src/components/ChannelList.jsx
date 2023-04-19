import { useState, useEffect } from 'react';
import axios from 'axios';
import { ListGroup } from 'react-bootstrap';
import { socket } from '@Utils/index';
import '@Styles/ChannelList.css'

const ChannelList = ({ handleChannelChange }) => {
  
    const [channels, setChannels] = useState([]);
    const [selectedChannel, setSelectedChannel] = useState('General');

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

    useEffect(() => {
        socket.emit('join', selectedChannel.ChannelName);
    }, [selectedChannel])

    useEffect(() => {
        socket.on('channel_added', (data) => {
            setChannels(prevChannels => [...prevChannels, data]);
        });
    }, []);

    const handleChannelClick = (channel) => {
        const channelName = channel.ChannelName;
        const previousChannel = selectedChannel.ChannelName;
        setSelectedChannel(channel);
        try {
            handleChannelChange(channelName, previousChannel);
        } catch (err) {
            console.error(err);
        };
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