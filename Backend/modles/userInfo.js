const mongoose = require('mongoose')

/**create schema for userInfo  */

const userSchema = new mongoose.Schema({
    userName : {
        type : String,
    },
    emailId : {
        type : String,
        unique : true,
    },
    password : {
        type : String,
    }
})

const userList = mongoose.model('userData' , userSchema)

module.exports = userList