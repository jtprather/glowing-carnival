import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h3 className="App-title">
          this is another test of the commit/push build system
        </h3>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          this is only enough boilerplate to work.
        </p>
      </div>
    );
  }
}

export default App;
