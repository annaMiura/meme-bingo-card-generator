require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const proxy = require('html2canvas-proxy');
const bodyParser = require('body-parser');
const db = require('../database/index');
const app = express();
const port = process.env.PORT || 3000;
const seedFunctions = require('../database/helperFunctions');

app.use(cors());
app.use(express.static(path.join(__dirname, '../build')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', proxy());

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
  seedFunctions.seedMemes(['ProgrammerHumor'])
    .then(memeObject => {
      return res.send(memeObject);
    })
    .catch(err => {
      console.error('something went wrong with fetching memes', err);
    })
});

app.listen(port, console.log('listening on port ' + port));