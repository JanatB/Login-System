
// The request Listener

const express = require('express')
const app = express()
const cors = require('cors')
const userRouter = require('./controllers/user')

app.use(express.json())
app.use(cors())
app.use('/api/user', userRouter)


module.exports = app