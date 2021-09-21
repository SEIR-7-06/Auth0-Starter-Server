const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
    name: string,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Food = mongoose.model('Food', foodSchema)

module.exports = Food