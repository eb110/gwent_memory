const express = require('express')
const router = express.Router()
let bodyParser = require('body-parser')
router.use(bodyParser.json())

const HS = require('../../models/games/gwen/highscore')
let hs = []

router.get('/games', (req, res) => {
    res.render('./Games/index_games.ejs')
})

router.get('/gwen', async (req, res) => {
    hs = await HS.find({})
    hs = hs[0].records
    res.render('./Games/gwen.ejs')
})

router.get('/test', (req, res) => {
    res.send({hs: hs})
})

router.post('/gwen_highscore', (req, res) => {
    hs = req.body.hs
    console.log(hs)
    res.send(hs)
})

module.exports = router