const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: {
      origin: "http://localhost:8080"
    }
  });
const cors = require('cors')

const port = process.env.PORT || 3000;

app.use(cors())

io.on('connection', (socket) => {
    console.log('IO connection');

    socket.on('new-message', (data) => {
        console.log('message', data);
    })
})

server.listen(port, () => {
    console.log(`Server is started on port ${port}`);
})