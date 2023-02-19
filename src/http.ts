import express from 'express'
import http from 'http'
import path from 'path'
import { Server } from "socket.io"
const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.use(express.static(path.join(__dirname, '..', 'public')))

app.get('/', (req: express.Request, res: express.Response) => {
    res.sendFile(__dirname + '/index.html')
})

export { server, io }
