require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
// const proxy = require('html2canvas-proxy');
const bodyParser = require('body-parser');
const db = require('../database/index');
const app = express();
const port = process.env.PORT || 3001;
const seedFunctions = require('../database/helperFunctions');
console.log('TEST', port);

app.use(cors());
app.use(express.static(path.join(__dirname, '../build')));
app.use(bodyParser.urlencoded({ extended: false }));
// app.use('/', proxy());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.get('/programmerHumor', (req, res) => {
  return db.grabMemes('programmerMemesModel')
    .then(memeArray => {
      return res.send(memeArray);
    })
    .catch(error => {
      console.error('something went wrong grabbing programmer memes', error);
    });
});

app.get('/dndmemes', (req, res) => {
  return db.grabMemes('dndMemesModel')
    .then(memeArray => {
      return res.send(memeArray);
    })
    .catch(error => {
      console.error('something went wrong grabbing dnd memes', error);
    });
});

app.get('/Overwatch_Memes', (req, res) => {
  return db.grabMemes('overwatchMemesModel')
  .then(memeArray => {
    return res.send(memeArray);
  })
  .catch(error => {
    console.error('something went wrong grabbing Overwatch memes', error);
  });
});

app.get('/wholesomememes', (req, res) => {
  return db.grabMemes('wholesomeMemesModel')
  .then(memeArray => {
    return res.send(memeArray);
  })
  .catch(error => {
    console.error('something went wrong grabbing wholesome memes', error);
  });
});

app.get('/SequelMemes', (req, res) => {
  return db.grabMemes('sequelMemesModel')
  .then(memeArray => {
    return res.send(memeArray);
  })
  .catch(error => {
    console.error('something went wrong grabbing sequel memes', error);
  });
});

app.get('/prequelmemes', (req, res) => {
  return db.grabMemes('prequelMemesModel')
  .then(memeArray => {
    return res.send(memeArray);
  })
  .catch(error => {
    console.error('something went wrong grabbing prequel memes', error);
  });
});

app.get('/lotrmemes', (req, res) => {
  return db.grabMemes('lotrMemesModel')
  .then(memeArray => {
    return res.send(memeArray);
  })
  .catch(error => {
    console.error('something went wrong grabbing lotr memes', error);
  });
});

app.get('/historymemes', (req, res) => {
  return db.grabMemes('historyMemesModel')
  .then(memeArray => {
    return res.send(memeArray);
  })
  .catch(error => {
    console.error('something went wrong grabbing history memes', error);
  });
});

app.get('/lolcats', (req, res) => {
  return db.grabMemes('lolCatsMemesModel')
  .then(memeArray => {
    return res.send(memeArray);
  })
  .catch(error => {
    console.error('something went wrong grabbing cat memes', error);
  });
});

app.get('/dankmemes', (req, res) => {
  return db.grabMemes('dankMemesModel')
  .then(memeArray => {
    return res.send(memeArray);
  })
  .catch(error => {
    console.error('something went wrong grabbing dAnK memes', error);
  });
});

app.get('/dbSeedData', (req, res) => {
  const subRedditMemeList = ['ProgrammerHumor', 'Overwatch_Memes', 'dndmemes', 'wholesomememes', 'SequelMemes', 'prequelmemes', 'lotrmemes', 'animemes', 'historymemes', 'lolcats', 'dankmemes'];
  seedFunctions.seedMemes(subRedditMemeList)
    .then(memeObject => {
      return res.send(memeObject);
    })
    .catch(err => {
      console.error('something went wrong with fetching memes', err);
    })
});



