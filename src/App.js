import React, { Component } from 'react';
import styled from 'styled-components';
//import logo from './logo.svg';
// import './App.css';

const StyledAppContainer = styled.div`
  text-align: center;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMemeCategory: 'programmerHumor',
      displayNextOptions: false,
      bingoCardSize: '',
      memeStorage: {},
      usedMemes: {}
    };
    this.selectMemeCategory = this.selectMemeCategory.bind(this);
    this.displayNextOptions = this.displayNextOptions.bind(this);
    this.selectBingoCardSize = this.selectBingoCardSize.bind(this);
    this.fetchMemes = this.fetchMemes.bind(this);
    this.getRandomIndex = this.getRandomIndex.bind(this);
    this.generateBingoCard = this.generateBingoCard.bind(this);
  }

  selectMemeCategory(e) {
    this.setState({selectedMemeCategory: e.target.value});
  }

  displayNextOptions() {
    this.setState({displayNextOptions: true});
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
    /*
    1) look at the desired bingo card dimensions to find out how many memes to grab
    2) randomly grab how ever many memes are needed to fill the card
    3) modify the state so they're taken out of the state tree and maybe store in a different state variable
    4) send the generated memes to different bingo card component
    */
    let amountOfMemesToGrab;
    switch (this.state.bingoCardSize) {
      case '3x3':
        amountOfMemesToGrab = 9;
        break;
      case '4x4':
        amountOfMemesToGrab = 16;
        break;
      default:
        amountOfMemesToGrab = 9;
        break;
    }
    while (amountOfMemesToGrab > 0) {
      const memeArray = this.state.memeStorage[this.state.selectedMemeCategory].slice();
      const randomIndex = this.getRandomIndex(memeArray.length);
      const newRandomMeme = memeArray.splice(randomIndex, 1);
      const randomMeme = newRandomMeme[0];
      this.setState(prevState => ({
        memeStorage: {
          ...prevState.memeStorage,
          [this.state.selectedMemeCategory]: memeArray
        },
        usedMemes: {
          ...prevState.usedMemes,
          [randomMeme.link]: randomMeme
        }
      }));
       amountOfMemesToGrab--;
    }
  }

  render() {
    console.log(this.state);
    return (
      <StyledAppContainer>
         <h2>Meme Bingo Card Generator</h2>
         <div>Select a meme category:</div>
        <div>
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
        </div>
         <div>
           <button onClick={this.displayNextOptions}>Lock in meme category</button>
         </div>
         {this.state.displayNextOptions ?
           <div>
              <span>Select grid size</span>
              <select onChange={(e) => this.selectBingoCardSize(e)} value={this.state.bingoCardSize}>
                <option value="3x3">3x3</option>
                <option value="4x4">4x4</option>
              </select>
              <div>
                <button onClick={this.fetchMemes}>Lemme see the memes you made for me fam!</button>
              </div>
           </div>
           : null}
      </StyledAppContainer>
    );
  }
}

export default App;
