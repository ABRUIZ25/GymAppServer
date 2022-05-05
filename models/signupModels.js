const mongoose = require('mongoose')

const SignUpTemplate = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true
    },
    LastName: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    PersonalTrainer: {
        type: Boolean,
        require: true
    },
    Owner: {
        type: Boolean,
        required: true
    },
    UserName: {
        type: String,
        required: true
    },
    PassWord: {
        type: String,
        required: true
    },
    Date: {
        type: Date,
        default: Date.now
    },

})

module.exports = mongoose.model('mytable', SignUpTemplate)