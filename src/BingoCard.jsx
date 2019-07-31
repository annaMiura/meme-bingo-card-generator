import React from 'react';

export const BingoCard = props => {
  const numOfColumns = Number(props.cardSize.slice(0, 1));
  return (
    <div id={`bingoCard${props.id}`} style={{width: '800px', margin: 'auto', padding: 0, height: '100%', display: props.display, alignItems: 'center'}}>
      <table style={{ display: 'inline-table', tableLayout: 'fixed', width: '100%' }}>
        <thead>
          <tr>
            <th colspan={numOfColumns}>Meme Bingo!</th>
          </tr>
        </thead>
          {numOfColumns === 3 ?
            <tbody>
              <tr>
                <td onClick={(e) => props.newMeme(e)}>
                  <img alt={''} crossOrigin="Anonymous" src={props.memes[0].link} style={{ height: '250px', width: '100%' }} />
                </td>
                <td onClick={(e) => props.newMeme(e)}>
                  <img alt={''} crossOrigin="Anonymous" src={props.memes[1].link} style={{ height: '250px', width: '100%' }} />
                </td>
                <td onClick={(e) => props.newMeme(e)}>
                  <img alt={''} crossOrigin="Anonymous" src={props.memes[2].link} style={{ height: '250px', width: '100%' }} />
                </td>
              </tr>
              <tr>
                <td onClick={(e) => props.newMeme(e)}>
                  <img alt={''} crossOrigin="Anonymous" src={props.memes[3].link} style={{ height: '250px', width: '100%' }} />
                </td>
                <td onClick={(e) => props.newMeme(e)}>
                  <img alt={''} crossOrigin="Anonymous" src={props.memes[4].link} style={{ height: '250px', width: '100%' }} />
                </td>
                <td onClick={(e) => props.newMeme(e)}>
                  <img alt={''} crossOrigin="Anonymous" src={props.memes[5].link} style={{ height: '250px', width: '100%' }} />
                </td>
              </tr>
              <tr>
                <td onClick={(e) => props.newMeme(e)}>
                  <img alt={''} crossOrigin="Anonymous" src={props.memes[6].link} style={{ height: '250px', width: '100%' }} />
                </td>
                <td onClick={(e) => props.newMeme(e)}>
                  <img alt={''} crossOrigin="Anonymous" src={props.memes[7].link} style={{ height: '250px', width: '100%' }} />
                </td>
                <td onClick={(e) => props.newMeme(e)}>
                  <img alt={''} crossOrigin="Anonymous" src={props.memes[8].link} style={{ height: '250px', width: '100%' }} />
                </td>
              </tr>
            </tbody>
            : null}

          {numOfColumns === 4 ?
            <tbody>
              <tr>
                <td onClick={(e) => props.newMeme(e)}>
                  <img alt={''} crossOrigin="Anonymous" src={props.memes[0].link} style={{height: '250px', width: '100%'}} />
                </td>
                <td onClick={(e) => props.newMeme(e)}>
                  <img alt={''} crossOrigin="Anonymous" src={props.memes[1].link} style={{height: '250px', width: '100%'}} />
                </td>
                <td onClick={(e) => props.newMeme(e)}>
                  <img alt={''} crossOrigin="Anonymous" src={props.memes[2].link} style={{height: '250px', width: '100%'}} />
                </td>
                <td onClick={(e) => props.newMeme(e)}>
                  <img alt={''} crossOrigin="Anonymous" src={props.memes[3].link} style={{height: '250px', width: '100%'}} />
                </td>
              </tr>
              <tr>
                <td onClick={(e) => props.newMeme(e)}>
                  <img alt={''} crossOrigin="Anonymous" src={props.memes[4].link} style={{height: '250px', width: '100%'}} />
                </td>
                <td onClick={(e) => props.newMeme(e)}>
                  <img alt={''} crossOrigin="Anonymous" src={props.memes[5].link} style={{height: '250px', width: '100%'}} />
                </td>
                <td onClick={(e) => props.newMeme(e)}>
                  <img alt={''} crossOrigin="Anonymous" src={props.memes[6].link} style={{height: '250px', width: '100%'}} />
                </td>
                <td onClick={(e) => props.newMeme(e)}>
                  <img alt={''} crossOrigin="Anonymous" src={props.memes[7].link} style={{height: '250px', width: '100%'}} />
                </td>
              </tr>
              <tr>
                <td onClick={(e) => props.newMeme(e)}>
                  <img alt={''} crossOrigin="Anonymous" src={props.memes[8].link} style={{height: '250px', width: '100%'}} />
                </td>
                <td onClick={(e) => props.newMeme(e)}>
                  <img alt={''} crossOrigin="Anonymous" src={props.memes[9].link} style={{height: '250px', width: '100%'}} />
                </td>
                <td onClick={(e) => props.newMeme(e)}>
                  <img alt={''} crossOrigin="Anonymous" src={props.memes[10].link} style={{height: '250px', width: '100%'}} />
                </td>
                <td onClick={(e) => props.newMeme(e)}>
                  <img alt={''} crossOrigin="Anonymous" src={props.memes[11].link} style={{height: '250px', width: '100%'}} />
                </td>
              </tr>
              <tr>
                <td onClick={(e) => props.newMeme(e)}>
                  <img alt={''} crossOrigin="Anonymous" src={props.memes[12].link} style={{height: '250px', width: '100%'}} />
                </td>
                <td onClick={(e) => props.newMeme(e)}>
                  <img alt={''} crossOrigin="Anonymous" src={props.memes[13].link} style={{height: '250px', width: '100%'}} />
                </td>
                <td onClick={(e) => props.newMeme(e)}>
                  <img alt={''} crossOrigin="Anonymous" src={props.memes[14].link} style={{height: '250px', width: '100%'}} />
                </td>
                <td onClick={(e) => props.newMeme(e)}>
                  <img alt={''} crossOrigin="Anonymous" src={props.memes[15].link} style={{height: '250px', width: '100%'}} />
                </td>
              </tr>
            </tbody>
            : null}
      </table>
    </div>
  )
};


