import React from 'react';

export const BingoSquare = props => {
  return (
    <div>
    <table style={{border: '1px solid black', display: 'inline-table'}}>
      <thead>
        <tr>
          <th colspan={3}>Meme Bingo!</th>
        </tr>
      </thead>
      <tbody>
          <tbody>
            <tr>
              <td>
                <img  crossOrigin="Anonymous" src={'http://s3-us-west-1.amazonaws.com/twitchchat/4Head.jpg'} alt={''} style={{height: '250px', width: '250px'}}/>
              </td>
              <td>
                <img id="printableBingoCard" src={''} alt={''} style={{height: '250px', width: '250px'}} />
              </td>
              {/* <td>
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
              </td> */}
            </tr>
          </tbody>
       </tbody>
    </table>
    {/* {memeLinks.map(memeLink => {
      return <BingoSquare memeSrc={memeLink} memeProperties={props.memes[memeLink]}/>
    })} */}
  </div>
  )
};