import React from 'react';
import Gallery from './components/Gallery';
import Form from './components/Form';
import GuessingGame from './components/GuessingGame';
import Buttons from './components/Buttons';
import NotesApp from './components/NotesApp';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1>Proyecto React</h1>
      <Gallery />
      <Form />
      <GuessingGame />
      <Buttons />
      <NotesApp />
    </div>
  );
};

export default App;
