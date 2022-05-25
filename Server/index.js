express = require('express')
const app = express()
const taskModel = require('./Models/task')
var cors = require('cors')
const port = 3001

// Middleware
app.use(cors())
app.use(express.json());


app.get('/', (req, res) => {
    res.send("Default Data!")

})

app.get('/api', (req, res) => {
    taskModel.find({}).then(allTasks => {
        res.json(allTasks)
    })

})


app.post('/api', (req, res) => {
    const body = req.body
    const newTask = new taskModel({
        "task": body.task
    })
    newTask.save().then(saved => {
        res.json('Successfully saved to the DB')
    })
    
})

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})
