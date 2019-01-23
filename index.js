const express = require('express')
const app = express()

// Sets Pug as template engine
app.set('view engine', 'pug')

// app.use is for biding middleware
app.use((req, res, next) => {
    let  current_datetime = new Date(Date.now())
    console.log(`Date: ${current_datetime.getUTCDate()}/${current_datetime.getUTCMonth()+1}/${current_datetime.getUTCFullYear()}`)
    console.log(`Request Type: ${req.method}`)
    next()
})

// this sets index route with index.html template
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Hello World',
        message: 'This is my first express app',
        paragraph: 'I think i gonna like this'
    })
})

app.get('/user/:id', (req, res, next) => {
    res.send(`Hi you are user number: ${req.params.id}`)
})



app.listen(3000, () => {
    console.log('The server is running through port 3000')
})