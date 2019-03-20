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
    };
    this.selectMemeCategory = this.selectMemeCategory.bind(this);
    this.displayNextOptions = this.displayNextOptions.bind(this);
    this.selectBingoCardSize = this.selectBingoCardSize.bind(this);
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
generateBingoCard() {
  /*
  1) grab the desired memes from db
  2) pass them and grid size to new bingo card component
  3) display bingo card component underneath the selections
  */
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
    })
    .catch(error => {
      console.error('something went wrong fetching the desired memes', error);
    })
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
                <button onClick={this.generateBingoCard}>Lemme see the memes you made for me fam!</button>
              </div>
           </div>
           : null}
      </StyledAppContainer>
    );
  }
}

export default App;
