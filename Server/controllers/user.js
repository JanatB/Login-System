const bcrypt = require('bcrypt');
const { default: mongoose } = require('mongoose');
const userRouter = require('express').Router();
const userModel = require('../models/user')

// Initial endpoint is '/api/user'

userRouter.get('/:id', async (req, res) => {
    const ID = req.params.id
    const user = await userModel.findById(ID)
    return res.json(user)
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

    if (username.indexOf(' ') >= 0){
        return res.status(400).json({ error: 'Username cannot contain spaces.' })
    }

    if (email.includes('@gmail.com') == false){
        return res.status(400).json({ error: 'Please enter a valid email address.' })
    }
    console.log('Email address was valid :)')
    
    // Check if username is unique
    const notUnique = await userModel.findOne({ username: username })
    if (notUnique){
        return res.status(400).json({ error: "Username is not unique." })
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

