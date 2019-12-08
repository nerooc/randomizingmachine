import React from 'react';
import './App.css';
import Room from './Room';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button>
          Losuj pokoje
          <Room />
        </button>
      </header>
    </div>
  );
}

export default App;
