const express = require('express')
const app = express()
const router = express.Router()

// app.get('/', (req, res) => {
//     res.send('This a basic server for portfolio')
// })

app.use((req, res, next) => {
    console.log(`Time: ${Date.now()}`)
    next()
})

app.use('/user/:id', (req, res, next) => {
    console.log(`Request Type: ${req.method}`)
    next()
})

app.use('/user/:id', (req, res, next) => {
    res.send(`Hi you are user number: ${req.params.id}`)
})

app.listen(3000, () => {
    console.log('The server is running through port 3000')
})