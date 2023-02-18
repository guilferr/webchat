import express from 'express';
import http from 'http';
import { Server } from "socket.io";
const app = express()
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'))

app.get('/', (req: express.Request, res: express.Response) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('Um usuário se conectou!');
    socket.on('disconnect', () => {
        console.log('Usuário desconectado!');
    });
});

server.listen(3000, () => {
    console.log('Server is running in http://localhost:3000');
})