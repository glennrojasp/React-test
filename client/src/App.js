import logo from './logo.svg';
import React from 'react';
import './App.css';
import { ListDisplay } from './components/listDisplay/listDisplay';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ListDisplay/>
      </header>
    </div>
  );
}

export default App;
