import io from 'socket.io-client';

const socket = io({
    autoConnect: false
});

const socketConnect = () => {
    socket.connect();
};

const socketDisconnect = () => {
    socket.disconnect();
};

socket.on('connect', () => {
    console.log(`Socketio connected: ${socket.connected}`);
});

socket.on('connect', () => {
    console.log(`Socket id: ${socket.id}`);
});

socket.on('connect_error', (err) => {
    console.log(`connect_error due to ${err.message}`);
});

socket.on('disconnect', () => {
    console.log(`Socketio connected: ${socket.connected}`);
});


export { socket, socketConnect, socketDisconnect };