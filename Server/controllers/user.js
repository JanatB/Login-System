const userRouter = require('express').Router();
const userModel = require('../models/user')

// Initial endpoint is '/api/user
userRouter.get('/', (req, res) => {
    res.send('Testing from the userRouter')
})

userRouter.post('/', (req, res) => {
    const body = req.body

    console.log('The body: ', body)

})


module.exports = userRouter

