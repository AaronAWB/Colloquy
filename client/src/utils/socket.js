import io from 'socket.io-client';

const socket = io({
    autoConnect: false
});

socket.on("connect", () => {
    console.log(socket.connected);
  });

socket.on('connect', () => {
    console.log(socket.id);
  });

socket.on('connect_error', (err) => {
    console.log(`connect_error due to ${err.message}`);
  });

export default socket;