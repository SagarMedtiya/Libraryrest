
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    author:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true,
    },
    isbn:{
        type: Number,
        required: true
    },
    releasedate:{
        type: Number,
        required: true
    }
})

const BookDB = mongoose.model('bookdb', schema);

module.exports = BookDB;