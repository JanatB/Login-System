
// The request Listener

const express = require('express')
const app = express()
const cors = require('cors')
const userRouter = require('./controllers/user')
const loginRouter = require('./controllers/login')

app.use(express.json())
app.use(cors())
app.use('/api/user', userRouter)
app.use('/api/login', loginRouter)

module.exports = app