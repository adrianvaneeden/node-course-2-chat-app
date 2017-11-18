const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', {
        from: 'Admin',
        text: 'Welcome to the Chat App',
        createAt: new Date().getTime()
    });

    socket.broadcast.emit('newMessage', {
        from: 'Admin',
        text: 'New user joined',
        createAt: new Date().getTime()
    });
    // socket.emit('newEmail', {
    //     from: "adrian@example.com",
    //     text: "Hey, wasssup?",
    //     createAt: 123
    // });

    // socket.emit('newMessage', {
    //     from: 'Adrian',
    //     text: 'See you later',
    //     createdAt: 1234
    // });

    socket.on('createMessage', (message) => {
        console.log('createMessage', message);
        io.emit('newMessage', {
            from: message.from,
            text:message.text,
            createdAt: new Date().getTime()
        });
        // socket.broadcast.emit('newMessage', {
        //     from: message.from,
        //     text: messaget.text,
        //     createdAt: new Date().getTime()
        // });
    });

    // socket.on('createEmail', (newEmail) => {
    //     console.log('createEmail', newEmail);
    // });

    socket.on('disconnect', () => {
        console.log('User was disconnected from server');
    });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
