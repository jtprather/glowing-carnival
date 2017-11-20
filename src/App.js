import TweetBox from './Components/Tweet-box';
import React, { Component } from 'react';


import logo from './salesForceLogo.png';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to SalesForce Twitter Feed Challenge</h1>
        </header>
        <div>
          <TweetBox />
        </div>
      </div>
    );
  }
}

export default App;
