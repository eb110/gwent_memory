const mongoose = require('mongoose');
const gwen_highscore = new mongoose.Schema({
    records:[]
})

module.exports = mongoose.model('gwen_highscore', gwen_highscore)