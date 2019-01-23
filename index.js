const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('This a basic server for portfolio')
})

app.listen(3000, () => {
    console.log('The server is running through port 3000')
})