require('dotenv').config();
const mongoose = require('mongoose');
const Model = require('./models.js');
const seedData = require('./seedData.js');

mongoose.connect(`mongodb+srv://meme-bingo-master:${process.env.MONGO_PASSWORD}@memebingo-37upe.mongodb.net/test?retryWrites=true`, { useNewUrlParser: true });

const data = seedData.data;

Model.programmerMemesModel.insertMany(data.ProgrammerHumor, (err, docs) => {
  if (err) console.log(err);
  else console.log('programmer memes memes done son!', docs.length);
});

Model.dndMemesModel.insertMany(data.dndmemes, (err, docs) => {
  if (err) console.log(err);
  else console.log('dnd memes done son!', docs);
});

Model.overwatchMemesModel.insertMany(data.Overwatch_Memes, (err, docs) => {
  if (err) console.log(err);
  else console.log('overwatch memes done son!', docs);
});

Model.wholesomeMemesModel.insertMany(data.wholesomememes, (err, docs) => {
  if (err) console.log(err);
  else console.log('wholesome memes done son!', docs);
});

Model.sequelMemesModel.insertMany(data.SequelMemes, (err, docs) => {
  if (err) console.log(err);
  else console.log('sequel memes done son!', docs);
});

Model.prequelMemesModel.insertMany(data.prequelmemes, (err, docs) => {
  if (err) console.log(err);
  else console.log('prequel memes done son!', docs);
});

Model.lotrMemesModel.insertMany(data.lotrmemes, (err, docs) => {
  if (err) console.log(err);
  else console.log('lotr memes done son!', docs);
});

Model.aniMemesModel.insertMany(data.animemes, (err, docs) => {
  if (err) console.log(err);
  else console.log('anime memes done son!', docs);
});

Model.historyMemesModel.insertMany(data.historymemes, (err, docs) => {
  if (err) console.log(err);
  else console.log('history memes done son!', docs);
});

Model.lolCatsMemesModel.insertMany(data.lolcats, (err, docs) => {
  if (err) console.log(err);
  else console.log('cat memes done son!', docs);
});

Model.dankMemesModel.insertMany(data.dankmemes, (err, docs) => {
  if (err) console.log(err);
  else console.log('dank memes done son!', docs);
});
