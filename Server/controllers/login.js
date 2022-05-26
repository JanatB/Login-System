const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()
const userModel = require('../models/user')

// default '/api/login'

loginRouter.post('/', async (req, res) => {
    const { username, password } = req.body

    // Find user with that given username
    const user = await userModel.findOne({ username: username })

    const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(password, user.passwordHash)

    if (!(user && passwordCorrect)) {
        return res.status(401).json({
            error: 'invalid username or password'
        })
    }

    const userForToken = {
        username: user.username,
        id: user._id
    }
    
    const token = jwt.sign(userForToken, process.env.SECRET)
    
    res.status(200).send({ token, username: user.username, firstname: user.firstname })

})

module.exports = loginRouter