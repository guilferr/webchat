import bodyParser from 'body-parser'
import express from 'express'
import http from 'http'
import path from 'path'
import { Server } from "socket.io"
const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.use(express.static(path.join(__dirname, '..', 'public')))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req: express.Request, res: express.Response) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

app.post('/chat', (req: express.Request, res: express.Response) => {
    console.log(req.body);

    res.sendFile(path.join(__dirname, '..', 'public', 'chat.html'))
})

export { server, io }
