const express = require('express')
const router = express.Router()

router.get('/games', (req, res) => {
    res.render('./Games/index_games.ejs')
})

router.get('/gwen', (req, res) => {
    res.render('./Games/gwen.ejs')
})

module.exports = router