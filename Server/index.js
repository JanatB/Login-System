
// Main files - runs server

const http = require('http')
const app = require('./app')
const server = http.createServer(app)
const port = 3001

server.listen(port, () => {
    console.log(`Server running on port ${port}...`)
})

// Goals:
// 1. POST request adding a new user
// 2. Understand how to implement login (adding a new user is POST to the userRouter)
