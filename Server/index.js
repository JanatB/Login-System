
// Main files - runs server

const http = require('http')
const app = require('./app')
const server = http.createServer(app)
const port = 3001

server.listen(port, () => {
    console.log(`Server running on port ${port}...`)
})

// Goals:
// 3. DONE - Encrypt the password before saving it to the DB + toJSON method 
// 4. DONE - Send token (After successful login)
// 5. DONE - Users cannot have the same username

