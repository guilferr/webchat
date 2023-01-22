import express from 'express';

const app = express()

app.use(express.static('public'))
app.get('/', (req: express.Request, res: express.Response) => {

    res.sendFile(__dirname + '/index.html');

});

app.listen(3000, () => {
    console.log('Server is running in http://localhost:3000');
})