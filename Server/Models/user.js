const mongoose = require("mongoose");

// The ids of the notes are stored within the user document as an array of Mongo ids.
// TASKS is the 
const userSchema = mongoose.Schema({
    username: String,
    name: String,
    passWordHash: String,
    tasks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'task'
        },


    ]
})

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
      // the passwordHash should not be revealed
      delete returnedObject.passwordHash
    }
  })
  

const user = mongoose.model('user', userSchema)

module.exports = user