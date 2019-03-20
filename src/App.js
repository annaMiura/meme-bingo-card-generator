import React, { Component } from 'react';
import styled from 'styled-components';
//import logo from './logo.svg';
// import './App.css';

const StyledAppContainer = styled.div`
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <StyledAppContainer>
         <h2>Meme Bingo Card Generator</h2>
         <div>Select a meme category:</div>
         <select>
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
      </StyledAppContainer>
    );
  }
}

export default App;
