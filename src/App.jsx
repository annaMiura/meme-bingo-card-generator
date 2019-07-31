import React, { Component } from 'react';
import styled from 'styled-components';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { BingoCard } from './BingoCard';
require('path');

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
      bingoCardVariationNum: 1,
      showSpinner: false
    };
    this.selectMemeCategory = this.selectMemeCategory.bind(this);
    this.selectBingoCardSize = this.selectBingoCardSize.bind(this);
    this.getMemes = this.getMemes.bind(this);
    this.fetchMemes = this.fetchMemes.bind(this);
    this.extractRandomMemes = this.extractRandomMemes.bind(this);
    this.getRandomIndex = this.getRandomIndex.bind(this);
    this.shuffleMemes = this.shuffleMemes.bind(this);
    this.generateBingoCard = this.generateBingoCard.bind(this);
    this.bingoCardVariationGenerator = this.bingoCardVariationGenerator.bind(
      this
    );
    this.updateBingoCardVariationNum = this.updateBingoCardVariationNum.bind(
      this
    );
    this.printBingoCards = this.printBingoCards.bind(this);
    this.rerollMeme = this.rerollMeme.bind(this);
    this.bingoCards = this.bingoCards.bind(this);
  }

  selectMemeCategory(e) {
    const newMemeCategory = e.target.value;
    this.setState(prevState => ({
      previousMemeCategory: prevState.currentMemeCategory,
      currentMemeCategory: newMemeCategory
    }));
  }

  selectBingoCardSize(e) {
    const newBingoSize = e.target.value;
    this.setState({ bingoCardSize: newBingoSize });
    //WORKS except for when you fetch a cateogry at 3x3 bingo size, switch to a different meme category and then select 4x4 size, when you return to different category there won't be enough  memes there
    const fetchedMemes = this.state.usedMemes[this.state.currentMemeCategory];
    if (fetchedMemes) {
      if (this.state.bingoCardSize !== newBingoSize) {
        if (newBingoSize === '3x3' && fetchedMemes.length < 9) {
          this.generateBingoCard(9 - fetchedMemes.length);
        }
        if (newBingoSize === '4x4' && fetchedMemes.length < 16) {
          this.generateBingoCard(16 - fetchedMemes.length);
        }
        //   I eventually should write something that decreases the amount of memes in usedMemes if the grid size is downsized
      }
    }
    //if I bug fix:
    // const fetchedMemeCategories = Object.keys(this.state.memeStorage);
    // if (newBingoSize === '4x4') {
    //   fetchedMemeCategories.forEach(category => {
    //     if (this.state.usedMemes[category].length < 16) {
    //       console.log('did we ever check to see if previous categories didnt have enough memes?')
    //       this.generateBingoCard(16 - fetchedMemes.length, category);
    //     }
    //   })
    // }
  }

  getMemes() {
    if (this.state.usedMemes[this.state.currentMemeCategory]) {
      this.extractRandomMemes();
    } else {
      this.fetchMemes();
    }
    // this.setState(prevState => ({
    //   displayBingoCard: !prevState.displayBingoCard
    // }));
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
        }));
        if (this.state.bingoCardSize === '3x3') {
          this.generateBingoCard(9);
        } else if (this.state.bingoCardSize === '4x4') {
          this.generateBingoCard(16);
        }
      })
      .catch(error => {
        console.error('something went wrong fetching the desired memes', error);
      });
  }

  extractRandomMemes() {
    console.log('to do!');
  }

  getRandomIndex(maxNum) {
    return Math.floor(Math.random() * Math.floor(maxNum));
  }

  shuffleMemes(array) {
    const memeArray = array.slice();
    for (let i = memeArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [memeArray[i], memeArray[j]] = [memeArray[j], memeArray[i]];
    }
    return memeArray;
  }

  generateBingoCard(num, category) {
    //if I bug fix:
    //const memeArray = category ? this.state.memeStorage[category].slice() : this.state.memeStorage[this.state.currentMemeCategory].slice();
    const memeArray = this.state.memeStorage[
      this.state.currentMemeCategory
    ].slice();
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
          [this.state.currentMemeCategory]:
            newUsedMemes[this.state.currentMemeCategory]
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
          [this.state.currentMemeCategory]: [
            ...prevState.usedMemes[this.state.currentMemeCategory],
            ...newUsedMemes[this.state.currentMemeCategory]
          ]
        }
      }));
    }
  }

  bingoCardVariationGenerator() {}

  updateBingoCardVariationNum(e) {
    if (e.target.value < 1 || !e.target.value) {
      this.setState({ bingoCardVariationNum: 1 });
    } else {
      this.setState({ bingoCardVariationNum: e.target.value });
    }
  }

  printBingoCards() {
    this.setState({ showSpinner: true });
    const filename = 'MemeBingoCard.pdf';
    let pdf = new jsPDF('p', 'mm', 'a4');

    const generateImage = async num => {
      if (num > 0) {
        document.querySelector(`#bingoCard${num}`).style.height = '1128px';
        document.querySelector(`#bingoCard${num}`).style.display = 'flex';
        return html2canvas(document.querySelector(`#bingoCard${num}`), {
          useCORS: true
        })
          .then(canvas => {
            pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
            document.querySelector(`#bingoCard${num}`).style.height = '100%';
            document.querySelector(`#bingoCard${num}`).style.display = 'none';
          })
          .catch(error => {
            console.log('something went wrong printing bingo cards', error);
          });
      } else {
        document.querySelector(`#bingoCard${num}`).style.height = '1128px';
        return html2canvas(document.querySelector(`#bingoCard${num}`), {
          useCORS: true
        })
          .then(canvas => {
            pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 211, 298);
            document.querySelector(`#bingoCard${num}`).style.height = '100%';
          })
          .catch(error => {
            console.log('something went wrong printing bingo cards', error);
          });
      }
    };

    (async () => {
      for (let i = 0; i < this.state.bingoCardVariationNum; i++) {
        const canvas = await generateImage(i);
        pdf.addPage();
      }
      const pageCount = pdf.internal.getNumberOfPages();
      pdf.deletePage(pageCount);
      pdf.save(filename);
    })();
  }

  rerollMeme(e) {
    const rerolledMemeLink = e.target.src;
    const memeArray = this.state.memeStorage[
      this.state.currentMemeCategory
    ].slice();
    const randomMemeArray = memeArray.splice(
      this.getRandomIndex(memeArray.length),
      1
    );
    const newRandomMeme = randomMemeArray[0];
    const discaredMemeArray = this.state.discardedMemes[
      this.state.currentMemeCategory
    ]
      ? this.state.discardedMemes[this.state.currentMemeCategory].slice()
      : [];
    const usedMemeArrayCopy = this.state.usedMemes[
      this.state.currentMemeCategory
    ].slice();
    for (let i = 0; i < usedMemeArrayCopy.length; i++) {
      if (usedMemeArrayCopy[i].link === rerolledMemeLink) {
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

  bingoCards() {
    const fetchedMemes = this.state.usedMemes[this.state.currentMemeCategory];
    const memesToUse = fetchedMemes
      ? fetchedMemes
      : this.state.usedMemes[this.state.previousMemeCategory];
    const output = [];
    for (let i = 0; i < this.state.bingoCardVariationNum; i++) {
      if (i > 0) {
        output.push(
          <BingoCard
            cardSize={this.state.bingoCardSize}
            display={'none'}
            id={i}
            memes={this.shuffleMemes(memesToUse)}
            newMeme={this.rerollMeme}
          />
        );
      } else {
        output.push(
          <BingoCard
            cardSize={this.state.bingoCardSize}
            display={'flex'}
            id={i}
            memes={memesToUse}
            newMeme={this.rerollMeme}
          />
        );
      }
    }
    return output;
  }

  render() {
    console.log(this.state);
    const fetchedMemes = this.state.usedMemes[this.state.currentMemeCategory];
    const memesToUse = fetchedMemes
      ? fetchedMemes
      : this.state.usedMemes[this.state.previousMemeCategory];
    return (
      <StyledAppContainer>
        <h2>Meme Bingo Card Generator</h2>
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'unset',
              flexDirection: 'column',
              alignItems: 'center',
              margin: '0px 40px 0px 0px',
              background: 'rgb(242, 242, 242)',
              padding: '16px',
              borderRadius: '12px',
              position: 'fixed',
              height: '100%',
              width: '160px',
              left: '60px',
              fontSize: 'small'
            }}
          >
            <h3>Options</h3>
            <div style={{ paddingBottom: '15px' }}>
              <span style={{ paddingBottom: '15px' }}>
                Select a meme category:
              </span>
              <span>
                <select
                  onChange={this.selectMemeCategory}
                  value={this.state.currentMemeCategory}
                >
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
            </div>

            <div style={{ paddingBottom: '15px' }}>
              <span>
                <span>Select grid size: </span>
                <select
                  onChange={this.selectBingoCardSize}
                  value={this.state.bingoCardSize}
                >
                  <option value="3x3">3x3</option>
                  <option value="4x4">4x4</option>
                </select>
              </span>
            </div>

            <div style={{ paddingBottom: '15px' }}>
              <button onClick={this.getMemes}>
                {this.state.displayBingoCard
                  ? 'Update Sample Bingo Card'
                  : 'Show Sample Bingo Card'}
              </button>
            </div>
            {this.state.displaySpinner ? (
              <div>
                <img src={require('./giphy.gif')} alt="loading" />{' '}
              </div>
            ) : null}
            {this.state.displayBingoCard ? (
              <div>
                <div style={{ paddingBottom: '15px', paddingTop: '20px' }}>
                  <label>Enter the desired number of variations:</label>
                  <input
                    onChange={this.updateBingoCardVariationNum}
                    type="number"
                    required
                  />
                </div>
                <div style={{ paddingBottom: '15px' }}>
                  <button onClick={this.printBingoCards}>
                    Print Bingo Cards
                  </button>
                </div>{' '}
              </div>
            ) : null}
          </div>
          {this.state.displayBingoCard ? (
            <div>{this.bingoCards()}</div>
          ) : (
            <div>
              <span>
                <p
                  style={{
                    fontSize: '100px',
                    display: 'inline',
                    paddingRight: '5px'
                  }}
                >
                  ↜
                </p>
                <h3 style={{ fontWeight: 'normal', display: 'inline' }}>
                  Select your options and press "Show Sample Bingo Card" to the
                  left to get started!
                </h3>
              </span>
            </div>
          )}
        </div>
      </StyledAppContainer>
    );
  }
}

//<img src={require('./giphy.gif')} alt="loading" />

export default App;
