import React, { Component } from 'react';
import styled from 'styled-components';
import * as jsPDF from 'jspdf'
import html2canvas from 'html2canvas';
import { BingoCard } from './BingoCard';
import { PrintableBingoCard } from './PrintableBingoCard';
import { BingoSquare } from './BingoSquare';

// import { data } from '../database/seedData2';

const StyledAppContainer = styled.div`
  text-align: center;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMemeCategory: 'programmerHumor',
      previousMemeCategory: '',
      displayBingoCard: false,
      bingoCardSize: '3x3',
      memeStorage: {},
      usedMemes: {},
      discardedMemes: {},
      tryTest: false
    };
    this.selectMemeCategory = this.selectMemeCategory.bind(this);
    this.selectBingoCardSize = this.selectBingoCardSize.bind(this);
    this.getMemes = this.getMemes.bind(this);
    this.fetchMemes = this.fetchMemes.bind(this);
    this.extractRandomMemes = this.extractRandomMemes.bind(this);
    this.getRandomIndex = this.getRandomIndex.bind(this);
    this.shuffleMemes = this.shuffleMemes.bind(this);
    this.generateBingoCard = this.generateBingoCard.bind(this);
    this.printBingoCards = this.printBingoCards.bind(this);
    this.rerollMeme = this.rerollMeme.bind(this);
    this.test = this.test.bind(this);
  }

  selectMemeCategory(e) {
    const newMemeCategory = e.target.value;
    this.setState(prevState => ({
      previousMemeCategory: prevState.currentMemeCategory,
      currentMemeCategory: newMemeCategory
    }))
  }

  selectBingoCardSize(e) {
    const newBingoSize = e.target.value;
    this.setState({bingoCardSize: newBingoSize});
    const fetchedMemes = this.state.usedMemes[this.state.currentMemeCategory];
    if (fetchedMemes) {
      if (this.state.bingoCardSize !== newBingoSize) {
        if (newBingoSize === '3x3' && fetchedMemes.length < 9) {
          this.generateBingoCard(9 - fetchedMemes.length);
        }
        if (newBingoSize === '4x4' && Object.keys(fetchedMemes).length < 16) {
          this.generateBingoCard(16 - Object.keys(fetchedMemes).length);
        }
      }
    }
  }

  getMemes() {
    if (this.state.usedMemes[this.state.currentMemeCategory] ) {
      this.extractRandomMemes()
    } else {
      this.fetchMemes();
    }
  }

  fetchMemes() {
    fetch(`/${this.state.currentMemeCategory}`, {
        method: 'GET',
        mode: 'cors'
      })
      .then(response => {
        return response.json();
      })
      .then(memeArray => {
        this.setState(prevState => ({
          memeStorage: {
            ...prevState.memeStorage,
            [this.state.currentMemeCategory]: memeArray
          }
        }))
        if (this.state.bingoCardSize === '3x3') {
          this.generateBingoCard(9);
        } else if (this.state.bingoCardSize === '4x4') {
          this.generateBingoCard(16);
        }
      })
      .catch(error => {
        console.error('something went wrong fetching the desired memes', error);
      })
  }

  extractRandomMemes() {
    console.log('to do!')
  }

  getRandomIndex(maxNum) {
    return Math.floor(Math.random() * Math.floor(maxNum));
  }

  shuffleMemes(memeArray) {
    let currentIndex = memeArray.length;
    let temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = memeArray[currentIndex];
      memeArray[currentIndex] = memeArray[randomIndex];
      memeArray[randomIndex] = temporaryValue;
    }
    return memeArray;
  }

  generateBingoCard(num) {
    const memeArray = this.state.memeStorage[this.state.currentMemeCategory].slice();
    const newUsedMemes = {
      [this.state.currentMemeCategory]: []
    };
    for (let i = 0; i < num; i++) {
      const randomIndex = this.getRandomIndex(memeArray.length);
      const newRandomMeme = memeArray.splice(randomIndex, 1);
      newUsedMemes[this.state.currentMemeCategory].push(newRandomMeme[0]);
    }
    if (!this.state.usedMemes[this.state.currentMemeCategory]) {
      this.setState(prevState => ({
        displayBingoCard: true,
        memeStorage: {
          ...prevState.memeStorage,
          [this.state.currentMemeCategory]: memeArray
        },
        usedMemes: {
          ...prevState.usedMemes,
          [this.state.currentMemeCategory]: newUsedMemes[this.state.currentMemeCategory]
        }
      }));
    } else {
      this.setState(prevState => ({
        displayBingoCard: true,
        memeStorage: {
          ...prevState.memeStorage,
          [this.state.currentMemeCategory]: memeArray
        },
        usedMemes: {
          ...prevState.usedMemes,
          [this.state.currentMemeCategory]: [...prevState.usedMemes[this.state.currentMemeCategory], ...newUsedMemes[this.state.currentMemeCategory]]
        }
      }));
    }
  }

  printBingoCards() {
    const filename = 'MemeBingoCard.pdf';
    html2canvas(document.querySelector('#bingoCard'), {useCORS: true})
      .then(canvas => {
        let pdf = new jsPDF('p', 'mm', 'a4');
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
        pdf.save(filename);
      })
      .catch(error => {
        console.log('something went wrong printing bingo cards', error);
      });
  }

  rerollMeme(e) {
    const rerolledMemeLink = e.target.src;
    const memeArray = this.state.memeStorage[this.state.currentMemeCategory].slice();
    const randomMemeArray = memeArray.splice(this.getRandomIndex(memeArray.length), 1);
    const newRandomMeme = randomMemeArray[0];
    const discaredMemeArray = this.state.discardedMemes[this.state.currentMemeCategory] ? this.state.discardedMemes[this.state.currentMemeCategory].slice() : [];
    const usedMemeArrayCopy = this.state.usedMemes[this.state.currentMemeCategory].slice();
    for (let i = 0; i < usedMemeArrayCopy.length; i++) {
      if(usedMemeArrayCopy[i].link === rerolledMemeLink) {
        discaredMemeArray.push(usedMemeArrayCopy[i]);
        usedMemeArrayCopy[i] = newRandomMeme;
      }
    }
      this.setState(prevState => ({
      memeStorage: {
        ...prevState.memeStorage,
        [this.state.currentMemeCategory]: memeArray
      },
      usedMemes: {
        ...prevState.usedMemes,
        [this.state.currentMemeCategory]: usedMemeArrayCopy
      },
      discardedMemes: {
        ...prevState.discardedMemes,
        [this.state.currentMemeCategory]: discaredMemeArray
      }
    }));
  }

  test() {
    // let count = 0;
    // data.wholesomememes.forEach(subredditObj => {
    //   count++
    //   if (count > 40 && count < 70) {
    //     console.log(subredditObj.link);
    //     window.open(subredditObj.link);

    //   }
    // })
    // console.log('👺', count)
    //done: 20
    //count > 20 && count < 40
    //count > 40 && count < 60
    //ount > 60 && count < 90
    //count > 90 && count < 120
    //count > 120 && count < 150
    //ount > 150 && count < 180
  }

  render() {
    console.log(this.state);
    const fetchedMemes = this.state.usedMemes[this.state.currentMemeCategory]
    const memesToUse = fetchedMemes ? fetchedMemes : this.state.usedMemes[this.state.previousMemeCategory]
    return (
      <StyledAppContainer>
        <h2>Meme Bingo Card Generator</h2>
        <span>Select a meme category:</span>
        <span>
          <select onChange={(e) => this.selectMemeCategory(e)} value={this.state.currentMemeCategory}>
            <option value="programmerHumor">Programming</option>
            <option value="dndmemes">Dungeons and Dragons</option>
            <option value="Overwatch_Memes">Overwatch</option>
            <option value="wholesomememes">Wholesome</option>
            <option value="prequelmemes">Star Wars Prequels</option>
            <option value="SequelMemes">Star Wars Sequels</option>
            <option value="lotrmemes">Lord of the Rings</option>
            <option value="historymemes">History</option>
            <option value="lolcats">Cats</option>
            <option value="dankmemes">Dank</option>
          </select>
        </span>
        <span>
          <span>Select grid size</span>
          <select onChange={(e) => this.selectBingoCardSize(e)} value={this.state.bingoCardSize}>
            <option value="3x3">3x3</option>
            <option value="4x4">4x4</option>
          </select>
        </span>
        <div>
            <button onClick={this.getMemes}>
              {this.state.displayBingoCard ? 'Update Sample Bingo Card' : 'Show Sample Bingo Card'}
            </button>
        </div>
        {this.state.displayBingoCard ?
          <div>
            <BingoCard cardSize={this.state.bingoCardSize} memes={memesToUse} newMeme={this.rerollMeme}></BingoCard>
            <div>
              <button onClick={this.printBingoCards}>Print Bingo Cards</button>
            </div>
          </div>
          : null}
          {this.state.tryTest ? <BingoSquare></BingoSquare> : null}
      </StyledAppContainer>
    );
  }
}

export default App;

/*
Old code for dynamic grid selection dropdown in case I happen to need it again

this.displayNextOptions = this.displayNextOptions.bind(this);

displayNextOptions() :
  this.setState({displayNextOptions: true, displayBingoCard: false});

render() :
         <div>
           <button onClick={this.displayNextOptions}>
             {this.state.displayBingoCard ? 'Update meme category' : 'Lock in meme category'}
           </button>
         </div>
         {this.state.displayNextOptions ?
           <div>
              <div>Select grid size</div>
              <select onChange={(e) => this.selectBingoCardSize(e)} value={this.state.bingoCardSize}>
                <option value="3x3">3x3</option>
                <option value="4x4">4x4</option>
              </select>
              <div>
                <button onClick={this.fetchMemes}>
                  {this.state.displayBingoCard ? 'Update Sample Bingo Card' : 'Show Sample Bingo Card'}
                </button>
              </div>
           </div>
           : null}

*/