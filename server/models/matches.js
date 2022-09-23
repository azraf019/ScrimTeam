const mongoose = require('./db.js');


const matches = new mongoose.Schema({
    teamName: String,
    rank: String,
    date: Date,
    server: String,
    description: String,

});

const MatchModel = mongoose.model('matches', matches);

module.exports = MatchModel;