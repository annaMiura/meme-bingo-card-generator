import React, { Component } from 'react';
import styled from 'styled-components';
import { BingoCard } from './BingoCard';

const StyledAppContainer = styled.div`
  text-align: center;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMemeCategory: 'programmerHumor',
      displayBingoCard: false,
      bingoCardSize: '3x3',
      memeStorage: {},
      usedMemes: {}
    };
    this.selectMemeCategory = this.selectMemeCategory.bind(this);
    this.selectBingoCardSize = this.selectBingoCardSize.bind(this);
    this.fetchMemes = this.fetchMemes.bind(this);
    this.getRandomIndex = this.getRandomIndex.bind(this);
    this.generateBingoCard = this.generateBingoCard.bind(this);
  }

  selectMemeCategory(e) {
    this.setState({selectedMemeCategory: e.target.value});
  }

  selectBingoCardSize(e) {
    this.setState({bingoCardSize: e.target.value});
  }

fetchMemes() {
  fetch(`/${this.state.selectedMemeCategory}`, {
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
          [this.state.selectedMemeCategory]: memeArray
        }
      }))
      this.generateBingoCard();
    })
    .catch(error => {
      console.error('something went wrong fetching the desired memes', error);
    })
  }

  getRandomIndex(maxNum) {
    return Math.floor(Math.random() * Math.floor(maxNum));
  }

  generateBingoCard() {
    let amountOfMemesToGrab;
    if (this.state.bingoCardSize === '3x3') {
      amountOfMemesToGrab = 9;
    } else if (this.state.bingoCardSize === '4x4') {
      amountOfMemesToGrab = 16;
    }
    const memeArray = this.state.memeStorage[this.state.selectedMemeCategory].slice();
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
        [this.state.selectedMemeCategory]: memeArray
      },
      usedMemes: {
        ...prevState.usedMemes,
        [this.state.selectedMemeCategory]: newUsedMemes
      }
    }));
  }

  render() {
    console.log(this.state);
    const activeMemeCategories = Object.keys(this.state.memeStorage);
    const alreadyFetchedAndRandomizedMemes = this.state.usedMemes[this.state.selectedMemeCategory]
    const memesNotFetchedYetUsedMemesArrayIndex = activeMemeCategories.length > 1 ? activeMemeCategories.length - 2 : 0;
    const currentMemeList = alreadyFetchedAndRandomizedMemes ? alreadyFetchedAndRandomizedMemes : this.state.usedMemes[activeMemeCategories[memesNotFetchedYetUsedMemesArrayIndex]];
    return (
      <StyledAppContainer>
        <h2>Meme Bingo Card Generator</h2>
        <span>Select a meme category:</span>
        <span>
          <select onChange={(e) => this.selectMemeCategory(e)} value={this.state.selectedMemeCategory}>
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
            <button onClick={this.fetchMemes}>
              {this.state.displayBingoCard ? 'Update Sample Bingo Card' : 'Show Sample Bingo Card'}
            </button>
        </div>
        {this.state.displayBingoCard ?
          <div>
            <BingoCard cardSize={this.state.bingoCardSize} memes={currentMemeList}></BingoCard>
          </div>
          : null}
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