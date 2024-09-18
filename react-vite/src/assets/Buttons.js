import React from 'react';
import './Buttons.css';

const Buttons = () => {
  const handleClick = () => {
    alert('Clic simple');
  };

  const handleDoubleClick = () => {
    alert('Doble clic');
  };

  return (
    <div className="buttons">
      <button onClick={handleClick} onDoubleClick={handleDoubleClick}>
        Botón
      </button>
    </div>
  );
};

export default Buttons;