const programmingMemes = [{
  "id": "Oo3zgId",
  "title": "That's how we do it",
  "link": "https://i.imgur.com/Oo3zgId.jpg",
  "score": 3533,
  "views": 4268,
  "nsfw": false
},
{
  "id": "OCtcuzN",
  "title": "Don't question the Witchcraft",
  "link": "https://i.imgur.com/OCtcuzN.png",
  "score": 213675,
  "views": 231779,
  "nsfw": false
},
{
  "id": "kao1wfx",
  "title": "Highly advanced neural network guesses what you intended to draw",
  "link": "https://i.imgur.com/kao1wfx.mp4",
  "score": 2620,
  "views": 2952,
  "nsfw": false
},
{
  "id": "FA7tiGS",
  "title": "Let's have a quick story point meeting for this one",
  "link": "https://i.imgur.com/FA7tiGS.jpg",
  "score": 1200,
  "views": 1243,
  "nsfw": false
},
{
  "id": "RwMFvz4",
  "title": "Have you seen the same shitty meme enough times to finally unsubscribe from r/ProgrammerHumor?",
  "link": "https://i.imgur.com/RwMFvz4.jpg",
  "score": 20889,
  "views": 23686,
  "nsfw": false
},
{
  "id": "tW38Nd2",
  "title": "Maybe it's time to migrate to Linux",
  "link": "https://i.imgur.com/tW38Nd2.png",
  "score": 7185,
  "views": 23977,
  "nsfw": false
},
{
  "id": "TMUO1ID",
  "title": "Do You Think This Is a Game?",
  "link": "https://i.imgur.com/TMUO1ID.jpg",
  "score": 799,
  "views": 1404,
  "nsfw": false
},
{
  "id": "dUOPFkQ",
  "title": "Open-source calculator, yay!",
  "link": "https://i.imgur.com/dUOPFkQ.jpg",
  "score": 2221,
  "views": 4035,
  "nsfw": false
},
{
  "id": "6FA8v4k",
  "title": "McDonald’s™ logo but it's encoded in Windows-1252",
  "link": "https://i.imgur.com/6FA8v4k.png",
  "score": 821,
  "views": 1085,
  "nsfw": false
},
{
  "id": "stg536t",
  "title": "\\n",
  "link": "https://i.imgur.com/stg536t.png",
  "score": 1696,
  "views": 2417,
  "nsfw": false
},
{
  "id": "gClR7CO",
  "title": "Java Please",
  "link": "https://i.imgur.com/gClR7CO.png",
  "score": 1938,
  "views": 4510,
  "nsfw": false
},
{
  "id": "7QyLLEm",
  "title": "I should've read it more carefully tbh",
  "link": "https://i.imgur.com/7QyLLEm.jpg",
  "score": 803,
  "views": 2160,
  "nsfw": false
},
{
  "id": "yVnHSku",
  "title": "This place has some Exceptional chicken dip",
  "link": "https://i.imgur.com/yVnHSku.jpg",
  "score": 789,
  "views": 1094,
  "nsfw": false
},
{
  "id": "jgeMofC",
  "title": "I feel attacked",
  "link": "https://i.imgur.com/jgeMofC.png",
  "score": 1011,
  "views": 1615,
  "nsfw": false
},
{
  "id": "f4Acorw",
  "title": "My bugs are magical....",
  "link": "https://i.imgur.com/f4Acorw.jpg",
  "score": 1548,
  "views": 2000,
  "nsfw": false
},
{
  "id": "FUYS133",
  "title": "main.cpp:1:42: fatal error: beer.h appears to contain Long Island Iced Tea. Compilation terminated.",
  "link": "https://i.imgur.com/FUYS133.jpg",
  "score": 2039,
  "views": 2417,
  "nsfw": false
},
{
  "id": "C1hTA1Q",
  "title": "except: print('An error occurred.')",
  "link": "https://i.imgur.com/C1hTA1Q.png",
  "score": 1275,
  "views": 1604,
  "nsfw": false
},
{
  "id": "w2ijSqW",
  "title": "I hope you’ll find someone like that",
  "link": "https://i.imgur.com/w2ijSqW.jpg",
  "score": 1165,
  "views": 2081,
  "nsfw": false
},
{
  "id": "aO1IkZH",
  "title": "That comparison......",
  "link": "https://i.imgur.com/aO1IkZH.jpg",
  "score": 3381,
  "views": 5198,
  "nsfw": false
},
{
  "id": "ucURwRU",
  "title": "I'll do that later, boss!",
  "link": "https://i.imgur.com/ucURwRU.jpg",
  "score": 1403,
  "views": 2044,
  "nsfw": false
},
{
  "id": "v0ymrPs",
  "title": "The Natural Language Equivalent of \"Arrays start at 0\"",
  "link": "https://i.imgur.com/v0ymrPs.png",
  "score": 3836,
  "views": 5286,
  "nsfw": false
},
{
  "id": "GweOYo9",
  "title": "Book Humble Pi is counting down the pages",
  "link": "https://i.imgur.com/GweOYo9.jpg",
  "score": 1521,
  "views": 2032,
  "nsfw": false
},
{
  "id": "Gs8J8WF",
  "title": "I saw this joke as a kid. It's only taken me until 24 to get this joke finally ?",
  "link": "https://i.imgur.com/Gs8J8WF.jpg",
  "score": 4761,
  "views": 5881,
  "nsfw": false
},
{
  "id": "ubYGIwU",
  "title": "Strong-ram Competition",
  "link": "https://i.imgur.com/ubYGIwU.png",
  "score": 2494,
  "views": 2976,
  "nsfw": false
},
{
  "id": "8SFJXVY",
  "title": "NaN != NaN",
  "link": "https://i.imgur.com/8SFJXVY.png",
  "score": 4518,
  "views": 5164,
  "nsfw": false
},
{
  "id": "SSyiIUJ",
  "title": "When your old boss calls you asking to fix their problems... Yes for a rate of $100/h",
  "link": "https://i.imgur.com/SSyiIUJ.jpg",
  "score": 840,
  "views": 2826,
  "nsfw": false
},
{
  "id": "MbJtS2Y",
  "title": "How Time was created:",
  "link": "https://i.imgur.com/MbJtS2Y.png",
  "score": 841,
  "views": 2223,
  "nsfw": false
},
{
  "id": "C7O06TT",
  "title": "Saw this posting at university, added the likely outcome",
  "link": "https://i.imgur.com/C7O06TT.jpg",
  "score": 3236,
  "views": 7768,
  "nsfw": false
},
{
  "id": "ZNPlQeW",
  "title": "When you make one small mistake in the algorithm configuration",
  "link": "https://i.imgur.com/ZNPlQeW.jpg",
  "score": 2145,
  "views": 5643,
  "nsfw": false
},
{
  "id": "qq8qmfw",
  "title": "When Devs have to explain",
  "link": "https://i.imgur.com/qq8qmfw.png",
  "score": 375579,
  "views": 378474,
  "nsfw": false
},
{
  "id": "HaKhJMT",
  "title": "God bless Javascript",
  "link": "https://i.imgur.com/HaKhJMT.jpg",
  "score": 42012,
  "views": 57898,
  "nsfw": false
},
{
  "id": "wCjBj62",
  "title": "It's a feature not a bug...",
  "link": "https://i.imgur.com/wCjBj62.png",
  "score": 1381,
  "views": 3055,
  "nsfw": false
},
{
  "id": "J3howaW",
  "title": "It's the damn semi colon I tell you",
  "link": "https://i.imgur.com/J3howaW.jpg",
  "score": 3409,
  "views": 4709,
  "nsfw": false
},
{
  "id": "Z9c7cYH",
  "title": "Time is relative anyway",
  "link": "https://i.imgur.com/Z9c7cYH.jpg",
  "score": 1328,
  "views": 1818,
  "nsfw": false
},
{
  "id": "RHOyMYW",
  "title": "Wii > Xbox",
  "link": "https://i.imgur.com/RHOyMYW.jpg",
  "score": 6113,
  "views": 7649,
  "nsfw": false
},
{
  "id": "xcRTGjZ",
  "title": "Hacker secret discovered",
  "link": "https://i.imgur.com/xcRTGjZ.png",
  "score": 1187,
  "views": 1898,
  "nsfw": false
},
{
  "id": "KOG86Nk",
  "title": "Interaction Design is important.",
  "link": "https://i.imgur.com/KOG86Nk.png",
  "score": 1712,
  "views": 2290,
  "nsfw": false
},
{
  "id": "lSXbTc0",
  "title": "Elevator is broken I think someone commented out function RunElevator {} by mistake",
  "link": "https://i.imgur.com/lSXbTc0.jpg",
  "score": 915,
  "views": 1289,
  "nsfw": false
},
{
  "id": "d2V3m3z",
  "title": "I can’t be alone",
  "link": "https://i.imgur.com/d2V3m3z.jpg",
  "score": 1649,
  "views": 2751,
  "nsfw": false
},
{
  "id": "xEcVfEg",
  "title": "Found this on tinder",
  "link": "https://i.imgur.com/xEcVfEg.jpg",
  "score": 4295,
  "views": 21846,
  "nsfw": false
},
{
  "id": "kTUNidA",
  "title": "When you use TravisCI on a personal project.",
  "link": "https://i.imgur.com/kTUNidA.png",
  "score": 1186,
  "views": 1843,
  "nsfw": false
},
{
  "id": "Faif7T9",
  "title": "seriously which one ?",
  "link": "https://i.imgur.com/Faif7T9.png",
  "score": 2174,
  "views": 4877,
  "nsfw": false
},
{
  "id": "VfaOddN",
  "title": "Baby, you got a startup going",
  "link": "https://i.imgur.com/VfaOddN.jpg",
  "score": 5278,
  "views": 9762,
  "nsfw": false
},
{
  "id": "R3Wks4C",
  "title": "Merge conflict.",
  "link": "https://i.imgur.com/R3Wks4C.jpg",
  "score": 1018,
  "views": 2089,
  "nsfw": false
},
{
  "id": "827EcjX",
  "title": "It's practically a reflex",
  "link": "https://i.imgur.com/827EcjX.jpg",
  "score": 9578,
  "views": 10980,
  "nsfw": false
},
{
  "id": "L9vC1s6",
  "title": "This is the plastic throne that I made from the keyboards of people who said HTML is a programing language",
  "link": "https://i.imgur.com/L9vC1s6.jpg",
  "score": 2353,
  "views": 2711,
  "nsfw": false
},
{
  "id": "SgL4del",
  "title": "Yesterday was just one of those days....",
  "link": "https://i.imgur.com/SgL4del.png",
  "score": 1112,
  "views": 1612,
  "nsfw": false
},
{
  "id": "M9rFYtC",
  "title": "Systems programming class. Help.",
  "link": "https://i.imgur.com/M9rFYtC.jpg",
  "score": 2980,
  "views": 3576,
  "nsfw": false
},
{
  "id": "jcrElt2",
  "title": "That’s how it works",
  "link": "https://i.imgur.com/jcrElt2.jpg",
  "score": 937,
  "views": 1218,
  "nsfw": false
},
{
  "id": "Seyn6W7",
  "title": "They’re also for loops",
  "link": "https://i.imgur.com/Seyn6W7.png",
  "score": 849,
  "views": 1088,
  "nsfw": false
},
{
  "id": "YOqJ82q",
  "title": "Wonder how a full-stack would look…",
  "link": "https://i.imgur.com/YOqJ82q.jpg",
  "score": 1527,
  "views": 2116,
  "nsfw": false
},
{
  "id": "u3ha0nU",
  "title": "Pretty representative",
  "link": "https://i.imgur.com/u3ha0nU.jpg",
  "score": 1133,
  "views": 1372,
  "nsfw": false
},
{
  "id": "u69lzAq",
  "title": "Why are you running ? (:-",
  "link": "https://i.imgur.com/u69lzAq.jpg",
  "score": 991,
  "views": 1206,
  "nsfw": false
},
{
  "id": "gmDF4ef",
  "title": "I mean, your address, you know.",
  "link": "https://i.imgur.com/gmDF4ef.jpg",
  "score": 3786,
  "views": 5205,
  "nsfw": false
},
{
  "id": "JqdifBK",
  "title": "Now that’s something you can try on co-workers!",
  "link": "https://i.imgur.com/JqdifBK.jpg",
  "score": 2211,
  "views": 3213,
  "nsfw": false
},
{
  "id": "O7oXXih",
  "title": "Google images breaks on negative integers",
  "link": "https://i.imgur.com/O7oXXih.png",
  "score": 791,
  "views": 972,
  "nsfw": false
},
{
  "id": "82rVw65",
  "title": "Google images breaks on negative integers",
  "link": "https://i.imgur.com/82rVw65.png",
  "score": 6025,
  "views": 16434,
  "nsfw": false
},
{
  "id": "awrHch6",
  "title": "Hmm....",
  "link": "https://i.imgur.com/awrHch6.png",
  "score": 1577,
  "views": 2905,
  "nsfw": false
},
{
  "id": "iQSfRwM",
  "title": "It really do be like that sometimes",
  "link": "https://i.imgur.com/iQSfRwM.jpg",
  "score": 3821,
  "views": 6865,
  "nsfw": false
},
{
  "id": "6RldMn9",
  "title": "Hackerman doesn't know what he expected...",
  "link": "https://i.imgur.com/6RldMn9.png",
  "score": 3406,
  "views": 5424,
  "nsfw": false
},
{
  "id": "NPj3IVo",
  "title": "I'd like you all to appreciate my teacher's memeing ability",
  "link": "https://i.imgur.com/NPj3IVo.jpg",
  "score": 1636,
  "views": 2658,
  "nsfw": false
},
{
  "id": "tB2PHZM",
  "title": "With diploma you can do more",
  "link": "https://i.imgur.com/tB2PHZM.jpg",
  "score": 1810,
  "views": 2010,
  "nsfw": false
},
{
  "id": "CzquUnX",
  "title": "Just how I roll",
  "link": "https://i.imgur.com/CzquUnX.jpg",
  "score": 87199,
  "views": 96982,
  "nsfw": false
},
{
  "id": "NdWEUZs",
  "title": "Filthy casual",
  "link": "https://i.imgur.com/NdWEUZs.jpg",
  "score": 1229,
  "views": 1953,
  "nsfw": false
},
{
  "id": "HbUnuVX",
  "title": "Can i pass it by ....value?",
  "link": "https://i.imgur.com/HbUnuVX.jpg",
  "score": 1814,
  "views": 2583,
  "nsfw": false
},
{
  "id": "ZG3uPQY",
  "title": "Relating a little too hard to this update message",
  "link": "https://i.imgur.com/ZG3uPQY.jpg",
  "score": 79863,
  "views": 92255,
  "nsfw": false
},
{
  "id": "gPExsfd",
  "title": "When you abuse autos too much",
  "link": "https://i.imgur.com/gPExsfd.png",
  "score": 1848,
  "views": 3380,
  "nsfw": false
},
{
  "id": "F3PlxY0",
  "title": "So sad (:-",
  "link": "https://i.imgur.com/F3PlxY0.jpg",
  "score": 1261,
  "views": 1462,
  "nsfw": false
},
{
  "id": "pZr7Udx",
  "title": "Password (:-",
  "link": "https://i.imgur.com/pZr7Udx.jpg",
  "score": 1507,
  "views": 4190,
  "nsfw": false
},
{
  "id": "3g8KTxk",
  "title": "When You know only JavaScript and Your Colleagues Discussing C++",
  "link": "https://i.imgur.com/3g8KTxk.jpg",
  "score": 1586,
  "views": 6408,
  "nsfw": false
},
{
  "id": "MnPR6LZ",
  "title": "So sad",
  "link": "https://i.imgur.com/MnPR6LZ.jpg",
  "score": 5866,
  "views": 24842,
  "nsfw": false
},
{
  "id": "1ZnMLvT",
  "title": "Language of the Gods",
  "link": "https://i.imgur.com/1ZnMLvT.jpg",
  "score": 2142,
  "views": 4191,
  "nsfw": false
},
{
  "id": "XHnsvcO",
  "title": "C with Nachos: Autocorrect is brilliant!",
  "link": "https://i.imgur.com/XHnsvcO.png",
  "score": 2194,
  "views": 3662,
  "nsfw": false
},
{
  "id": "zjScjBJ",
  "title": "This tree is not a tree",
  "link": "https://i.imgur.com/zjScjBJ.jpg",
  "score": 954,
  "views": 1479,
  "nsfw": false
},
{
  "id": "zSmz399",
  "title": "“Thanos JS reduces the file size of your project down to 50%, by randomly deleting half of the files.”",
  "link": "https://i.imgur.com/zSmz399.jpg",
  "score": 47504,
  "views": 70668,
  "nsfw": false
},
{
  "id": "yx5x1r5",
  "title": "Don’t forget to use descriptive naming for your variables boys",
  "link": "https://i.imgur.com/yx5x1r5.jpg",
  "score": 4310,
  "views": 5702,
  "nsfw": false
},
{
  "id": "zjhBH3L",
  "title": "I should probably stop giving my classes personalities when debugging threading sync issues :/",
  "link": "https://i.imgur.com/zjhBH3L.png",
  "score": 869,
  "views": 2619,
  "nsfw": false
},
{
  "id": "VHR0DOU",
  "title": "Thanks autocomplete",
  "link": "https://i.imgur.com/VHR0DOU.jpg",
  "score": 1054,
  "views": 2157,
  "nsfw": false
},
{
  "id": "wOMlRgy",
  "title": "Oof my eyes (x-post r/Pewdiepiesubmissions)",
  "link": "https://i.imgur.com/wOMlRgy.jpg",
  "score": 5870,
  "views": 6480,
  "nsfw": false
},
{
  "id": "BJAB1z6",
  "title": "Code working after 5 years.",
  "link": "https://i.imgur.com/BJAB1z6.png",
  "score": 1043,
  "views": 1615,
  "nsfw": false
},
{
  "id": "axw6FnB",
  "title": "Actual requirement at my organization.",
  "link": "https://i.imgur.com/axw6FnB.jpg",
  "score": 4904,
  "views": 7004,
  "nsfw": false
},
{
  "id": "SeZucQH",
  "title": "All I wanted to do was read an article on my commute..",
  "link": "https://i.imgur.com/SeZucQH.jpg",
  "score": 1329,
  "views": 1750,
  "nsfw": false
},
{
  "id": "ZhwIuAA",
  "title": "Dreams out of reach",
  "link": "https://i.imgur.com/ZhwIuAA.jpg",
  "score": 4284,
  "views": 4926,
  "nsfw": false
},
{
  "id": "rWmgxT5",
  "title": "so I'm in my embedded systems class..",
  "link": "https://i.imgur.com/rWmgxT5.jpg",
  "score": 20083,
  "views": 25754,
  "nsfw": false
},
{
  "id": "G15c0O4",
  "title": "Thanks, I hate it.",
  "link": "https://i.imgur.com/G15c0O4.jpg",
  "score": 3450,
  "views": 4570,
  "nsfw": false
},
{
  "id": "tWFujBs",
  "title": "Sure, you can just copy each line from stackoverflow..",
  "link": "https://i.imgur.com/tWFujBs.jpg",
  "score": 3101,
  "views": 12157,
  "nsfw": false
},
{
  "id": "zjIx9Gf",
  "title": "404: Plane not found",
  "link": "https://i.imgur.com/zjIx9Gf.png",
  "score": 1158,
  "views": 1841,
  "nsfw": false
},
{
  "id": "4C0V3xo",
  "title": "Checking for equality (got from /g/)",
  "link": "https://i.imgur.com/4C0V3xo.jpg",
  "score": 7852,
  "views": 13324,
  "nsfw": false
},
{
  "id": "lPztqmB",
  "title": "You're gonna get 011010000110000101100011011010110110010101100100",
  "link": "https://i.imgur.com/lPztqmB.jpg",
  "score": 2898,
  "views": 5049,
  "nsfw": false
},
{
  "id": "gIpUYyd",
  "title": "How to recognize a stroke",
  "link": "https://i.imgur.com/gIpUYyd.png",
  "score": 7504,
  "views": 8778,
  "nsfw": false
},
{
  "id": "fd5OpsB",
  "title": "This guy commits",
  "link": "https://i.imgur.com/fd5OpsB.jpg",
  "score": 1456,
  "views": 1911,
  "nsfw": false
},
{
  "id": "0ucPe2C",
  "title": "7 FActs YoU Didn\"t KnOW AbouT VIM that will SHOCK you!",
  "link": "https://i.imgur.com/0ucPe2C.png",
  "score": 2447,
  "views": 6406,
  "nsfw": false
},
{
  "id": "BOp3T1W",
  "title": "HTML+CSS",
  "link": "https://i.imgur.com/BOp3T1W.jpg",
  "score": 801,
  "views": 1570,
  "nsfw": false
},
{
  "id": "f8ENCOx",
  "title": "Legacy Code..",
  "link": "https://i.imgur.com/f8ENCOx.jpg",
  "score": 922,
  "views": 1901,
  "nsfw": false
},
{
  "id": "AMkXA7c",
  "title": "I’ve been looking for hours! (:-",
  "link": "https://i.imgur.com/AMkXA7c.png",
  "score": 852,
  "views": 1298,
  "nsfw": false
},
{
  "id": "8E0RW49",
  "title": "Moving furniture around at work and had some left over.",
  "link": "https://i.imgur.com/8E0RW49.jpg",
  "score": 2822,
  "views": 9484,
  "nsfw": false
},
{
  "id": "e7Gl8Rw",
  "title": "Thanks for declaring that...",
  "link": "https://i.imgur.com/e7Gl8Rw.jpg",
  "score": 164278,
  "views": 212913,
  "nsfw": false
},
{
  "id": "AIGvAzi",
  "title": "Pull My Merge Request (I made the image but doubt I am first to think of it)",
  "link": "https://i.imgur.com/AIGvAzi.jpg",
  "score": 2188,
  "views": 4951,
  "nsfw": false
},
{
  "id": "KSWOHiR",
  "title": "How programmers comment their code",
  "link": "https://i.imgur.com/KSWOHiR.jpg",
  "score": 14520,
  "views": 15124,
  "nsfw": false
},
{
  "id": "7Zn0rFI",
  "title": "Git gud",
  "link": "https://i.imgur.com/7Zn0rFI.png",
  "score": 4249,
  "views": 11955,
  "nsfw": false
},
{
  "id": "MTwimT0",
  "title": "I work with Models (:-",
  "link": "https://i.imgur.com/MTwimT0.jpg",
  "score": 3013,
  "views": 3279,
  "nsfw": false
},
{
  "id": "UpzyjCm",
  "title": "Meanwhile..",
  "link": "https://i.imgur.com/UpzyjCm.jpg",
  "score": 13453,
  "views": 14792,
  "nsfw": false
},
{
  "id": "9beB3oI",
  "title": "Programmers Humor (:-",
  "link": "https://i.imgur.com/9beB3oI.jpg",
  "score": 91512,
  "views": 102756,
  "nsfw": false
},
{
  "id": "wHbD3Jl",
  "title": "programming yoga (:-",
  "link": "https://i.imgur.com/wHbD3Jl.jpg",
  "score": 1477,
  "views": 1685,
  "nsfw": false
},
{
  "id": "Hbo3wQY",
  "title": "Programmers Dressing Style (:-",
  "link": "https://i.imgur.com/Hbo3wQY.jpg",
  "score": 928,
  "views": 1107,
  "nsfw": false
},
{
  "id": "11QnQdu",
  "title": "Did You Know ? (:-",
  "link": "https://i.imgur.com/11QnQdu.jpg",
  "score": 6692,
  "views": 7005,
  "nsfw": false
},
{
  "id": "bEWJcpC",
  "title": "When You GitHub Repo Gets 1 Star (:-",
  "link": "https://i.imgur.com/bEWJcpC.jpg",
  "score": 6731,
  "views": 7454,
  "nsfw": false
},
{
  "id": "DhH99iQ",
  "title": "Task Manager (:-",
  "link": "https://i.imgur.com/DhH99iQ.jpg",
  "score": 4711,
  "views": 4970,
  "nsfw": false
},
{
  "id": "AnBUNr3",
  "title": "Me everytime i write code",
  "link": "https://i.imgur.com/AnBUNr3.jpg",
  "score": 1916,
  "views": 2100,
  "nsfw": false
},
{
  "id": "6AWyESQ",
  "title": "15 Stages of Programming (:-",
  "link": "https://i.imgur.com/6AWyESQ.png",
  "score": 1944,
  "views": 2131,
  "nsfw": false
},
{
  "id": "GPKZHrO",
  "title": "My Spotify Algorithm (:-",
  "link": "https://i.imgur.com/GPKZHrO.png",
  "score": 2878,
  "views": 3115,
  "nsfw": false
},
{
  "id": "jiELvqA",
  "title": "Full Stack Engineer (:-",
  "link": "https://i.imgur.com/jiELvqA.jpg",
  "score": 1898,
  "views": 2161,
  "nsfw": false
},
{
  "id": "PjWq5Qa",
  "title": "Found on r/Showerthoughts",
  "link": "https://i.imgur.com/PjWq5Qa.png",
  "score": 789,
  "views": 1298,
  "nsfw": false
},
{
  "id": "zOPGME2",
  "title": "Programmers semicolon ;",
  "link": "https://i.imgur.com/zOPGME2.jpg",
  "score": 1582,
  "views": 1761,
  "nsfw": false
},
{
  "id": "ilpDjuN",
  "title": "Kowalski Analysis (:-",
  "link": "https://i.imgur.com/ilpDjuN.jpg",
  "score": 1753,
  "views": 1923,
  "nsfw": false
},
{
  "id": "CkgfSEZ",
  "title": "Me Learning C++",
  "link": "https://i.imgur.com/CkgfSEZ.png",
  "score": 1127,
  "views": 1310,
  "nsfw": false
},
{
  "id": "ffBzWqG",
  "title": "It's Funny Because It's True >>",
  "link": "https://i.imgur.com/ffBzWqG.jpg",
  "score": 8973,
  "views": 9376,
  "nsfw": false
},
{
  "id": "QIQPuye",
  "title": "Programmers Life",
  "link": "https://i.imgur.com/QIQPuye.jpg",
  "score": 2521,
  "views": 2746,
  "nsfw": false
},
{
  "id": "ECWXd1I",
  "title": "Programmer Humor, Team, and Cobol",
  "link": "https://i.imgur.com/ECWXd1I.png",
  "score": 253142,
  "views": 261461,
  "nsfw": false
},
{
  "id": "qxqjeLT",
  "title": "I am a Programmer , Dating a Programmer",
  "link": "https://i.imgur.com/qxqjeLT.jpg",
  "score": 2104,
  "views": 2275,
  "nsfw": false
},
{
  "id": "uruQlao",
  "title": "Does anyone understand asynchronous functions?",
  "link": "https://i.imgur.com/uruQlao.jpg",
  "score": 4878,
  "views": 6629,
  "nsfw": false
},
{
  "id": "hO2dKuL",
  "title": "programmers (:-",
  "link": "https://i.imgur.com/hO2dKuL.png",
  "score": 1347,
  "views": 2180,
  "nsfw": false
},
{
  "id": "zMl3PGN",
  "title": "I am Programmer, I have no life.",
  "link": "https://i.imgur.com/zMl3PGN.jpg",
  "score": 1237,
  "views": 3182,
  "nsfw": false
},
{
  "id": "SSWV2NV",
  "title": "Real Programmers (:-",
  "link": "https://i.imgur.com/SSWV2NV.jpg",
  "score": 4432,
  "views": 33630,
  "nsfw": false
},
{
  "id": "PuZbbrN",
  "title": "Programmers Interviews",
  "link": "https://i.imgur.com/PuZbbrN.jpg",
  "score": 1396,
  "views": 3221,
  "nsfw": false
},
{
  "id": "6HpaU48",
  "title": "Simple call, shouldn't be hard to run",
  "link": "https://i.imgur.com/6HpaU48.png",
  "score": 2008,
  "views": 4319,
  "nsfw": false
},
{
  "id": "bZZdfZM",
  "title": "Meaningful naming",
  "link": "https://i.imgur.com/bZZdfZM.png",
  "score": 7333,
  "views": 11634,
  "nsfw": false
},
{
  "id": "iQgFCBe",
  "title": "2067: 5 TB of ram - running mario",
  "link": "https://i.imgur.com/iQgFCBe.jpg",
  "score": 1465,
  "views": 1909,
  "nsfw": false
},
{
  "id": "PMpn2CF",
  "title": "I can't help it!",
  "link": "https://i.imgur.com/PMpn2CF.jpg",
  "score": 1647,
  "views": 2353,
  "nsfw": false
},
{
  "id": "DFRPstr",
  "title": "Not Sure if Programming is easy, or If I know nothing (:-",
  "link": "https://i.imgur.com/DFRPstr.jpg",
  "score": 1379,
  "views": 1559,
  "nsfw": false
},
{
  "id": "hKlSZjU",
  "title": "Every NewBie Programmer Ever, Gets Excited for the First \"Hello World\" Programm (:-",
  "link": "https://i.imgur.com/hKlSZjU.jpg",
  "score": 864,
  "views": 1032,
  "nsfw": false
},
{
  "id": "gU4oTV7",
  "title": "I had this ready...:(",
  "link": "https://i.imgur.com/gU4oTV7.png",
  "score": 8276,
  "views": 10252,
  "nsfw": false
},
{
  "id": "RAt5SV4",
  "title": "Fix Moms Computer Once , All Future Problems You Fault",
  "link": "https://i.imgur.com/RAt5SV4.jpg",
  "score": 3042,
  "views": 3304,
  "nsfw": false
},
{
  "id": "FU12Gc3",
  "title": "In my defense they are really interesting",
  "link": "https://i.imgur.com/FU12Gc3.png",
  "score": 2847,
  "views": 3601,
  "nsfw": false
},
{
  "id": "Cw7KIM1",
  "title": "Developers..(:",
  "link": "https://i.imgur.com/Cw7KIM1.jpg",
  "score": 929,
  "views": 626803,
  "nsfw": false
},
{
  "id": "cLfARI6",
  "title": "Never ending battle",
  "link": "https://i.imgur.com/cLfARI6.jpg",
  "score": 966,
  "views": 4713,
  "nsfw": false
},
{
  "id": "VSZ2bj7",
  "title": "As a student...",
  "link": "https://i.imgur.com/VSZ2bj7.jpg",
  "score": 4619,
  "views": 15473,
  "nsfw": false
},
{
  "id": "BLHEglQ",
  "title": "When you don't want to deal with validating data",
  "link": "https://i.imgur.com/BLHEglQ.jpg",
  "score": 846,
  "views": 2026,
  "nsfw": false
},
{
  "id": "JdWjeea",
  "title": "NZ Computer Guy knows his clients",
  "link": "https://i.imgur.com/JdWjeea.png",
  "score": 17866,
  "views": 18719,
  "nsfw": false
},
{
  "id": "3O5AHUP",
  "title": "I don’t think you know what that means",
  "link": "https://i.imgur.com/3O5AHUP.jpg",
  "score": 2134,
  "views": 2997,
  "nsfw": false
},
{
  "id": "1U9hlgb",
  "title": "This was one of my commit messages for my capstone projects, no one else in my team knew JavaFX",
  "link": "https://i.imgur.com/1U9hlgb.png",
  "score": 1832,
  "views": 3143,
  "nsfw": false
},
{
  "id": "0hxfpuk",
  "title": "The hardest drug of them all",
  "link": "https://i.imgur.com/0hxfpuk.png",
  "score": 11642,
  "views": 14889,
  "nsfw": false
},
{
  "id": "Mg43zFe",
  "title": "Well... we knew that",
  "link": "https://i.imgur.com/Mg43zFe.png",
  "score": 1135,
  "views": 2216,
  "nsfw": false
},
{
  "id": "q1sqpPh",
  "title": "I dont even know how to make a title for this",
  "link": "https://i.imgur.com/q1sqpPh.jpg",
  "score": 1593,
  "views": 1887,
  "nsfw": false
},
{
  "id": "W5pDJcg",
  "title": "Dammit Mom, we were supposed to make a meme train.",
  "link": "https://i.imgur.com/W5pDJcg.jpg",
  "score": 1797,
  "views": 2594,
  "nsfw": false
},
{
  "id": "tKlC8dt",
  "title": "HTML in real life",
  "link": "https://i.imgur.com/tKlC8dt.jpg",
  "score": 2455,
  "views": 2686,
  "nsfw": false
},
{
  "id": "t5izYMl",
  "title": "Facebook lol",
  "link": "https://i.imgur.com/t5izYMl.jpg",
  "score": 2563,
  "views": 3390,
  "nsfw": false
},
{
  "id": "xUjPoDn",
  "title": "I love DBMS",
  "link": "https://i.imgur.com/xUjPoDn.jpg",
  "score": 1704,
  "views": 2584,
  "nsfw": false
},
{
  "id": "KhaojO1",
  "title": "Javascript........",
  "link": "https://i.imgur.com/KhaojO1.jpg",
  "score": 917,
  "views": 1598,
  "nsfw": false
},
{
  "id": "ugt3B13",
  "title": "Nope",
  "link": "https://i.imgur.com/ugt3B13.jpg",
  "score": 1316,
  "views": 1756,
  "nsfw": false
},
{
  "id": "Qhh1R8k",
  "title": "Always gotten away!",
  "link": "https://i.imgur.com/Qhh1R8k.jpg",
  "score": 1817,
  "views": 3644,
  "nsfw": false
},
{
  "id": "ACbpgX3",
  "title": "Looking at you GraphQL",
  "link": "https://i.imgur.com/ACbpgX3.jpg",
  "score": 1547,
  "views": 2306,
  "nsfw": false
},
{
  "id": "e4epUDG",
  "title": "The other Y2k problem...",
  "link": "https://i.imgur.com/e4epUDG.jpg",
  "score": 15690,
  "views": 30959,
  "nsfw": false
},
{
  "id": "8bYqA2I",
  "title": "I work with models",
  "link": "https://i.imgur.com/8bYqA2I.jpg",
  "score": 39964,
  "views": 52854,
  "nsfw": false
},
{
  "id": "qR0JlzO",
  "title": "When you're so popular your inbox is flooded ???",
  "link": "https://i.imgur.com/qR0JlzO.jpg",
  "score": 3725,
  "views": 4548,
  "nsfw": false
},
{
  "id": "Bcts284",
  "title": "When you realise Fortran is case insensitive",
  "link": "https://i.imgur.com/Bcts284.jpg",
  "score": 4848,
  "views": 6765,
  "nsfw": false
},
{
  "id": "uhsaHBU",
  "title": "If you don’t own a GPU then no machine learning",
  "link": "https://i.imgur.com/uhsaHBU.jpg",
  "score": 3868,
  "views": 4833,
  "nsfw": false
},
{
  "id": "KY9URkU",
  "title": "When your untouched code from yesterday is not working.",
  "link": "https://i.imgur.com/KY9URkU.jpg",
  "score": 10943,
  "views": 30918,
  "nsfw": false
},
{
  "id": "ytsv35S",
  "title": "When you're the Git expert in the team",
  "link": "https://i.imgur.com/ytsv35S.png",
  "score": 1460,
  "views": 2323,
  "nsfw": false
},
{
  "id": "qypAs0A",
  "title": "Just python programmer learning other Lange (?)",
  "link": "https://i.imgur.com/qypAs0A.jpg",
  "score": 1889,
  "views": 2137,
  "nsfw": false
},
{
  "id": "byVMo4O",
  "title": "The future of programming",
  "link": "https://i.imgur.com/byVMo4O.jpg",
  "score": 1440,
  "views": 13229,
  "nsfw": false
},
{
  "id": "gJwROrN",
  "title": "Encourage for learning programming vs Errors",
  "link": "https://i.imgur.com/gJwROrN.jpg",
  "score": 894,
  "views": 1975,
  "nsfw": false
},
{
  "id": "pu97LE9",
  "title": "*cries in javascript*",
  "link": "https://i.imgur.com/pu97LE9.png",
  "score": 1184,
  "views": 2428,
  "nsfw": false
},
{
  "id": "xS3IueB",
  "title": "Which one of you fuck did this",
  "link": "https://i.imgur.com/xS3IueB.jpg",
  "score": 1273,
  "views": 1399,
  "nsfw": false
},
{
  "id": "9kpHuAT",
  "title": "Foiled again!",
  "link": "https://i.imgur.com/9kpHuAT.jpg",
  "score": 1247,
  "views": 2018,
  "nsfw": false
},
{
  "id": "zwsNqVR",
  "title": "Latin is C",
  "link": "https://i.imgur.com/zwsNqVR.png",
  "score": 2187,
  "views": 8820,
  "nsfw": false
},
{
  "id": "TDxhiKo",
  "title": "C++ shorthand guide",
  "link": "https://i.imgur.com/TDxhiKo.jpg",
  "score": 18836,
  "views": 30688,
  "nsfw": false
},
{
  "id": "m8ajMNC",
  "title": "tAbS oR sPaCeS gUyS",
  "link": "https://i.imgur.com/m8ajMNC.jpg",
  "score": 3606,
  "views": 5462,
  "nsfw": false
},
{
  "id": "EkXgY0X",
  "title": "Now Way In or Out",
  "link": "https://i.imgur.com/EkXgY0X.png",
  "score": 1006,
  "views": 1389,
  "nsfw": false
},
{
  "id": "mveTjTt",
  "title": "How to copy an object in JavaScript",
  "link": "https://i.imgur.com/mveTjTt.jpg",
  "score": 2121,
  "views": 3178,
  "nsfw": false
},
{
  "id": "wZdb8Q6",
  "title": "We all have that one expert in our team",
  "link": "https://i.imgur.com/wZdb8Q6.jpg",
  "score": 1047,
  "views": 2578,
  "nsfw": false
},
{
  "id": "KUhJedV",
  "title": "It's the future",
  "link": "https://i.imgur.com/KUhJedV.png",
  "score": 23122,
  "views": 35071,
  "nsfw": false
},
{
  "id": "eaNZEGx",
  "title": "Database 10 year challenge",
  "link": "https://i.imgur.com/eaNZEGx.png",
  "score": 2992,
  "views": 3286,
  "nsfw": false
},
{
  "id": "rF64OBL",
  "title": "Security in a nutshell",
  "link": "https://i.imgur.com/rF64OBL.jpg",
  "score": 2032,
  "views": 5527,
  "nsfw": false
},
{
  "id": "NFe4C3U",
  "title": "AI meme no.1642",
  "link": "https://i.imgur.com/NFe4C3U.jpg",
  "score": 2172,
  "views": 5585,
  "nsfw": false
},
{
  "id": "OhtaVmf",
  "title": "Don't rush me!",
  "link": "https://i.imgur.com/OhtaVmf.jpg",
  "score": 4285,
  "views": 4603,
  "nsfw": false
},
{
  "id": "Lg2cImB",
  "title": "Probably not the first to have done this",
  "link": "https://i.imgur.com/Lg2cImB.jpg",
  "score": 1646,
  "views": 2834,
  "nsfw": false
},
{
  "id": "TITsKED",
  "title": "Are there awards for micromanagement?",
  "link": "https://i.imgur.com/TITsKED.jpg",
  "score": 1713,
  "views": 2570,
  "nsfw": false
},
{
  "id": "QgAqgxc",
  "title": "Teacher dropped this one on me today.",
  "link": "https://i.imgur.com/QgAqgxc.png",
  "score": 849,
  "views": 1148,
  "nsfw": false
},
{
  "id": "xcNxv0d",
  "title": "We've all done it at some point",
  "link": "https://i.imgur.com/xcNxv0d.jpg",
  "score": 1313,
  "views": 2797,
  "nsfw": false
},
{
  "id": "2YxSfWc",
  "title": "Interesting \"Code\" Sample from a movie: Can you guess which one?",
  "link": "https://i.imgur.com/2YxSfWc.jpg",
  "score": 2498,
  "views": 4194,
  "nsfw": false
},
{
  "id": "wNGov3X",
  "title": "title();",
  "link": "https://i.imgur.com/wNGov3X.jpg",
  "score": 1858,
  "views": 2038,
  "nsfw": false
},
{
  "id": "1inVccm",
  "title": "When you’ve got code you’re too afraid to change for ten years",
  "link": "https://i.imgur.com/1inVccm.jpg",
  "score": 1571,
  "views": 1744,
  "nsfw": false
},
{
  "id": "ysp2zVC",
  "title": "It do be like that.",
  "link": "https://i.imgur.com/ysp2zVC.png",
  "score": 2063,
  "views": 5988,
  "nsfw": false
},
{
  "id": "Yu73h7e",
  "title": "You guys are better than me",
  "link": "https://i.imgur.com/Yu73h7e.jpg",
  "score": 2782,
  "views": 3249,
  "nsfw": false
},
{
  "id": "78ZyAPx",
  "title": "Reaction of every JS developer when a new JavaScript framework comes out",
  "link": "https://i.imgur.com/78ZyAPx.png",
  "score": 2878,
  "views": 3538,
  "nsfw": false
},
{
  "id": "uSfPRg8",
  "title": "I need this at work",
  "link": "https://i.imgur.com/uSfPRg8.jpg",
  "score": 52769,
  "views": 54548,
  "nsfw": false
},
{
  "id": "ucJ5PK7",
  "title": "Our programming exam with 50% students failed",
  "link": "https://i.imgur.com/ucJ5PK7.jpg",
  "score": 1242,
  "views": 3930,
  "nsfw": false
},
{
  "id": "TSRSPXM",
  "title": "RIP Git. Backup Branch - DONOTDELETE",
  "link": "https://i.imgur.com/TSRSPXM.jpg",
  "score": 1014,
  "views": 2376,
  "nsfw": false
},
{
  "id": "CWaOBlQ",
  "title": "What unit test?",
  "link": "https://i.imgur.com/CWaOBlQ.jpg",
  "score": 979,
  "views": 2042,
  "nsfw": false
},
{
  "id": "SafMWWK",
  "title": "Okey Chrome...",
  "link": "https://i.imgur.com/SafMWWK.png",
  "score": 1251,
  "views": 1790,
  "nsfw": false
},
{
  "id": "pKAaPou",
  "title": "Git is getting more demanding",
  "link": "https://i.imgur.com/pKAaPou.jpg",
  "score": 842,
  "views": 1016,
  "nsfw": false
},
{
  "id": "34oggAu",
  "title": "Matlab is not a real programming language",
  "link": "https://i.imgur.com/34oggAu.jpg",
  "score": 2497,
  "views": 0,
  "nsfw": false
},
{
  "id": "lPtN5Zq",
  "title": "*NSYNC is a Dereferenced Pointer",
  "link": "https://i.imgur.com/lPtN5Zq.jpg",
  "score": 952,
  "views": 0,
  "nsfw": false
},
{
  "id": "iNllr6w",
  "title": "Had this discussion a couple of days ago",
  "link": "https://i.imgur.com/iNllr6w.jpg",
  "score": 7468,
  "views": 0,
  "nsfw": false
},
{
  "id": "pec0nfs",
  "title": "When your temporary bug fix goes into production",
  "link": "https://i.imgur.com/pec0nfs.jpg",
  "score": 3660,
  "views": 0,
  "nsfw": false
},
{
  "id": "94RWw2G",
  "title": "Filthy liar",
  "link": "https://i.imgur.com/94RWw2G.png",
  "score": 1191,
  "views": 0,
  "nsfw": false
},
{
  "id": "LWwHj77",
  "title": "When your temporary bug fix goes into production",
  "link": "https://i.imgur.com/LWwHj77.jpg",
  "score": 19199,
  "views": 0,
  "nsfw": false
},
{
  "id": "ndlurRm",
  "title": "Programmers life ?",
  "link": "https://i.imgur.com/ndlurRm.jpg",
  "score": 73640,
  "views": 0,
  "nsfw": false
},
{
  "id": "nDT2DCf",
  "title": "Microsoft going their own way",
  "link": "https://i.imgur.com/nDT2DCf.png",
  "score": 2784,
  "views": 0,
  "nsfw": false
},
{
  "id": "7PFRRzC",
  "title": "Roses are Red ......",
  "link": "https://i.imgur.com/7PFRRzC.jpg",
  "score": 12324,
  "views": 0,
  "nsfw": false
},
{
  "id": "ABKz5tW",
  "title": "they are superior",
  "link": "https://i.imgur.com/ABKz5tW.jpg",
  "score": 19938,
  "views": 0,
  "nsfw": false
},
{
  "id": "EYRRkZC",
  "title": "Happy Valentine's to fellow programmers who are now writing comments for entire projects they did in 2018",
  "link": "https://i.imgur.com/EYRRkZC.png",
  "score": 2891,
  "views": 0,
  "nsfw": false
},
{
  "id": "YY5xp1t",
  "title": "Found in r/Powershell",
  "link": "https://i.imgur.com/YY5xp1t.jpg",
  "score": 1334,
  "views": 0,
  "nsfw": false
},
{
  "id": "uul9QD7",
  "title": "Supergirl is such a futuristic series.",
  "link": "https://i.imgur.com/uul9QD7.jpg",
  "score": 2161,
  "views": 0,
  "nsfw": false
},
{
  "id": "jWxqI6F",
  "title": "What? You're still using night theme?",
  "link": "https://i.imgur.com/jWxqI6F.png",
  "score": 4657,
  "views": 0,
  "nsfw": false
},
{
  "id": "xVNMBka",
  "title": "The user's solution for everything...",
  "link": "https://i.imgur.com/xVNMBka.png",
  "score": 12547,
  "views": 0,
  "nsfw": false
},
{
  "id": "sZZdqyc",
  "title": "Advanced error throwing - Found in a program of a friend of mine",
  "link": "https://i.imgur.com/sZZdqyc.jpg",
  "score": 815,
  "views": 0,
  "nsfw": false
},
{
  "id": "jnn1ofM",
  "title": "Skilled or cocky?",
  "link": "https://i.imgur.com/jnn1ofM.jpg",
  "score": 2807,
  "views": 0,
  "nsfw": false
},
{
  "id": "CZkKy8r",
  "title": "Faking ourselves",
  "link": "https://i.imgur.com/CZkKy8r.jpg",
  "score": 1802,
  "views": 0,
  "nsfw": false
},
{
  "id": "OicLANY",
  "title": "Ah yes, the classic software language of dots and lines",
  "link": "https://i.imgur.com/OicLANY.jpg",
  "score": 1585,
  "views": 0,
  "nsfw": false
},
{
  "id": "Gi1LLJY",
  "title": "White for Respec",
  "link": "https://i.imgur.com/Gi1LLJY.png",
  "score": 2263,
  "views": 0,
  "nsfw": false
},
{
  "id": "VxfP1UZ",
  "title": "Hello, World!",
  "link": "https://i.imgur.com/VxfP1UZ.jpg",
  "score": 940,
  "views": 0,
  "nsfw": false
},
{
  "id": "OrzSQf0",
  "title": "When you get berated over mistakes even after your pull request gets denied",
  "link": "https://i.imgur.com/OrzSQf0.jpg",
  "score": 1334,
  "views": 0,
  "nsfw": false
},
{
  "id": "nde28P0",
  "title": "Well, they're not wrong to think that....",
  "link": "https://i.imgur.com/nde28P0.png",
  "score": 4710,
  "views": 0,
  "nsfw": false
},
{
  "id": "AecSqn8",
  "title": "A little honesty in a changelog is so refreshing",
  "link": "https://i.imgur.com/AecSqn8.png",
  "score": 1132,
  "views": 0,
  "nsfw": false
},
{
  "id": "0Jynj0i",
  "title": "y tho?",
  "link": "https://i.imgur.com/0Jynj0i.png",
  "score": 6396,
  "views": 0,
  "nsfw": false
},
{
  "id": "P9Im7PD",
  "title": "I noticed that the people over at Ecma International are also friends of version control",
  "link": "https://i.imgur.com/P9Im7PD.png",
  "score": 1239,
  "views": 0,
  "nsfw": false
},
{
  "id": "v1qS5fN",
  "title": "Thank U Net",
  "link": "https://i.imgur.com/v1qS5fN.jpg",
  "score": 3144,
  "views": 0,
  "nsfw": false
},
{
  "id": "nCOQ77f",
  "title": "Math + Algorithms = Machine Learning",
  "link": "https://i.imgur.com/nCOQ77f.jpg",
  "score": 343736,
  "views": 0,
  "nsfw": false
},
{
  "id": "2rEmpaE",
  "title": "Ctrl S",
  "link": "https://i.imgur.com/2rEmpaE.jpg",
  "score": 7211,
  "views": 0,
  "nsfw": false
},
{
  "id": "WYHPfxJ",
  "title": "JS developers when a new framework is released",
  "link": "https://i.imgur.com/WYHPfxJ.jpg",
  "score": 4416,
  "views": 0,
  "nsfw": false
},
{
  "id": "2D6QAUt",
  "title": "Motto for Enterprise UI Development",
  "link": "https://i.imgur.com/2D6QAUt.jpg",
  "score": 3278,
  "views": 0,
  "nsfw": false
},
{
  "id": "w0MSi3O",
  "title": "We've all done it.",
  "link": "https://i.imgur.com/w0MSi3O.jpg",
  "score": 273162,
  "views": 0,
  "nsfw": false
},
{
  "id": "ndau8Tj",
  "title": "Use white to pay respect",
  "link": "https://i.imgur.com/ndau8Tj.png",
  "score": 1585,
  "views": 0,
  "nsfw": false
},
{
  "id": "0BlRdNW",
  "title": "Drop the versioncontrol",
  "link": "https://i.imgur.com/0BlRdNW.jpg",
  "score": 1475,
  "views": 0,
  "nsfw": false
},
{
  "id": "oRRpwP0",
  "title": "Lawyers defending programmers",
  "link": "https://i.imgur.com/oRRpwP0.png",
  "score": 1693,
  "views": 0,
  "nsfw": false
},
{
  "id": "UzFhImU",
  "title": "Inspirational Quote",
  "link": "https://i.imgur.com/UzFhImU.png",
  "score": 7901,
  "views": 0,
  "nsfw": false
},
{
  "id": "ErkZQ22",
  "title": "//TODO: Insert title",
  "link": "https://i.imgur.com/ErkZQ22.png",
  "score": 5536,
  "views": 0,
  "nsfw": false
},
{
  "id": "VTCQJuI",
  "title": "This seems to work better",
  "link": "https://i.imgur.com/VTCQJuI.png",
  "score": 827,
  "views": 0,
  "nsfw": false
},
{
  "id": "ovlhy2Y",
  "title": "My one wish",
  "link": "https://i.imgur.com/ovlhy2Y.png",
  "score": 2523,
  "views": 0,
  "nsfw": false
},
{
  "id": "H47oTxy",
  "title": "When HR copies what you say verbatim into the job description.",
  "link": "https://i.imgur.com/H47oTxy.png",
  "score": 797,
  "views": 0,
  "nsfw": false
},
{
  "id": "NzzdAUc",
  "title": "Making memes is easier than working on a Friday",
  "link": "https://i.imgur.com/NzzdAUc.jpg",
  "score": 2222,
  "views": 0,
  "nsfw": false
},
{
  "id": "x85GisG",
  "title": "On point ?",
  "link": "https://i.imgur.com/x85GisG.jpg",
  "score": 3449,
  "views": 0,
  "nsfw": false
},
{
  "id": "JLZWIsD",
  "title": "The worlds smartest coder!",
  "link": "https://i.imgur.com/JLZWIsD.jpg",
  "score": 5639,
  "views": 0,
  "nsfw": false
},
{
  "id": "K51PufU",
  "title": "When asking that one coworker about their favourite IDE",
  "link": "https://i.imgur.com/K51PufU.png",
  "score": 3414,
  "views": 0,
  "nsfw": false
},
{
  "id": "qYhIiGM",
  "title": "No, I'm not busy.",
  "link": "https://i.imgur.com/qYhIiGM.png",
  "score": 978,
  "views": 0,
  "nsfw": false
},
{
  "id": "8B7GArU",
  "title": "I was told there would be karma on cake day",
  "link": "https://i.imgur.com/8B7GArU.png",
  "score": 3363,
  "views": 0,
  "nsfw": false
},
{
  "id": "FdyCW41",
  "title": "NO! WHY!? PUT it back.",
  "link": "https://i.imgur.com/FdyCW41.png",
  "score": 847,
  "views": 0,
  "nsfw": false
},
{
  "id": "tzKu4sT",
  "title": "Truly the worst crime known to humanity",
  "link": "https://i.imgur.com/tzKu4sT.jpg",
  "score": 2734,
  "views": 0,
  "nsfw": false
},
{
  "id": "MHVF2gk",
  "title": "The perfect date!",
  "link": "https://i.imgur.com/MHVF2gk.jpg",
  "score": 1691,
  "views": 0,
  "nsfw": false
},
{
  "id": "Iyla4Wd",
  "title": "C",
  "link": "https://i.imgur.com/Iyla4Wd.jpg",
  "score": 1040,
  "views": 0,
  "nsfw": false
},
{
  "id": "OkfLL8j",
  "title": "How do you think I learned Perl?",
  "link": "https://i.imgur.com/OkfLL8j.jpg",
  "score": 1270,
  "views": 0,
  "nsfw": false
},
{
  "id": "gNp6S3M",
  "title": "It's my motivation...",
  "link": "https://i.imgur.com/gNp6S3M.png",
  "score": 1339,
  "views": 0,
  "nsfw": false
},
{
  "id": "o2VOGvA",
  "title": "Just when you thought you were safe",
  "link": "https://i.imgur.com/o2VOGvA.png",
  "score": 946,
  "views": 0,
  "nsfw": false
},
{
  "id": "y2ie3cg",
  "title": "The old ways were the best - X-Post from r/lightroast",
  "link": "https://i.imgur.com/y2ie3cg.jpg",
  "score": 2026,
  "views": 0,
  "nsfw": false
},
{
  "id": "ZRylmDG",
  "title": "It's all I ever want",
  "link": "https://i.imgur.com/ZRylmDG.jpg",
  "score": 1628,
  "views": 0,
  "nsfw": false
},
{
  "id": "56Qqc3N",
  "title": "I love TFS",
  "link": "https://i.imgur.com/56Qqc3N.jpg",
  "score": 1493,
  "views": 0,
  "nsfw": false
},
{
  "id": "PFg7wt1",
  "title": "Code coverage",
  "link": "https://i.imgur.com/PFg7wt1.jpg",
  "score": 1055,
  "views": 0,
  "nsfw": false
},
{
  "id": "JDnOxMG",
  "title": "Ever happened to you ?",
  "link": "https://i.imgur.com/JDnOxMG.jpg",
  "score": 1777,
  "views": 0,
  "nsfw": false
},
{
  "id": "ZiH6uCA",
  "title": "Facebook splitting up the word “sponsored” to sneak past adblockers",
  "link": "https://i.imgur.com/ZiH6uCA.jpg",
  "score": 210639,
  "views": 0,
  "nsfw": false
},
{
  "id": "83yjEyl",
  "title": "800 MiB dependencies for an HTML parser is insane...",
  "link": "https://i.imgur.com/83yjEyl.jpg",
  "score": 1809,
  "views": 0,
  "nsfw": false
},
{
  "id": "DNhwK9F",
  "title": "Xml type documentation",
  "link": "https://i.imgur.com/DNhwK9F.jpg",
  "score": 2347,
  "views": 0,
  "nsfw": false
},
{
  "id": "iXAJp8E",
  "title": "Behold the power of creation!",
  "link": "https://i.imgur.com/iXAJp8E.png",
  "score": 208635,
  "views": 0,
  "nsfw": false
},
{
  "id": "PFgnS2k",
  "title": "A modern solution for a modern problem",
  "link": "https://i.imgur.com/PFgnS2k.jpg",
  "score": 1835,
  "views": 0,
  "nsfw": false
},
{
  "id": "BXMRUUo",
  "title": "Yup",
  "link": "https://i.imgur.com/BXMRUUo.png",
  "score": 2300,
  "views": 0,
  "nsfw": false
},
{
  "id": "82Ix2gi",
  "title": "100 % Safe programs",
  "link": "https://i.imgur.com/82Ix2gi.jpg",
  "score": 8605,
  "views": 0,
  "nsfw": false
},
{
  "id": "0IK8xXi",
  "title": "Machine learning without math can’t happen lol",
  "link": "https://i.imgur.com/0IK8xXi.jpg",
  "score": 4098,
  "views": 0,
  "nsfw": false
},
{
  "id": "yNL31u7",
  "title": "When you CTRL-Z until you see old code, copy it, and then Shift-CTRL-Z and paste it back into the current code",
  "link": "https://i.imgur.com/yNL31u7.jpg",
  "score": 1696,
  "views": 0,
  "nsfw": false
},
{
  "id": "c0IqH5A",
  "title": "npm install",
  "link": "https://i.imgur.com/c0IqH5A.jpg",
  "score": 2340,
  "views": 0,
  "nsfw": false
},
{
  "id": "jfzaSpT",
  "title": "Magic",
  "link": "https://i.imgur.com/jfzaSpT.jpg",
  "score": 1360,
  "views": 0,
  "nsfw": false
},
{
  "id": "GQBTBWy",
  "title": "2 minutes silence",
  "link": "https://i.imgur.com/GQBTBWy.jpg",
  "score": 1132,
  "views": 0,
  "nsfw": false
},
{
  "id": "Ql3BT2i",
  "title": "Surprise!",
  "link": "https://i.imgur.com/Ql3BT2i.jpg",
  "score": 1968,
  "views": 0,
  "nsfw": false
},
{
  "id": "bo6vsjm",
  "title": "Legend mode",
  "link": "https://i.imgur.com/bo6vsjm.jpg",
  "score": 1662,
  "views": 0,
  "nsfw": false
},
{
  "id": "cNMlGWN",
  "title": "¯\\_(ツ)_/¯",
  "link": "https://i.imgur.com/cNMlGWN.jpg",
  "score": 20625,
  "views": 0,
  "nsfw": false
},
{
  "id": "TqDBH8h",
  "title": "I think my new textbook is trying to compete with O'Reilly on book covers",
  "link": "https://i.imgur.com/TqDBH8h.jpg",
  "score": 1447,
  "views": 0,
  "nsfw": false
},
{
  "id": "rf1fSZx",
  "title": "Pixel art",
  "link": "https://i.imgur.com/rf1fSZx.png",
  "score": 1055,
  "views": 0,
  "nsfw": false
},
{
  "id": "6bpS3T2",
  "title": "Dependency hell",
  "link": "https://i.imgur.com/6bpS3T2.png",
  "score": 1939,
  "views": 0,
  "nsfw": false
},
{
  "id": "fuXGXF8",
  "title": "See right through me!",
  "link": "https://i.imgur.com/fuXGXF8.png",
  "score": 3994,
  "views": 0,
  "nsfw": false
},
{
  "id": "bQW8lTH",
  "title": "I've wasted 45min because of my own stupidity",
  "link": "https://i.imgur.com/bQW8lTH.jpg",
  "score": 83481,
  "views": 0,
  "nsfw": false
},
{
  "id": "wUTR1zt",
  "title": "what uni taught me",
  "link": "https://i.imgur.com/wUTR1zt.jpg",
  "score": 946,
  "views": 0,
  "nsfw": false
},
{
  "id": "E8p6HPG",
  "title": "BF told me I am his number one",
  "link": "https://i.imgur.com/E8p6HPG.jpg",
  "score": 1892,
  "views": 0,
  "nsfw": false
},
{
  "id": "VxyDJeB",
  "title": "Cloud developers hate him for this one weird tip!",
  "link": "https://i.imgur.com/VxyDJeB.jpg",
  "score": 2971,
  "views": 0,
  "nsfw": false
},
{
  "id": "2U8BsEX",
  "title": "Those are some real languages",
  "link": "https://i.imgur.com/2U8BsEX.jpg",
  "score": 8499,
  "views": 0,
  "nsfw": false
},
{
  "id": "wJbH5N8",
  "title": "That's how we roll",
  "link": "https://i.imgur.com/wJbH5N8.jpg",
  "score": 2025,
  "views": 0,
  "nsfw": false
},
{
  "id": "25SPLud",
  "title": "Dope ass website",
  "link": "https://i.imgur.com/25SPLud.png",
  "score": 1575,
  "views": 0,
  "nsfw": false
},
{
  "id": "SAMw7Pw",
  "title": "Instructions unclear",
  "link": "https://i.imgur.com/SAMw7Pw.jpg",
  "score": 202318,
  "views": 0,
  "nsfw": false
},
{
  "id": "fkJUVPj",
  "title": "NaN",
  "link": "https://i.imgur.com/fkJUVPj.jpg",
  "score": 2778,
  "views": 0,
  "nsfw": false
},
{
  "id": "kmCG5z8",
  "title": "LGTM",
  "link": "https://i.imgur.com/kmCG5z8.jpg",
  "score": 4114,
  "views": 0,
  "nsfw": false
},
{
  "id": "uOrLcyf",
  "title": "Scientists Recently Uncover Evidence of Ancient Meme From Early Aughts",
  "link": "https://i.imgur.com/uOrLcyf.png",
  "score": 1512,
  "views": 0,
  "nsfw": false
},
{
  "id": "FKOcabd",
  "title": "Communism!!",
  "link": "https://i.imgur.com/FKOcabd.jpg",
  "score": 6434,
  "views": 0,
  "nsfw": false
},
{
  "id": "6Tt6g5M",
  "title": "Software Development Process [Fixed]",
  "link": "https://i.imgur.com/6Tt6g5M.jpg",
  "score": 1485,
  "views": 0,
  "nsfw": false
},
{
  "id": "Bf7oL1k",
  "title": "Perfect.",
  "link": "https://i.imgur.com/Bf7oL1k.jpg",
  "score": 800,
  "views": 0,
  "nsfw": false
},
{
  "id": "vi0QWKy",
  "title": "I found a pretty big bug in Chrome",
  "link": "https://i.imgur.com/vi0QWKy.jpg",
  "score": 811,
  "views": 0,
  "nsfw": false
},
{
  "id": "nxzsEK1",
  "title": "When someone tells me my if statements are not AI.",
  "link": "https://i.imgur.com/nxzsEK1.jpg",
  "score": 5044,
  "views": 0,
  "nsfw": false
},
{
  "id": "oaEbUpB",
  "title": "We just make them think that...right?",
  "link": "https://i.imgur.com/oaEbUpB.jpg",
  "score": 133051,
  "views": 0,
  "nsfw": false
},
{
  "id": "OIOgJ0b",
  "title": "There's always that one CS student",
  "link": "https://i.imgur.com/OIOgJ0b.jpg",
  "score": 1893,
  "views": 0,
  "nsfw": false
},
{
  "id": "2ni65Ic",
  "title": "X-post from /r/ChoosingBeggars",
  "link": "https://i.imgur.com/2ni65Ic.jpg",
  "score": 2623,
  "views": 0,
  "nsfw": false
},
{
  "id": "eiJ0Mhl",
  "title": "Every time",
  "link": "https://i.imgur.com/eiJ0Mhl.jpg",
  "score": 2785,
  "views": 0,
  "nsfw": false
},
{
  "id": "MqZz4Xi",
  "title": "No Jira, No Cry",
  "link": "https://i.imgur.com/MqZz4Xi.jpg",
  "score": 1135,
  "views": 0,
  "nsfw": false
},
{
  "id": "WRfFvMe",
  "title": "print \"2020 is gonna be rough\"",
  "link": "https://i.imgur.com/WRfFvMe.png",
  "score": 2836,
  "views": 0,
  "nsfw": false
},
{
  "id": "AVRnmYA",
  "title": "A front end developer’s journey",
  "link": "https://i.imgur.com/AVRnmYA.jpg",
  "score": 3031,
  "views": 0,
  "nsfw": false
},
{
  "id": "zq1svtd",
  "title": "Way ahead of his time",
  "link": "https://i.imgur.com/zq1svtd.png",
  "score": 2408,
  "views": 0,
  "nsfw": false
},
{
  "id": "QqhfI2X",
  "title": "Just like you end up looking like your dog...",
  "link": "https://i.imgur.com/QqhfI2X.jpg",
  "score": 966,
  "views": 0,
  "nsfw": false
},
{
  "id": "wGzT3b8",
  "title": "Front-end security.",
  "link": "https://i.imgur.com/wGzT3b8.jpg",
  "score": 3915,
  "views": 0,
  "nsfw": false
},
{
  "id": "9Mh0NoW",
  "title": "If it works don't touch it",
  "link": "https://i.imgur.com/9Mh0NoW.png",
  "score": 7328,
  "views": 0,
  "nsfw": false
},
{
  "id": "k8mGmEH",
  "title": "Truly..",
  "link": "https://i.imgur.com/k8mGmEH.jpg",
  "score": 2131,
  "views": 0,
  "nsfw": false
},
{
  "id": "lSUSbTn",
  "title": "Sorry Microsoft, I take issue with the heretics who use kebab-case instead of snake_case or camelCase for their variables",
  "link": "https://i.imgur.com/lSUSbTn.png",
  "score": 1618,
  "views": 0,
  "nsfw": false
},
{
  "id": "raeYD9D",
  "title": "Wake up robo homie",
  "link": "https://i.imgur.com/raeYD9D.jpg",
  "score": 2695,
  "views": 0,
  "nsfw": false
},
{
  "id": "7nLv6YB",
  "title": "My hatred grows every time QA finds a new issue",
  "link": "https://i.imgur.com/7nLv6YB.jpg",
  "score": 2979,
  "views": 0,
  "nsfw": false
},
{
  "id": "7I8RvCP",
  "title": "This will happen in 2019",
  "link": "https://i.imgur.com/7I8RvCP.png",
  "score": 1018,
  "views": 0,
  "nsfw": false
},
{
  "id": "Gxqhhmr",
  "title": "and now - old news",
  "link": "https://i.imgur.com/Gxqhhmr.jpg",
  "score": 1214,
  "views": 0,
  "nsfw": false
},
{
  "id": "Q7QWXgL",
  "title": "That's not what I meant, Google.",
  "link": "https://i.imgur.com/Q7QWXgL.png",
  "score": 1659,
  "views": 0,
  "nsfw": false
},
{
  "id": "QOMJ7DR",
  "title": "It works as we intended it to in Internet Explorer.",
  "link": "https://i.imgur.com/QOMJ7DR.png",
  "score": 6890,
  "views": 0,
  "nsfw": false
},
{
  "id": "vCYpknB",
  "title": "Confirmation that NoSQL is best for .NET programs",
  "link": "https://i.imgur.com/vCYpknB.png",
  "score": 1437,
  "views": 0,
  "nsfw": false
},
{
  "id": "dmOsVHa",
  "title": "so that's what I did today",
  "link": "https://i.imgur.com/dmOsVHa.png",
  "score": 5337,
  "views": 0,
  "nsfw": false
},
{
  "id": "QhZvO77",
  "title": "If only...",
  "link": "https://i.imgur.com/QhZvO77.png",
  "score": 1850,
  "views": 0,
  "nsfw": false
},
{
  "id": "FJrEgxV",
  "title": "\"I can't open source my code, the internet will tear it to shreds!\"",
  "link": "https://i.imgur.com/FJrEgxV.png",
  "score": 4951,
  "views": 0,
  "nsfw": false
},
{
  "id": "RsvY4Fo",
  "title": "I'm quite happy not having to work on critical infrastructure",
  "link": "https://i.imgur.com/RsvY4Fo.png",
  "score": 948,
  "views": 0,
  "nsfw": false
},
{
  "id": "ig1Dhji",
  "title": "Don't suffer in silence, us java folk have all been there..",
  "link": "https://i.imgur.com/ig1Dhji.png",
  "score": 2199,
  "views": 0,
  "nsfw": false
},
{
  "id": "HDKxMaj",
  "title": "De way is clear",
  "link": "https://i.imgur.com/HDKxMaj.jpg",
  "score": 107353,
  "views": 0,
  "nsfw": false
},
{
  "id": "JGjEPrj",
  "title": "Hmmmmmmmmmmmmmmmmmmmm",
  "link": "https://i.imgur.com/JGjEPrj.jpg",
  "score": 16628,
  "views": 0,
  "nsfw": false
},
{
  "id": "jJBK186",
  "title": "Explains a few things",
  "link": "https://i.imgur.com/jJBK186.jpg",
  "score": 219602,
  "views": 0,
  "nsfw": false
},
{
  "id": "Xyx90mR",
  "title": "And people wonder why programmers seem annoyed at being disturbed?",
  "link": "https://i.imgur.com/Xyx90mR.png",
  "score": 87579,
  "views": 0,
  "nsfw": false
},
{
  "id": "IaPgtq0",
  "title": "Internet speeds are getting expensive",
  "link": "https://i.imgur.com/IaPgtq0.jpg",
  "score": 913,
  "views": 0,
  "nsfw": false
},
{
  "id": "vPt3l8b",
  "title": "STOP RIGHT THERE CRIMINAL SCUM",
  "link": "https://i.imgur.com/vPt3l8b.png",
  "score": 4150,
  "views": 0,
  "nsfw": false
},
{
  "id": "EG34qwc",
  "title": "I haven't seen this meme in a couple weeks and realized I missed it ?",
  "link": "https://i.imgur.com/EG34qwc.jpg",
  "score": 11301,
  "views": 0,
  "nsfw": false
},
{
  "id": "Fhqhml8",
  "title": "It only saved the company thousands of dollars",
  "link": "https://i.imgur.com/Fhqhml8.jpg",
  "score": 6906,
  "views": 0,
  "nsfw": false
},
{
  "id": "BU9E8gN",
  "title": "He also uses coding",
  "link": "https://i.imgur.com/BU9E8gN.jpg",
  "score": 5602,
  "views": 0,
  "nsfw": false
},
{
  "id": "3xcnMt9",
  "title": "Syntax error poetry",
  "link": "https://i.imgur.com/3xcnMt9.jpg",
  "score": 2814,
  "views": 0,
  "nsfw": false
},
{
  "id": "40QJIng",
  "title": "The perfect date",
  "link": "https://i.imgur.com/40QJIng.png",
  "score": 2995,
  "views": 0,
  "nsfw": false
},
{
  "id": "rDYXZEN",
  "title": "The Neopunishment....",
  "link": "https://i.imgur.com/rDYXZEN.jpg",
  "score": 6756,
  "views": 0,
  "nsfw": false
},
{
  "id": "7E70LZv",
  "title": "A better feeling than sex",
  "link": "https://i.imgur.com/7E70LZv.jpg",
  "score": 1249,
  "views": 0,
  "nsfw": false
},
{
  "id": "xNkYz7d",
  "title": "How to get any CS job",
  "link": "https://i.imgur.com/xNkYz7d.png",
  "score": 1309,
  "views": 0,
  "nsfw": false
},
{
  "id": "VmY8Q9k",
  "title": "Try it yourself, this is real",
  "link": "https://i.imgur.com/VmY8Q9k.png",
  "score": 1508,
  "views": 0,
  "nsfw": false
},
{
  "id": "tkp4uCG",
  "title": "Amazing language. The best.",
  "link": "https://i.imgur.com/tkp4uCG.png",
  "score": 2082,
  "views": 0,
  "nsfw": false
},
{
  "id": "xtJSuXz",
  "title": "I tryed nothing and i am all out of ideas.",
  "link": "https://i.imgur.com/xtJSuXz.png",
  "score": 3792,
  "views": 0,
  "nsfw": false
},
{
  "id": "EjtLA6z",
  "title": "New == scary",
  "link": "https://i.imgur.com/EjtLA6z.jpg",
  "score": 13141,
  "views": 0,
  "nsfw": false
},
{
  "id": "cWublF3",
  "title": "So,where did you meet?",
  "link": "https://i.imgur.com/cWublF3.jpg",
  "score": 14616,
  "views": 0,
  "nsfw": false
},
{
  "id": "1KLLPKY",
  "title": "Literally",
  "link": "https://i.imgur.com/1KLLPKY.jpg",
  "score": 3523,
  "views": 0,
  "nsfw": false
},
{
  "id": "dj9yO4D",
  "title": "When you open that project you worked on a year ago...",
  "link": "https://i.imgur.com/dj9yO4D.jpg",
  "score": 1538,
  "views": 0,
  "nsfw": false
},
{
  "id": "syYGXLz",
  "title": "Java development in a nutshell",
  "link": "https://i.imgur.com/syYGXLz.png",
  "score": 846,
  "views": 0,
  "nsfw": false
},
{
  "id": "JJFe008",
  "title": "XML = best programming language!",
  "link": "https://i.imgur.com/JJFe008.jpg",
  "score": 799,
  "views": 0,
  "nsfw": false
},
{
  "id": "iGVUuw3",
  "title": "At least I am a programmer",
  "link": "https://i.imgur.com/iGVUuw3.jpg",
  "score": 5365,
  "views": 0,
  "nsfw": false
},
{
  "id": "1O6TP1x",
  "title": "Gotta have priorities",
  "link": "https://i.imgur.com/1O6TP1x.jpg",
  "score": 2539,
  "views": 0,
  "nsfw": false
},
{
  "id": "cEu831Y",
  "title": "Too true",
  "link": "https://i.imgur.com/cEu831Y.png",
  "score": 2269,
  "views": 0,
  "nsfw": false
},
{
  "id": "oOCP3IM",
  "title": "GitHubs frontend team in a nutshell",
  "link": "https://i.imgur.com/oOCP3IM.jpg",
  "score": 878,
  "views": 0,
  "nsfw": false
},
{
  "id": "AoVvP2Y",
  "title": "Found this gem a few years back",
  "link": "https://i.imgur.com/AoVvP2Y.png",
  "score": 858,
  "views": 0,
  "nsfw": false
},
{
  "id": "gvARhaz",
  "title": "200 SET TITLE BEFORE SUBMITTING",
  "link": "https://i.imgur.com/gvARhaz.png",
  "score": 1214,
  "views": 0,
  "nsfw": false
},
{
  "id": "FrUUJcW",
  "title": "I hope I K Mod M Into Gryffindor",
  "link": "https://i.imgur.com/FrUUJcW.png",
  "score": 784,
  "views": 0,
  "nsfw": false
},
{
  "id": "uc4WSHU",
  "title": "It's supposed to be self documenting!",
  "link": "https://i.imgur.com/uc4WSHU.jpg",
  "score": 10993,
  "views": 0,
  "nsfw": false
},
{
  "id": "EDBVld2",
  "title": "Bonehurting Juice",
  "link": "https://i.imgur.com/EDBVld2.jpg",
  "score": 3015,
  "views": 0,
  "nsfw": false
},
{
  "id": "NHxmrSK",
  "title": "Funny and sad",
  "link": "https://i.imgur.com/NHxmrSK.png",
  "score": 3801,
  "views": 0,
  "nsfw": false
},
{
  "id": "MyO1gD3",
  "title": "Google proposes changes to Chromium which will cripple ad blocking capabilities. Google values your input.",
  "link": "https://i.imgur.com/MyO1gD3.png",
  "score": 1572,
  "views": 0,
  "nsfw": false
},
{
  "id": "y9mySw7",
  "title": "<Checkmate></Checkmate>",
  "link": "https://i.imgur.com/y9mySw7.jpg",
  "score": 1079,
  "views": 0,
  "nsfw": false
},
{
  "id": "BQ3iPbH",
  "title": "Is it just me?",
  "link": "https://i.imgur.com/BQ3iPbH.png",
  "score": 3936,
  "views": 0,
  "nsfw": false
},
{
  "id": "mva14iu",
  "title": "When people use your program",
  "link": "https://i.imgur.com/mva14iu.jpg",
  "score": 59635,
  "views": 0,
  "nsfw": false
},
{
  "id": "pcK7QkY",
  "title": "Frontend vs Backend",
  "link": "https://i.imgur.com/pcK7QkY.jpg",
  "score": 6639,
  "views": 0,
  "nsfw": false
},
{
  "id": "EmMoUA5",
  "title": "We didn't have enough candles for my 28th birthday, so here is what we did.",
  "link": "https://i.imgur.com/EmMoUA5.jpg",
  "score": 13625,
  "views": 0,
  "nsfw": false
},
{
  "id": "QfAvunL",
  "title": "Chrome be like",
  "link": "https://i.imgur.com/QfAvunL.jpg",
  "score": 4672,
  "views": 0,
  "nsfw": false
},
{
  "id": "YFwBkVK",
  "title": "Global variables",
  "link": "https://i.imgur.com/YFwBkVK.jpg",
  "score": 153864,
  "views": 0,
  "nsfw": false
},
{
  "id": "Q3QnsLu",
  "title": "Found this on LinkedIn",
  "link": "https://i.imgur.com/Q3QnsLu.jpg",
  "score": 4582,
  "views": 0,
  "nsfw": false
},
{
  "id": "2tIwGlt",
  "title": "Javascript is bad",
  "link": "https://i.imgur.com/2tIwGlt.png",
  "score": 1369,
  "views": 0,
  "nsfw": false
},
{
  "id": "NlprNrR",
  "title": "blasphemy",
  "link": "https://i.imgur.com/NlprNrR.jpg",
  "score": 1273,
  "views": 0,
  "nsfw": false
},
{
  "id": "6V2zOI9",
  "title": "They say we're learning to make websites then pull out Wix",
  "link": "https://i.imgur.com/6V2zOI9.jpg",
  "score": 2696,
  "views": 0,
  "nsfw": false
},
{
  "id": "ci4JYyQ",
  "title": "hmmm",
  "link": "https://i.imgur.com/ci4JYyQ.jpg",
  "score": 14523,
  "views": 0,
  "nsfw": false
},
{
  "id": "zDACtpe",
  "title": "When Machine Learning goes wrong...",
  "link": "https://i.imgur.com/zDACtpe.jpg",
  "score": 4390,
  "views": 0,
  "nsfw": false
},
{
  "id": "YB2z8YX",
  "title": "The Avenger of web development",
  "link": "https://i.imgur.com/YB2z8YX.jpg",
  "score": 3065,
  "views": 0,
  "nsfw": false
},
{
  "id": "fByAMvn",
  "title": "Vertical Alignment in CSS",
  "link": "https://i.imgur.com/fByAMvn.png",
  "score": 4552,
  "views": 0,
  "nsfw": false
},
{
  "id": "WMqxHWI",
  "title": "AI is nothing but Auto Indent.",
  "link": "https://i.imgur.com/WMqxHWI.jpg",
  "score": 1164,
  "views": 0,
  "nsfw": false
},
{
  "id": "IxX7eh4",
  "title": "The AP Computer Science experience",
  "link": "https://i.imgur.com/IxX7eh4.jpg",
  "score": 68928,
  "views": 0,
  "nsfw": false
},
{
  "id": "BNunome",
  "title": "Programming for plumbers",
  "link": "https://i.imgur.com/BNunome.jpg",
  "score": 1473,
  "views": 0,
  "nsfw": false
},
{
  "id": "CYDlOPQ",
  "title": "I am a systems architect and I approve this message....",
  "link": "https://i.imgur.com/CYDlOPQ.jpg",
  "score": 14000,
  "views": 0,
  "nsfw": false
},
{
  "id": "3PWoO6K",
  "title": "A curse",
  "link": "https://i.imgur.com/3PWoO6K.jpg",
  "score": 2772,
  "views": 0,
  "nsfw": false
},
{
  "id": "nef6E6R",
  "title": "Gotta cover all my bases",
  "link": "https://i.imgur.com/nef6E6R.jpg",
  "score": 13761,
  "views": 0,
  "nsfw": false
},
{
  "id": "HF9l2Fe",
  "title": "Unexplained phenomena",
  "link": "https://i.imgur.com/HF9l2Fe.png",
  "score": 3150,
  "views": 0,
  "nsfw": false
},
{
  "id": "pky2kof",
  "title": "When your CPU fetches from RAM",
  "link": "https://i.imgur.com/pky2kof.jpg",
  "score": 3917,
  "views": 0,
  "nsfw": false
},
{
  "id": "nVDM1To",
  "title": "o.o",
  "link": "https://i.imgur.com/nVDM1To.png",
  "score": 7380,
  "views": 0,
  "nsfw": false
},
{
  "id": "kAq9QGF",
  "title": "When you find your issue on Stack Overflow but there’s only one answer with a single line of code and 0 upvotes",
  "link": "https://i.imgur.com/kAq9QGF.png",
  "score": 1402,
  "views": 0,
  "nsfw": false
},
{
  "id": "mWLKdfR",
  "title": "Even though I know better, I still do this sometimes",
  "link": "https://i.imgur.com/mWLKdfR.jpg",
  "score": 1658,
  "views": 0,
  "nsfw": false
},
{
  "id": "IAekhXl",
  "title": "True story",
  "link": "https://i.imgur.com/IAekhXl.jpg",
  "score": 9822,
  "views": 0,
  "nsfw": false
},
{
  "id": "7cxlFeh",
  "title": "That's what we do",
  "link": "https://i.imgur.com/7cxlFeh.png",
  "score": 3684,
  "views": 0,
  "nsfw": false
},
{
  "id": "8kHeMlB",
  "title": "TODO...",
  "link": "https://i.imgur.com/8kHeMlB.png",
  "score": 1105,
  "views": 0,
  "nsfw": false
},
{
  "id": "8W6LU2d",
  "title": "The worst feeling of all",
  "link": "https://i.imgur.com/8W6LU2d.jpg",
  "score": 2028,
  "views": 0,
  "nsfw": false
},
{
  "id": "27HAOOX",
  "title": "United we stand...",
  "link": "https://i.imgur.com/27HAOOX.png",
  "score": 3060,
  "views": 0,
  "nsfw": false
},
{
  "id": "IkNKyeL",
  "title": "It's object oriented!",
  "link": "https://i.imgur.com/IkNKyeL.jpg",
  "score": 3820,
  "views": 0,
  "nsfw": false
},
{
  "id": "URsMj6u",
  "title": "Wait a minute",
  "link": "https://i.imgur.com/URsMj6u.jpg",
  "score": 4413,
  "views": 0,
  "nsfw": false
},
{
  "id": "tEiPgN2",
  "title": "Geek pride",
  "link": "https://i.imgur.com/tEiPgN2.png",
  "score": 2066,
  "views": 0,
  "nsfw": false
},
{
  "id": "uDUccF4",
  "title": "*Eye Roll*",
  "link": "https://i.imgur.com/uDUccF4.png",
  "score": 1075,
  "views": 0,
  "nsfw": false
},
{
  "id": "1TotY7k",
  "title": "I was testing a face classification service..",
  "link": "https://i.imgur.com/1TotY7k.jpg",
  "score": 1365,
  "views": 0,
  "nsfw": false
},
{
  "id": "JR6ROBN",
  "title": "hunter2",
  "link": "https://i.imgur.com/JR6ROBN.png",
  "score": 829,
  "views": 0,
  "nsfw": false
},
{
  "id": "ZzhwB27",
  "title": "PROGRAMMERS HATE HIM!!! HE MADE AN O(1) SORTING FUNCTION!!! CLICK HERE TO FIND OUT HIS SECRET!",
  "link": "https://i.imgur.com/ZzhwB27.jpg",
  "score": 4324,
  "views": 0,
  "nsfw": false
},
{
  "id": "4hucESp",
  "title": "They do it to themselves",
  "link": "https://i.imgur.com/4hucESp.jpg",
  "score": 7365,
  "views": 0,
  "nsfw": false
},
{
  "id": "5e3vWGh",
  "title": "I hope I can fix this and go to bed",
  "link": "https://i.imgur.com/5e3vWGh.png",
  "score": 4466,
  "views": 0,
  "nsfw": false
},
{
  "id": "6rWMSFp",
  "title": "*laughs in order notation*",
  "link": "https://i.imgur.com/6rWMSFp.jpg",
  "score": 1190,
  "views": 0,
  "nsfw": false
},
{
  "id": "nb2ghMi",
  "title": "I containerized my LAMP stack",
  "link": "https://i.imgur.com/nb2ghMi.jpg",
  "score": 825,
  "views": 1296,
  "nsfw": false
},
{
  "id": "6fa4gul",
  "title": "How can I have \"6+ years industry experience\" in something that was released 3 years ago?",
  "link": "https://i.imgur.com/6fa4gul.jpg",
  "score": 979,
  "views": 5913,
  "nsfw": false
},
{
  "id": "sT8tM0P",
  "title": "I don't expect our coats back",
  "link": "https://i.imgur.com/sT8tM0P.jpg",
  "score": 1195,
  "views": 2191,
  "nsfw": false
},
{
  "id": "dIIvcOF",
  "title": "All web development subs right now",
  "link": "https://i.imgur.com/dIIvcOF.jpg",
  "score": 2365,
  "views": 4519,
  "nsfw": false
},
{
  "id": "C0cM47W",
  "title": "I’d still need a 2nd monitor.",
  "link": "https://i.imgur.com/C0cM47W.jpg",
  "score": 1007,
  "views": 1494,
  "nsfw": false
},
{
  "id": "k1xsZSy",
  "title": "Starting a new project",
  "link": "https://i.imgur.com/k1xsZSy.png",
  "score": 9089,
  "views": 11558,
  "nsfw": false
},
{
  "id": "UWYUqfw",
  "title": "Korean instructions in case of fire",
  "link": "https://i.imgur.com/UWYUqfw.jpg",
  "score": 1665,
  "views": 2567,
  "nsfw": false
},
{
  "id": "pSpwUD0",
  "title": "And they say two wrongs don't make a right",
  "link": "https://i.imgur.com/pSpwUD0.png",
  "score": 2847,
  "views": 3796,
  "nsfw": false
},
{
  "id": "hkupzv7",
  "title": "It's free real estate!",
  "link": "https://i.imgur.com/hkupzv7.jpg",
  "score": 4191,
  "views": 38977,
  "nsfw": false
},
{
  "id": "6stR30B",
  "title": "New Microsoft Edge logo",
  "link": "https://i.imgur.com/6stR30B.jpg",
  "score": 8717,
  "views": 17854,
  "nsfw": false
},
{
  "id": "7PRbsGd",
  "title": "Beep, boop, I am a bot!",
  "link": "https://i.imgur.com/7PRbsGd.jpg",
  "score": 6992,
  "views": 9417,
  "nsfw": false
},
{
  "id": "pIpcF7B",
  "title": "Me searching for the answer",
  "link": "https://i.imgur.com/pIpcF7B.jpg",
  "score": 5968,
  "views": 6275,
  "nsfw": false
},
{
  "id": "gdnojgF",
  "title": "How optimization is done",
  "link": "https://i.imgur.com/gdnojgF.png",
  "score": 50141,
  "views": 51554,
  "nsfw": false
},
{
  "id": "ACDcnq2",
  "title": "Every time",
  "link": "https://i.imgur.com/ACDcnq2.png",
  "score": 8879,
  "views": 13129,
  "nsfw": false
},
{
  "id": "sMVNQjG",
  "title": "DevOops",
  "link": "https://i.imgur.com/sMVNQjG.jpg",
  "score": 4148,
  "views": 6403,
  "nsfw": false
},
{
  "id": "wtlAGRj",
  "title": "Please help",
  "link": "https://i.imgur.com/wtlAGRj.jpg",
  "score": 1936,
  "views": 370819,
  "nsfw": false
},
{
  "id": "s70ULOS",
  "title": "It's 2019 but it still happens...",
  "link": "https://i.imgur.com/s70ULOS.jpg",
  "score": 2172,
  "views": 13918,
  "nsfw": false
},
{
  "id": "7U3l5pk",
  "title": "Less code is clean code",
  "link": "https://i.imgur.com/7U3l5pk.png",
  "score": 1331,
  "views": 4912,
  "nsfw": false
},
{
  "id": "KlO2YHv",
  "title": "CAPTCHA has evolved",
  "link": "https://i.imgur.com/KlO2YHv.jpg",
  "score": 1543,
  "views": 2025,
  "nsfw": false
},
{
  "id": "NwKBVke",
  "title": "Well, Whatever the case..",
  "link": "https://i.imgur.com/NwKBVke.png",
  "score": 1731,
  "views": 2649,
  "nsfw": false
},
{
  "id": "rKG4081",
  "title": "Why does my computer struggle with Minecraft",
  "link": "https://i.imgur.com/rKG4081.jpg",
  "score": 2820,
  "views": 3693,
  "nsfw": false
},
{
  "id": "8n4aeRO",
  "title": "TCP vs UDP",
  "link": "https://i.imgur.com/8n4aeRO.jpg",
  "score": 11975,
  "views": 15253,
  "nsfw": false
},
{
  "id": "v6QJ4kB",
  "title": "Standard code comments",
  "link": "https://i.imgur.com/v6QJ4kB.jpg",
  "score": 10281,
  "views": 13063,
  "nsfw": false
},
{
  "id": "ydTiPrI",
  "title": "Arrays vs linked list",
  "link": "https://i.imgur.com/ydTiPrI.png",
  "score": 949,
  "views": 2877,
  "nsfw": false
},
{
  "id": "mkxDAsu",
  "title": "I thought this was relatable",
  "link": "https://i.imgur.com/mkxDAsu.jpg",
  "score": 2933,
  "views": 12988,
  "nsfw": false
},
{
  "id": "JTKYtUx",
  "title": "Gotta love the honesty here",
  "link": "https://i.imgur.com/JTKYtUx.jpg",
  "score": 1013,
  "views": 1371,
  "nsfw": false
},
{
  "id": "Fuu5vrX",
  "title": "So Accurate! *strokes invisible beard*",
  "link": "https://i.imgur.com/Fuu5vrX.jpg",
  "score": 225001,
  "views": 263821,
  "nsfw": false
},
{
  "id": "h2uUByk",
  "title": "Have you heard the good news of our lord and savior, Linux?",
  "link": "https://i.imgur.com/h2uUByk.jpg",
  "score": 16816,
  "views": 17513,
  "nsfw": false
},
{
  "id": "vLOlD8X",
  "title": "When the script finally runs, but throws an out-of-memory exception.",
  "link": "https://i.imgur.com/vLOlD8X.jpg",
  "score": 1198,
  "views": 1866,
  "nsfw": false
},
{
  "id": "qNCnC2R",
  "title": "Linux exams preparing you for the real world",
  "link": "https://i.imgur.com/qNCnC2R.jpg",
  "score": 1494,
  "views": 4051,
  "nsfw": false
},
{
  "id": "ZN18GU7",
  "title": "Follow the trend ???",
  "link": "https://i.imgur.com/ZN18GU7.jpg",
  "score": 1050,
  "views": 2739,
  "nsfw": false
},
{
  "id": "exkkDgU",
  "title": "#ifndef SQL_HUMOUR",
  "link": "https://i.imgur.com/exkkDgU.png",
  "score": 3638,
  "views": 6517,
  "nsfw": false
},
{
  "id": "xzTBCFj",
  "title": "always there to help...",
  "link": "https://i.imgur.com/xzTBCFj.png",
  "score": 6593,
  "views": 10938,
  "nsfw": false
},
{
  "id": "Bbt2iIb",
  "title": "*screeching noises*",
  "link": "https://i.imgur.com/Bbt2iIb.jpg",
  "score": 1224,
  "views": 1461,
  "nsfw": false
},
{
  "id": "16rY6BP",
  "title": "This book must be older",
  "link": "https://i.imgur.com/16rY6BP.png",
  "score": 6458,
  "views": 9572,
  "nsfw": false
},
{
  "id": "KaXuCkI",
  "title": "It ain't much but...",
  "link": "https://i.imgur.com/KaXuCkI.jpg",
  "score": 1250,
  "views": 1468,
  "nsfw": false
},
{
  "id": "LrHJTsa",
  "title": "When you have to test in production",
  "link": "https://i.imgur.com/LrHJTsa.jpg",
  "score": 2662,
  "views": 3345,
  "nsfw": false
},
{
  "id": "fTuqT5c",
  "title": "I have a feeling consumers will be disappointed with the results...",
  "link": "https://i.imgur.com/fTuqT5c.jpg",
  "score": 1761,
  "views": 11683,
  "nsfw": false
},
{
  "id": "K9pFg9T",
  "title": "Those bastards...",
  "link": "https://i.imgur.com/K9pFg9T.png",
  "score": 2449,
  "views": 4387,
  "nsfw": false
},
{
  "id": "f8GqP2V",
  "title": "Shipping a perfect project",
  "link": "https://i.imgur.com/f8GqP2V.jpg",
  "score": 6673,
  "views": 10981,
  "nsfw": false
},
{
  "id": "Gm1T9pc",
  "title": "When you keep having to revert your code to an older branch because of your mistakes",
  "link": "https://i.imgur.com/Gm1T9pc.jpg",
  "score": 15145,
  "views": 193233,
  "nsfw": false
},
{
  "id": "attNiv6",
  "title": "Life can be hard sometimes...",
  "link": "https://i.imgur.com/attNiv6.jpg",
  "score": 1136,
  "views": 2069,
  "nsfw": false
},
{
  "id": "EcbpKX0",
  "title": "Signed up for a \"lifetime\" account. Not sure how I feel about this :/",
  "link": "https://i.imgur.com/EcbpKX0.png",
  "score": 791,
  "views": 1973,
  "nsfw": false
},
{
  "id": "1Xvs3r3",
  "title": "Look at it! It's beautiful!",
  "link": "https://i.imgur.com/1Xvs3r3.png",
  "score": 341932,
  "views": 376230,
  "nsfw": false
},
{
  "id": "Q9c7zuQ",
  "title": "When my for loop finishes an iteration",
  "link": "https://i.imgur.com/Q9c7zuQ.jpg",
  "score": 1829,
  "views": 2966,
  "nsfw": false
},
{
  "id": "UDdi1OY",
  "title": "Does anybody know how to close this?",
  "link": "https://i.imgur.com/UDdi1OY.jpg",
  "score": 2309,
  "views": 3415,
  "nsfw": false
},
{
  "id": "VTLj0x6",
  "title": "The typed vs. untyped debate is heating up",
  "link": "https://i.imgur.com/VTLj0x6.jpg",
  "score": 1457,
  "views": 4353,
  "nsfw": false
},
{
  "id": "BqsYqOK",
  "title": "Dijkstra's real motivation",
  "link": "https://i.imgur.com/BqsYqOK.jpg",
  "score": 12725,
  "views": 13554,
  "nsfw": false
},
{
  "id": "4uCVcsF",
  "title": "##002244 is the colour of my heart...",
  "link": "https://i.imgur.com/4uCVcsF.jpg",
  "score": 5744,
  "views": 6125,
  "nsfw": false
},
{
  "id": "iZz633d",
  "title": "Man, been playing this game for a few hours now but I've only beaten 10 levels",
  "link": "https://i.imgur.com/iZz633d.png",
  "score": 867,
  "views": 1083,
  "nsfw": false
},
{
  "id": "ZQBthXs",
  "title": "The Cobbler's children have no shoes",
  "link": "https://i.imgur.com/ZQBthXs.png",
  "score": 1429,
  "views": 2605,
  "nsfw": false
},
{
  "id": "3vztCW2",
  "title": "vagrant destroy",
  "link": "https://i.imgur.com/3vztCW2.png",
  "score": 1718,
  "views": 1973,
  "nsfw": false
},
{
  "id": "X9MtmxT",
  "title": "My colleagues be like",
  "link": "https://i.imgur.com/X9MtmxT.jpg",
  "score": 4177,
  "views": 8608,
  "nsfw": false
},
{
  "id": "xLF4fxA",
  "title": "Perfect solution against cop cameras",
  "link": "https://i.imgur.com/xLF4fxA.png",
  "score": 10920,
  "views": 12322,
  "nsfw": false
},
{
  "id": "fbW3QbI",
  "title": "How Microsoft deals with bugs",
  "link": "https://i.imgur.com/fbW3QbI.png",
  "score": 1652,
  "views": 10833,
  "nsfw": false
},
{
  "id": "qA4fdwf",
  "title": "You need to start somewhere",
  "link": "https://i.imgur.com/qA4fdwf.png",
  "score": 2528,
  "views": 8677,
  "nsfw": false
},
{
  "id": "VkskYzT",
  "title": "No JavaScript needed!",
  "link": "https://i.imgur.com/VkskYzT.jpg",
  "score": 1943,
  "views": 3298,
  "nsfw": false
},
{
  "id": "CVxn7dm",
  "title": "I've always liked the fact that even though DarkGray is dark, it is not as dark as gray",
  "link": "https://i.imgur.com/CVxn7dm.png",
  "score": 10425,
  "views": 16744,
  "nsfw": false
},
{
  "id": "GjYPR1w",
  "title": "Dayum",
  "link": "https://i.imgur.com/GjYPR1w.png",
  "score": 2212,
  "views": 6236,
  "nsfw": false
},
{
  "id": "PDvfQ9k",
  "title": "Not to buy into the trope, but",
  "link": "https://i.imgur.com/PDvfQ9k.jpg",
  "score": 600785,
  "views": 819347,
  "nsfw": false
},
{
  "id": "59XryaD",
  "title": "Enter your PIN number in the ATM machine through the GUI interface.",
  "link": "https://i.imgur.com/59XryaD.jpg",
  "score": 3540,
  "views": 6607,
  "nsfw": false
},
{
  "id": "WvcaAhU",
  "title": "If this, that.",
  "link": "https://i.imgur.com/WvcaAhU.jpg",
  "score": 3743,
  "views": 7831,
  "nsfw": false
},
{
  "id": "DbxOvEp",
  "title": "Getting comments on requirements. A Venn Diagram.",
  "link": "https://i.imgur.com/DbxOvEp.jpg",
  "score": 5077,
  "views": 8741,
  "nsfw": false
},
{
  "id": "eE7df1k",
  "title": "When someone asks me why my code isn't documented",
  "link": "https://i.imgur.com/eE7df1k.jpg",
  "score": 9432,
  "views": 14380,
  "nsfw": false
},
{
  "id": "v2jXPCz",
  "title": "When I address code comments to \"we\" in my own projects",
  "link": "https://i.imgur.com/v2jXPCz.jpg",
  "score": 4391,
  "views": 16361,
  "nsfw": false
},
{
  "id": "CHcjI4W",
  "title": "My friends are the best programmers",
  "link": "https://i.imgur.com/CHcjI4W.png",
  "score": 2206,
  "views": 6964,
  "nsfw": false
},
{
  "id": "71TiOOq",
  "title": "Bohemian Rhapsody",
  "link": "https://i.imgur.com/71TiOOq.png",
  "score": 1011,
  "views": 1390,
  "nsfw": false
},
{
  "id": "CgeZ8aq",
  "title": "Years[year].End();",
  "link": "https://i.imgur.com/CgeZ8aq.jpg",
  "score": 15237,
  "views": 34912,
  "nsfw": false
},
{
  "id": "gjOPRL7",
  "title": "We’ve all been there",
  "link": "https://i.imgur.com/gjOPRL7.jpg",
  "score": 947,
  "views": 10784,
  "nsfw": false
},
{
  "id": "PrZqr90",
  "title": "True",
  "link": "https://i.imgur.com/PrZqr90.jpg",
  "score": 3035,
  "views": 5955,
  "nsfw": false
},
{
  "id": "uZwUrga",
  "title": "Front end vs back end",
  "link": "https://i.imgur.com/uZwUrga.jpg",
  "score": 28899,
  "views": 30719,
  "nsfw": false
},
{
  "id": "H4uaq47",
  "title": "Functional programming in a nutshell",
  "link": "https://i.imgur.com/H4uaq47.jpg",
  "score": 6957,
  "views": 12067,
  "nsfw": false
},
{
  "id": "tpKKJIp",
  "title": "\"What an oddly specific date for the system to error to\"",
  "link": "https://i.imgur.com/tpKKJIp.jpg",
  "score": 2013,
  "views": 2404,
  "nsfw": false
},
{
  "id": "MxndLWH",
  "title": "Full stack programming",
  "link": "https://i.imgur.com/MxndLWH.jpg",
  "score": 18886,
  "views": 31152,
  "nsfw": false
},
{
  "id": "1uzvN8c",
  "title": "My helpful hotel phone's splash screen.",
  "link": "https://i.imgur.com/1uzvN8c.jpg",
  "score": 1470,
  "views": 5522,
  "nsfw": false
},
{
  "id": "acbXA5I",
  "title": "Mildly Infuriating",
  "link": "https://i.imgur.com/acbXA5I.jpg",
  "score": 969,
  "views": 2987,
  "nsfw": false
},
{
  "id": "6YTQdP6",
  "title": "⚠️ SERIOUS WARNING ⚠️ - DO NOT ENTER",
  "link": "https://i.imgur.com/6YTQdP6.jpg",
  "score": 1108,
  "views": 2248,
  "nsfw": false
},
{
  "id": "proBaMh",
  "title": "As a JavaScript developer who once tried C++",
  "link": "https://i.imgur.com/proBaMh.jpg",
  "score": 9671,
  "views": 41014,
  "nsfw": false
},
{
  "id": "TKQzoYl",
  "title": "The pain of knowing vim",
  "link": "https://i.imgur.com/TKQzoYl.png",
  "score": 2604,
  "views": 8966,
  "nsfw": false
},
{
  "id": "bcZh2pU",
  "title": "The lord of time",
  "link": "https://i.imgur.com/bcZh2pU.png",
  "score": 34214,
  "views": 35334,
  "nsfw": false
},
{
  "id": "IQItsia",
  "title": "hurt",
  "link": "https://i.imgur.com/IQItsia.jpg",
  "score": 1472,
  "views": 8541,
  "nsfw": false
},
{
  "id": "W6CxKsE",
  "title": "When you start your Web Project with a comment ...",
  "link": "https://i.imgur.com/W6CxKsE.jpg",
  "score": 851,
  "views": 2576,
  "nsfw": false
},
{
  "id": "2xNGKsR",
  "title": "oof vim gets me every time",
  "link": "https://i.imgur.com/2xNGKsR.png",
  "score": 1966,
  "views": 4426,
  "nsfw": false
},
{
  "id": "ZJj4WlR",
  "title": "Professor Overflow",
  "link": "https://i.imgur.com/ZJj4WlR.jpg",
  "score": 223734,
  "views": 335344,
  "nsfw": false
},
{
  "id": "sopELLo",
  "title": "The key to getting in shape faster is joining a gym you can't exit",
  "link": "https://i.imgur.com/sopELLo.jpg",
  "score": 139056,
  "views": 146344,
  "nsfw": false
},
{
  "id": "2oc8WZH",
  "title": "A rare find of an if-YES block in the wild...",
  "link": "https://i.imgur.com/2oc8WZH.png",
  "score": 2460,
  "views": 6260,
  "nsfw": false
},
{
  "id": "FLCPzNN",
  "title": "I'm a wizard",
  "link": "https://i.imgur.com/FLCPzNN.jpg",
  "score": 943,
  "views": 1222,
  "nsfw": false
},
{
  "id": "Ki6W7gi",
  "title": "Dear Family and Relatives",
  "link": "https://i.imgur.com/Ki6W7gi.jpg",
  "score": 20945,
  "views": 29762,
  "nsfw": false
},
{
  "id": "7etiwcN",
  "title": "The comments probably wouldn't have helped anyway",
  "link": "https://i.imgur.com/7etiwcN.png",
  "score": 2600,
  "views": 4498,
  "nsfw": false
},
{
  "id": "ZABnhbf",
  "title": "How to be a Android Developer",
  "link": "https://i.imgur.com/ZABnhbf.png",
  "score": 1220,
  "views": 1477,
  "nsfw": false
},
{
  "id": "Jq7UOm9",
  "title": "My girlfriend gave this to me. She's a keeper.",
  "link": "https://i.imgur.com/Jq7UOm9.jpg",
  "score": 9712,
  "views": 10157,
  "nsfw": false
},
{
  "id": "IzPlatF",
  "title": "Based on a comment someone made earlier...",
  "link": "https://i.imgur.com/IzPlatF.jpg",
  "score": 7426,
  "views": 10615,
  "nsfw": false
},
{
  "id": "wXfIwoM",
  "title": "Trying to play scrabble",
  "link": "https://i.imgur.com/wXfIwoM.png",
  "score": 801,
  "views": 7712,
  "nsfw": false
},
{
  "id": "vP8xbeS",
  "title": "SQL Clause",
  "link": "https://i.imgur.com/vP8xbeS.jpg",
  "score": 840,
  "views": 5521,
  "nsfw": false
},
{
  "id": "qtU4CjG",
  "title": "Found this while looking at fallout 4's weather IDs",
  "link": "https://i.imgur.com/qtU4CjG.png",
  "score": 810,
  "views": 9354,
  "nsfw": false
},
{
  "id": "ArXqtPy",
  "title": "You'd think I'd know since I wrote it",
  "link": "https://i.imgur.com/ArXqtPy.jpg",
  "score": 12954,
  "views": 37067,
  "nsfw": false
},
{
  "id": "XEORiXf",
  "title": "Christmas mug from my s/o. Thought you’d like this",
  "link": "https://i.imgur.com/XEORiXf.jpg",
  "score": 11850,
  "views": 12346,
  "nsfw": false
},
{
  "id": "CTXY2JF",
  "title": "I guess naming things are hard for scammers too",
  "link": "https://i.imgur.com/CTXY2JF.jpg",
  "score": 1829,
  "views": 4457,
  "nsfw": false
},
{
  "id": "0OS54ZO",
  "title": "stop anti-animal language use JavaScript",
  "link": "https://i.imgur.com/0OS54ZO.jpg",
  "score": 2852,
  "views": 9406,
  "nsfw": false
}
];



