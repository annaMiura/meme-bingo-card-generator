import React, { Component } from 'react';
import styled from 'styled-components';
import * as jsPDF from 'jspdf'
import html2canvas from 'html2canvas';
import { BingoCard } from './BingoCard';
import { BingoSquare } from './BingoSquare';

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
    this.getBase64Image = this.getBase64Image.bind(this);
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
    this.setState({bingoCardSize: e.target.value});
  }

  getMemes() {
    if (this.state.memeStorage[this.state.currentMemeCategory]) {
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
        this.generateBingoCard();
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

  generateBingoCard() {
    let amountOfMemesToGrab;
    if (this.state.bingoCardSize === '3x3') {
      amountOfMemesToGrab = 9;
    } else if (this.state.bingoCardSize === '4x4') {
      amountOfMemesToGrab = 16;
    }
    const memeArray = this.state.memeStorage[this.state.currentMemeCategory].slice();
    const newUsedMemes = {};
    for (let i = 0; i < amountOfMemesToGrab; i++) {
      const randomIndex = this.getRandomIndex(memeArray.length);
      const newRandomMeme = memeArray.splice(randomIndex, 1);
      newUsedMemes[newRandomMeme[0].link] = newRandomMeme[0];
    }
    this.setState(prevState => ({
      displayBingoCard: true,
      memeStorage: {
        ...prevState.memeStorage,
        [this.state.currentMemeCategory]: memeArray
      },
      usedMemes: {
        ...prevState.usedMemes,
        [this.state.currentMemeCategory]: newUsedMemes
      }
    }));
  }

  printBingoCards() {
    const filename = 'MemeBingoCard.pdf';
    html2canvas(document.querySelector('#bingoCard'), {useCORS: true})
      .then(canvas => {
        let pdf = new jsPDF('p', 'mm', 'a4');
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
        pdf.save(filename);
      })
  }

  getBase64Image(img) {
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);

    const dataURL = canvas.toDataURL('image/png');

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");

  }

  test() {
    const testImg = document.getElementById('bingoCard');
    const imgData = this.getBase64Image(testImg);
    localStorage.setItem('imgData', imgData);
    // const dataImage = localStorage.getItem('imgData');
    // let bannerImg = document.getElementById('printableBingoCard');
    // bannerImg.src = "data:image/png;base64," + dataImage;
    // this.setState({tryTest: true});
    // const imgURL = 'http://s3-us-west-1.amazonaws.com/twitchchat/4Head.jpg';
    // const testData = {
    //   image: imgURL,
    //   imagename: '4head.png'
    // }
    // fetch('/saveImage', {
    //   type: 'POST',
    //   body: JSON.stringify(testData)
    // })
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
            <BingoCard cardSize={this.state.bingoCardSize} memes={memesToUse}></BingoCard>
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