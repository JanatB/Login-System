const mongoose = require('mongoose')
const url = `mongodb+srv://janatB:1181MongoDBjan!@cluster0.rqtkb.mongodb.net/taskList?retryWrites=true&w=majority`

mongoose.connect(url)
.then(result => {
    console.log('Connected to MongoDB....')
})
.catch((error) => {
    console.log('Error connecting to MongoDB: ', error.message)
})

const taskSchema = new mongoose.Schema({
    "task": String
})

module.exports = mongoose.model('task', taskSchema) 