const saved = {
'proBaMh.png': '',
'CgeZ8aq.png': '',
'71TiOOq.png': '',
'VTLj0x6.png': '',
'attNiv6.png': '',
'f8GqP2V.png': '',
'K9pFg9T.png': '',
'h2uUByk.png': '',
'JTKYtUx.png': '',
'mkxDAsu.png': '',
'rKG4081.png': '',
'7U3l5pk.png': '',
'gdnojgF.png': '',
'7PRbsGd.png': '',
'UWYUqfw.png': '',
'k1xsZSy.png': '',
'IkNKyeL.png': '',
'27HAOOX.png': '',
'IAekhXl.png': '',
'Q3QnsLu.png': '',
'YFwBkVK.png': '',
'mva14iu.png': '',
'EDBVld2.png': '',
'cEu831Y.png': '',
'1O6TP1x.png': '',
'iGVUuw3.png': '',
'dj9yO4D.png': '',
'EjtLA6z.png': '',
'xtJSuXz.png': '',
'40QJIng.png': '',
'3xcnMt9.png': '',
'EG34qwc.png': '',
'vPt3l8b.png': '',
'jJBK186.png': '',
'JGjEPrj.png': '',
'k8mGmEH.png': '',
'WRfFvMe.png': '',
'2ni65Ic.png': '',
'OIOgJ0b.png': '',
'6Tt6g5M.png': '',
'SAMw7Pw.png': '',
'bQW8lTH.png': '',
'GQBTBWy.png': '',
'jfzaSpT.png': '',
'c0IqH5A.png': '',
'0IK8xXi.png': '',
'BXMRUUo.png': '',
'iXAJp8E.png': '',
'56Qqc3N.png': '',
'ZRylmDG.png': '',
'OkfLL8j.png': '',
'MHVF2gk.png': '',
'qYhIiGM.png': '',
'JLZWIsD.png': '',
'ovlhy2Y.png': '',
'VTCQJuI.png': '',
'nCOQ77f.png': '',
'nde28P0.png': '',
'OicLANY.png': '',
'CZkKy8r.png': '',
'YY5xp1t.png': '',
'ndlurRm.png': '',
'uSfPRg8.png': '',
'xcNxv0d.png': '',
'Lg2cImB.png': '',
'OhtaVmf.png': '',
'qypAs0A.png': '',
'ytsv35S.png': '',
'KY9URkU.png': '',
'uhsaHBU.png': '',
'ACbpgX3.png': '',
'ugt3B13.png': '',
'xUjPoDn.png': '',
't5izYMl.png': '',
'VSZ2bj7.png': '',
'e7Gl8Rw.png': '',
'AIGvAzi.png': '',
'wHbD3Jl.png': '',
'bEWJcpC.png': '',
'6AWyESQ.png': '',
'zOPGME2.png': '',
'ffBzWqG.png': '',
'QIQPuye.png': '',
'ECWXd1I.png': '',
'zMl3PGN.png': '',
'PuZbbrN.png': '',
'gU4oTV7.png': '',
'RAt5SV4.png': '',
'BOp3T1W.png': '',
'gIpUYyd.png': '',
'tWFujBs.png': '',
'G15c0O4.png': '',
'wOMlRgy.png': '',
'yx5x1r5.png': '',
'1ZnMLvT.png': '',
'pZr7Udx.png': '',
'F3PlxY0.png': '',
'CzquUnX.png': '',
'awrHch6.png': '',
'gmDF4ef.png': '',
'u69lzAq.png': '',
'827EcjX.png': '',
'R3Wks4C.png': '',
'Faif7T9.png': '',
'KOG86Nk.png': '',
'RHOyMYW.png': '',
'J3howaW.png': '',
'HaKhJMT.png': '',
'qq8qmfw.png': '',
'ubYGIwU.png': '',
'ucURwRU.png': '',
'tW38Nd2.png': '',
'OCtcuzN.png': '',
'c0F10vH.png': '',
'tfupVjT.png': '',
'qzSCBzH.png': '',
'n1fDtU7.png': '',
'CE6bD2K.png': '',
'11QnQdu.png': '',
'NFe4C3U.png': '',
'bcZh2pU.png': '',
'82Ix2gi.png': '',
'2tIwGlt.png': '',
'C1hTA1Q.png': '',
'6bpS3T2.png': '',
'Fhqhml8.png': '',
'zSmz399.png': '',
'Cw7KIM1.png': '',
'3PWoO6K.png': '',
'GPKZHrO.png': '',
'hKlSZjU.png': '',
'hkupzv7.png': '',
'ABKz5tW.png': '',
'fuXGXF8.png': '',
'byVMo4O.png': '',
'TKQzoYl.png': '',
'L9vC1s6.png': '',
'kAq9QGF.png': '',
'Fuu5vrX.png': '',
'ZhwIuAA.png': '',
'6fa4gul.png': '',
'H4uaq47.png': '',
'y2ie3cg.png': '',
'oRRpwP0.png': '',
'iQgFCBe.png': '',
'8B7GArU.png': '',
'HDKxMaj.png': '',
'FLCPzNN.png': '',
'7nLv6YB.png': '',
'gNp6S3M.png': '',
'wZdb8Q6.png': '',
};
//https://s3-us-west-1.amazonaws.com/programmer-memes/0IK8xXi.png
app.get('/formattedProgrammerMemes', (req, res) => {
 const formattedMemes = programmingMemes.map(memeObj => {
    const idToCheck = `${memeObj.id}.png`;
    console.log(idToCheck, saved[idToCheck]);
    if (saved[idToCheck]) {
      console.log('did we get here?')
      memeObj.link = `https://s3-us-west-1.amazonaws.com/programmer-memes/${idToCheck}`
      return memeObj;
    } else {
      return null;
    }
  });
  res.send(formattedMemes);
})

app.listen(port, console.log('listening on port ' + port));