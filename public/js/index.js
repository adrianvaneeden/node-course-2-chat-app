var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');


    socket.emit('createMessage', {
        from: "imke@example.com",
        text: "Hi cookie here's a message"
    });
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
    console.log('New message received', message);
});

socket.on('newMessage', function (message) {
    console.log('newMessage', message);
});
