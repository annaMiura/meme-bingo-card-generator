const mongoose = require('mongoose');
const Schema = require('./schemas.js');

const programmerMemesModel = mongoose.model('programmerMemes', Schema.programmerHumor);

const dndMemesModel = mongoose.model('dndmemes', Schema.dndmemes);

const overwatchMemesModel = mongoose.model('Overwatch_Memes', Schema.Overwatch_Memes);

const wholesomeMemesModel = mongoose.model('wholesomememes', Schema.wholesomememes);

const sequelMemesModel = mongoose.model('SequelMemes', Schema.SequelMemes);

const prequelMemesModel = mongoose.model('prequelmemes', Schema.prequelmemes);

const lotrMemesModel = mongoose.model('lotrmemes', Schema.lotrmemes);

const aniMemesModel = mongoose.model('animemes', Schema.animemes);

const historyMemesModel = mongoose.model('historymemes', Schema.historymemes);

const lolCatsMemesModel = mongoose.model('lolcats', Schema.lolcats);

const dankMemesModel = mongoose.model('dankmemes', Schema.dankmemes);

module.exports = {
  programmerMemesModel,
  dndMemesModel,
  overwatchMemesModel,
  wholesomeMemesModel,
  sequelMemesModel,
  prequelMemesModel,
  lotrMemesModel,
  aniMemesModel,
  historyMemesModel,
  lolCatsMemesModel,
  dankMemesModel
};