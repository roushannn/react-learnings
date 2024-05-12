import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to my react learnings! <br />
          Here are some topics which I've learned:
          <ul>
            <li>CSS stylings</li>
            <li>React router</li>
            <li>React redux</li>
          </ul>
        </p>
      </header>
    </div>
  );
}

export default App;
