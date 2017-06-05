import React, { Component } from 'react';
import Greeter from './components/Greeter';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Redux</h2>
        </div>
        <Greeter />
      </div>
    );
  }
}

export default App;
