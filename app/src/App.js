import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GreeterContainer from './containers/GreeterContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Baby Redux</h2>
          <GreeterContainer />
        </div>
      </div>
    );
  }
}

export default App;
