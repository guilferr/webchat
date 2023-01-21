import express from 'express'

const app = express()

app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).json({
        test: "test"
    })
})

app.listen(3000, () => {
    console.log('Server is running in http://localhost:3000');
})