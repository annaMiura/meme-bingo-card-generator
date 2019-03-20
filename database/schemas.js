const mongoose = require('mongoose');

const dndmemes = new mongoose.Schema({
  id: String,
  title: String,
  link: String,
  score: Number,
  views: Number,
  nsfw: Boolean
});

const Overwatch_Memes = new mongoose.Schema({
  id: String,
  title: String,
  link: String,
  score: Number,
  views: Number,
  nsfw: Boolean
});

const wholesomememes = new mongoose.Schema({
  id: String,
  title: String,
  link: String,
  score: Number,
  views: Number,
  nsfw: Boolean
});

const SequelMemes = new mongoose.Schema({
  id: String,
  title: String,
  link: String,
  score: Number,
  views: Number,
  nsfw: Boolean
});

const prequelmemes = new mongoose.Schema({
  id: String,
  title: String,
  link: String,
  score: Number,
  views: Number,
  nsfw: Boolean
});

const lotrmemes = new mongoose.Schema({
  id: String,
  title: String,
  link: String,
  score: Number,
  views: Number,
  nsfw: Boolean
});

const animemes = new mongoose.Schema({
  id: String,
  title: String,
  link: String,
  score: Number,
  views: Number,
  nsfw: Boolean
});

const historymemes = new mongoose.Schema({
  id: String,
  title: String,
  link: String,
  score: Number,
  views: Number,
  nsfw: Boolean
});

const lolcats = new mongoose.Schema({
  id: String,
  title: String,
  link: String,
  score: Number,
  views: Number,
  nsfw: Boolean
});

const dankmemes = new mongoose.Schema({
  id: String,
  title: String,
  link: String,
  score: Number,
  views: Number,
  nsfw: Boolean
});

module.exports = {
  dndmemes,
  Overwatch_Memes,
  wholesomememes,
  SequelMemes,
  prequelmemes,
  lotrmemes,
  animemes,
  historymemes,
  lolcats,
  dankmemes
}