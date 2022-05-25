const mongoose = require('mongoose');
const config = require('../utils/config')

mongoose.connect(config.MONGODB_URI)
.then(() => {
    console.log('Connected to MongoDB.')
})
.catch((error) => {
    console.log('Error connecting to MongoDB: ', error.message)
})

const userSchema = new mongoose.Schema({
    firstame: String,
    lastName: String,
    email: String,
    password: String
})

module.exports = mongoose.model('user', userSchema)
