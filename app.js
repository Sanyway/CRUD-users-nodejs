// Dep
const express = require('express')

// Routers
const usersRouter = require('./users/users.router')

// Initial Config
const port = 9002
const app = express()

// Json request available
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'Ok'})
})

// API v1 Routes
app.use('/api/v1', usersRouter)

// start server
app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})