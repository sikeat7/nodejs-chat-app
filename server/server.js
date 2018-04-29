const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage, generateLocationMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New User Connected');

    // socket.emit from Admin text Welcome to chat app
    socket.emit('newMessage', generateMessage('Admin', 'Welcome to chat app'));
    // socket.broadcast.emit from Admin text New user joined
    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined.'));

    socket.on('createMessage', (message, callback) => {
        console.log('createMessage', message);
        io.emit('newMessage', generateMessage(message.from, message.text));
        callback('This is from the server');
    });

    socket.on('createLocationMessage', (coords) => {
        io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longtitude));
    });
});

// Start Server
server.listen(3000, () => {
    console.log('Server is up on port 3000');
});