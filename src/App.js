import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Jenkins Demo App</h2>
        </div>
        <p className="App-intro">
          I have changed something here
          I have changed something here
          I have changed something here
          I have changed something here
          v
        </p>
      </div>
    );
  }
}

export default App;
