const express = require('express')
const app = express()

require('./models/mongoose')

const indexRouter = require('./routes/index')
const gamesRouter = require('./routes/Games/index_games')

app.use(express.urlencoded({ extended: false}))

app.set('view-engine', 'ejs')
app.set('views', __dirname + '/views')
app.use(express.static(__dirname))

app.use('/', indexRouter)
app.use('/games', gamesRouter)

app.listen(process.env.PORT || 3000, () => {
    console.log('router fired up !!! yay :-)')
})


/* gwen initialization
const hs = require('./models/games/gwen/highscore')
async function dbinitial(){
    let tablica = []
    for(let i = 0; i < 10; i++){
        tablica[i] = {}
        tablica[i].name = 'empty'
        tablica[i].score = 999
    }
    const newHS = await new hs({
        records: tablica
    })
    await newHS.save()
}
dbinitial()
*/

