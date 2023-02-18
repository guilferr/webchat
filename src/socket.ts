import { io } from "./http";

io.on('connection', (socket) => {
    console.log('Um usuário se conectou!')
    socket.on('disconnect', () => {
        console.log('Usuário desconectado!')
    })
})