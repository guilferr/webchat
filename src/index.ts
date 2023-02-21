import { server } from "./http"
import './socket'

server.listen(3000, () => {
    console.log('Server is running in http://localhost:3000')
})