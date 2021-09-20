const router = require('express').Router()
const db = require('../models')

router.get('/', (req, res) => {
    res.json({ msg: 'You hit the /favoriteFoods index route!' })
    // Todo: Get all the foods
})

router.post('/', (req, res) => {
    res.json({ msg: 'You hit the /favoriteFoods POST route!' })
    // Todo: Add a food to the db
})

module.exports = router