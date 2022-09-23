const mongoose = require('mongoose');

const url = "mongodb+srv://azraf019:demopass123@cluster0.smpnyfd.mongodb.net/scrimTeam?retryWrites=true&w=majority";

try {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
} catch (error) {
    console.log(error)
}

module.exports = mongoose;
