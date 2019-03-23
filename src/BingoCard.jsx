import React from 'react';
import { BingoSquare } from './BingoSquare';

//
export const BingoCard = props => {

  const memeLinks = props.memes ? Object.keys(props.memes) : null ;
  const numOfColumns = Number(props.cardSize.slice(0, 1));
  return (
    <div>
      <table style={{border: '1px solid black', display: 'inline-table'}}>
        <thead>
          <tr>
            <th colspan={numOfColumns}>Meme Bingo!</th>
          </tr>
        </thead>
        <tbody>
          {numOfColumns === 3 ?
            <tbody>
              <tr>
                <td>
                  <img id="bingoCard" crossOrigin="Anonymous" src={'http://s3-us-west-1.amazonaws.com/twitchchat/4Head.jpg'} alt={props.memes[memeLinks[0]].title} style={{height: '250px', width: '250px'}}/>
                </td>
                <td>
                  <img crossOrigin="Anonymous" src={memeLinks[1]} alt={props.memes[memeLinks[1]].title} style={{height: '250px', width: '250px'}} />
                </td>
                <td>
                  <img src={memeLinks[2]} alt={props.memes[memeLinks[2]].title} style={{height: '250px', width: '250px'}} />
                </td>
              </tr>
              <tr>
                <td>
                  <img src={memeLinks[3]} alt={props.memes[memeLinks[3]].title} style={{height: '250px', width: '250px'}} />
                </td>
                <td>
                  <img src={memeLinks[4]} alt={props.memes[memeLinks[4]].title} style={{height: '250px', width: '250px'}} />
                </td>
                <td>
                  <img src={memeLinks[5]} alt={props.memes[memeLinks[5]].title} style={{height: '250px', width: '250px'}} />
                </td>
              </tr>
              <tr>
                <td>
                  <img src={memeLinks[6]} alt={props.memes[memeLinks[6]].title} style={{height: '250px', width: '250px'}} />
                </td>
                <td>
                  <img src={memeLinks[7]} alt={props.memes[memeLinks[7]].title} style={{height: '250px', width: '250px'}} />
                </td>
                <td>
                  <img src={memeLinks[8]} alt={props.memes[memeLinks[8]].title} style={{height: '250px', width: '250px'}} />
                </td>
              </tr>
            </tbody>
          : null}

          {numOfColumns === 4 ?
            <tbody>
              <tr></tr>
              <tr></tr>
              <tr></tr>
              <tr></tr>
            </tbody>
          : null}

        </tbody>
      </table>
      {/* {memeLinks.map(memeLink => {
        return <BingoSquare memeSrc={memeLink} memeProperties={props.memes[memeLink]}/>
      })} */}
    </div>
  )
};