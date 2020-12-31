const express = require('express')
const router = express.Router()
let bodyParser = require('body-parser')
router.use(bodyParser.json())

let user = {}


router.get('/games', (req, res) => {
    res.render('./Games/index_games.ejs')
})

router.get('/gwen', (req, res) => {
    res.render('./Games/gwen.ejs')
})

router.get('/test', (req, res) => {
    res.send({user: user})
})

router.post('/gwen_highscore', (req, res) => {
    let counter = req.body.counter
    user.counter = counter
    res.send(user)
})

module.exports = router