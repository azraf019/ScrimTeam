const express = require('express')
const app = express();
const cors = require('cors');
const router = require('./routes');
const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);

app.use(cors());
app.use(express.json());
app.use(router);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("join_room", (data) => {
        socket.join(data);
        console.log(`User with ID: ${socket.id} joined room: ${data}`);
    });

    socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data);
    });

    socket.on("disconnect", () => {
        console.log("User Disconnected", socket.id);
    });
});


(async () => {
    const PORT = 3030;
    server.listen(PORT);
    console.log(`Server listening on port ${PORT}`);
})();
