import bodyParser from 'body-parser'
import express from 'express'
import http from 'http'
import path from 'path'
import { Server } from "socket.io"
import { Message } from './interfaces/message'
import { rooms } from './interfaces/room'
import { User } from './interfaces/user'
const app = express()
const server = http.createServer(app)
const io = new Server(server)

const users: User[] = []
const messages: Message[] = []

app.use(express.static(path.join(__dirname, '..', 'public')))
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.set('views', './public')

app.get('/', (req: express.Request, res: express.Response) => {
    res.render('index')
})

app.post('/chat', (req: express.Request, res: express.Response) => {
    users.push({
        user: req.body.user,
        room: req.body.room
    })

    res.render('chat', {
        user: req.body.user,
        room: req.body.room,
        roomFormatted: rooms[req.body.room],
        messages
    })
})

export { server, io, users, messages }
