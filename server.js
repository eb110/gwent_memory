const express = require('express')
const app = express()

const indexRouter = require('./routes/index')
const gamesRouter = require('./routes/Games/index_games')

app.use(express.urlencoded({ extended: false}))

app.set('view-engine', 'ejs')
app.set('views', __dirname + '/views')
app.use(express.static('public'))

app.use('/', indexRouter)
app.use('/games', gamesRouter)

app.listen(process.env.PORT || 3000, () => {
    console.log('router fired up !!! yay :-)')
})