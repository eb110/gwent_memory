const express = require('express')
const router = express.Router()
let bodyParser = require('body-parser')
router.use(bodyParser.json())

router.get('/games', (req, res) => {
    res.render('./Games/index_games.ejs')
})

router.get('/gwen', (req, res) => {
    res.render('./Games/gwen.ejs')
})

router.post('/gwen_highscore', (req, res) => {
    let counter = req.body.counter
    console.log(counter)
    res.send('counter: ' + counter)
})

module.exports = router