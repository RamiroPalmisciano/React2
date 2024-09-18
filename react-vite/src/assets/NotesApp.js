import React, { useState } from 'react';
import './NotesApp.css';

const NotesApp = () => {
  const [note, setNote] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setMessage('Guardando...');
    setNote(e.target.value);
    setTimeout(() => {
      setMessage('Nota guardada');
    }, 2000);
  };

  return (
    <div className="notes-app">
      <textarea
        value={note}
        onChange={handleInputChange}
        placeholder="Escribe tu nota aquí..."
      />
      <p>{message}</p>
    </div>
  );
};

export default NotesApp;
