import { io, users } from "./http"

io.on('connection', (socket) => {
    const userWithoutId = users.find((user) => user.id === undefined)
    if (userWithoutId) {
        userWithoutId.id = socket.id
    }
    console.log(users)
    socket.on('disconnect', () => {
        console.log('Usuário desconectado!')
    })
})