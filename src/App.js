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
      </StyledAppContainer>
    );
  }
}

export default App;
