const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    year: {
        type : Number,
        required : true
    }
})

module.exports = mongoose.model('schema', schema)

