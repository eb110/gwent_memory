const express = require('express')
const router = express.Router()

router.get('/games', (req, res) => {
    res.render('./Games/index_games.ejs')
})

module.exports = router