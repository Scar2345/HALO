import React from 'react';

const OptionButton = ({ image, onClick }) => {
  return (
    <button className="option-button" onClick={onClick}>
      <img src={image} alt="Option" />
    </button>
  );
};

export default OptionButton;
