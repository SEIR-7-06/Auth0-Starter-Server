const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    auth0Id: String,
    favoriteFoods: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Food'
    }]
})

const User = mongoose.model('User', userSchema)

module.exports = User