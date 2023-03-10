import { io, users } from "./http"

io.on('connection', (socket) => {
    const userWithoutId = users.find((user) => user.id === undefined)
    const userInRoom = users.find((user) => userWithoutId.user === user.user && userWithoutId.room === user.room && user.id !== undefined)

    if (userInRoom) {
        userInRoom.id = socket.id
        users.splice(users.indexOf(userWithoutId), 1)
    }

    if (userWithoutId) {
        userWithoutId.id = socket.id
        socket.join(userWithoutId.room)
    }

    console.log(users)
})