require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://meme-bingo-master:${process.env.MONGO_PASSWORD}@memebingo-37upe.mongodb.net/test?retryWrites=true`, { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Successfully connected to DB!'));