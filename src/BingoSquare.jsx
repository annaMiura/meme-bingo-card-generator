import React from 'react';

export const BingoSquare = props => {
  return (
    <td>
      <img alt={''} crossOrigin="Anonymous" onClick={(e) => props.newMeme(e)} src={props.meme.link} style={{ height: '250px', width: '100%' }} />
    </td>
  )
};