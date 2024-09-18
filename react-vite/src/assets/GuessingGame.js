import React, { useState } from 'react';
import './GuessingGame.css';

const GuessingGame = () => {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const userGuess = parseInt(guess);
    if (userGuess > number) {
      setMessage('Más bajo');
    } else if (userGuess < number) {
      setMessage('Más alto');
    } else {
      setMessage('¡Correcto!');
    }
  };

  return (
    <div className="guessing-game">
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
        />
        <button type="submit">Adivinar</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default GuessingGame;
