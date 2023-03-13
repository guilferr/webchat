import { io, messages, users } from "./http"
import { Message } from "./interfaces/message"

io.on('connection', (socket) => {
    const userWithoutId = users.find((user) => user.id === undefined)
    const userNotFound = users.find((user) => user.user === undefined || user.room === undefined)
    const userInRoom = users.find((user) => userWithoutId.user === user.user && userWithoutId.room === user.room && user.id !== undefined)

    if (userNotFound) {
        users.splice(users.indexOf(userNotFound), 1)
    }

    if (userInRoom) {
        userInRoom.id = socket.id
        users.splice(users.indexOf(userWithoutId), 1)
    }

    if (userWithoutId) {
        userWithoutId.id = socket.id
        socket.join(userWithoutId.room)
    }

    socket.on("message", data => {
        const message: Message = {
            user: data.user,
            room: data.room,
            text: data.message,
            createdAt: new Date()
        }

        messages.push(message)
        io.to(data.room).emit("newMessage", message)
    })

    console.log(users)
})