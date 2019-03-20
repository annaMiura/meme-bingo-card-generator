import React from 'react';
import { BingoSquare } from './BingoSquare';

export const BingoCard = props => {
  const memeLinks = Object.keys(props.memes);
  return (
    <div>
      {memeLinks.map(memeLink => {
        return <BingoSquare memeSrc={memeLink} memeProperties={props.memes[memeLink]}/>
      })}
    </div>
  )
};