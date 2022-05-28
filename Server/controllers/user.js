const bcrypt = require('bcrypt')
const userRouter = require('express').Router();
const userModel = require('../models/user')

// Initial endpoint is '/api/user

userRouter.get('/', (req, res) => {
    res.send('Testing from the userRouter')
})

userRouter.post('/', async (req, res) => {
    const { firstname, lastname, username, email, password } = req.body 

    if (firstname.length == 0 || 
        lastname.length == 0 ||
        username.length == 0 ||
        email.length == 0 ||
        password.length == 0){
            return res.status(400).json({ error: 'Fill in required fields.' })
        }
    
    // Check if username is unique
    const notUnique = await userModel.findOne({ username: username })
    if (notUnique){
        return res.json({ error: "Username is not unique." })
    }
    
    // Hash password
    const hashed = bcrypt.hashSync(password, 10)
    
    const newUser = new userModel({
        firstname: firstname,
        lastname: lastname,
        username: username,
        email: email,
        passwordHash: hashed
    })

    const savedUser = await newUser.save()

    // applied toJSON method to alter response
    res.status(200).json(savedUser) 
    
})

module.exports = userRouter

