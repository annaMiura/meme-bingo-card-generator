import React from 'react';

export const BingoSquare = props => {
  return (
    <span>
      <img src={props.memeSrc} alt={props.memeProperties.title} />
    </span>
  )
};