// eslint-disable-next-line no-undef
const socket = io()

const inputMessage = document.getElementById('message')
const buttonMessage = document.getElementById('sendMessage')
const buttonLogout = document.getElementById('logout')
const user = document.getElementById('user').innerText
const room = document.getElementById('room').attributes.name.value

inputMessage.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        const message = event.target.value
        const data = {
            message,
            user,
            room
        }

        socket.emit("message", data)

        event.target.value = ""
    }
})

buttonMessage.addEventListener("click", () => {
    const message = inputMessage.value
    const data = {
        message,
        user,
        room
    }

    socket.emit("message", data)

    inputMessage.value = ""
})

buttonLogout.addEventListener("click", () => {
    const data = {
        user,
        room
    }

    socket.emit("logout", data)
    window.location.assign("/")
})

socket.on("newMessage", () => {
    window.location.reload()
})