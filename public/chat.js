// eslint-disable-next-line no-undef
const socket = io()

const inputMessage = document.getElementById('message')
const user = document.getElementById('user').textContent
const room = document.getElementById('room').attributes.name.value
console.log(room)
inputMessage.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        const message = event.target.value
        const data = {
            message,
            user,
            room
        }

        socket.emit("message", data)
    }
})