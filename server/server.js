const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New User Connected');

    socket.emit('newMessage',  {
        from: 'Bruce',
        text: 'Hey! What goin on.',
        createAt: 123123
    });

    socket.on('createMessage', (message) => {
        console.log('createMessage', message);
    });
});

// Start Server
server.listen(3000, () => {
    console.log('Server is up on port 3000');
});