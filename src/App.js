import { useState } from 'react';
import './App.css';
import { MockComputersList } from './components';
import React from 'react'; 


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MockComputersList />
      </header>
    </div>
  );
}

export default App;
