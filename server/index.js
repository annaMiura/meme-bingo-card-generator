require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
var bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const seedFunctions = require('../database/seedData');

app.use(cors());
app.use(express.static(path.join(__dirname, '../build')));
app.use(bodyParser.urlencoded({ extended: false }))

const subRedditMemeList = ['Overwatch_Memes', 'dndmemes', 'wholesomememes', 'SequelMemes', 'prequelmemes', 'lotrmemes', 'animemes', 'historymemes', 'lolcats', 'dankmemes'];

app.get('/testSeedObject', (req, res) => {
  seedFunctions.seedMemes(subRedditMemeList)
    .then(memeObject => {
      return res.send(memeObject);
    })
    .catch(err => {
      console.error('something went wrong with fetching memes', err);
    })
})

app.listen(port, console.log('listening on port ' + port));