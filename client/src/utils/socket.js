import io from 'socket.io-client';

const socket = io({
    autoConnect: false
});

socket.on('connect', () => {
    console.log(socket.connected);
});

socket.on('connect', () => {
    console.log(socket.id);
});

socket.on('connect_error', (err) => {
    console.log(`connect_error due to ${err.message}`);
});

socket.on('disconnect', () => {
    console.log(socket.connected);
});

const socketConnect = () => {
    socket.connect();
}

const socketDisconnect = () => {
    socket.disconnect();
}


export { socket, socketConnect, socketDisconnect };