const mongoose = require('mongoose')


const clientSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    available: {
        type: Boolean,
        required: true,
        default: false
    },
    email: {
        type: String,
        required: false
    },
    city: {
        type: String
    }
})

module.exports = mongoose.model('Clients',clientSchema)