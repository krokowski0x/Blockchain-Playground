import React from 'react';
import Block from './Block';

const Chapter = ({ type }) => {
  return (
    <div className="Chapter">
      <h2>{type}</h2>
      <hr />
    </div>
  );
};

export default Chapter;
