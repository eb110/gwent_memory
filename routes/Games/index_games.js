const express = require('express')
const router = express.Router()
let bodyParser = require('body-parser')
router.use(bodyParser.json())

const HS = require('../../models/games/gwen/highscore')
let hs = []
let id = 0

router.get('/games', (req, res) => {
    res.render('./Games/index_games.ejs')
})

router.get('/gwen', async (req, res) => {
    hs = await HS.find({})
    id = hs[0]._id
    hs = hs[0].records
    res.render('./Games/gwen.ejs')
})

router.get('/test', (req, res) => {
    res.send({hs: hs})
})

router.post('/new_game', (req, res) => { 
    res.redirect('./gwen')
})

router.post('/gwen_highscore', async (req, res) => {
    hs = req.body.hs
    await HS.updateOne({
        _id: id
    },{
        $set: {
             records: hs
        }
    })
    res.send(hs)
})

module.exports = router