const mongoose = require('mongoose');
const Model = require('./models');

mongoose.connect(`mongodb+srv://meme-bingo-master:${process.env.MONGO_PASSWORD}@memebingo-37upe.mongodb.net/test?retryWrites=true`, { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Successfully connected to DB!'));

const grabMemes = (model) => {
  return Model[model].find()
    .then(memes => {
      return memes;
    })
    .catch(error => {
      console.error('something went wrong with retrieving memes');
    });
}

module.exports = {
  grabMemes
}