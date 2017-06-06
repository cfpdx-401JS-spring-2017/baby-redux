import React, { Component } from 'react';
import { GreeterContainer, EditorContainer } from './containers/Containers';
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
        <GreeterContainer />
        <EditorContainer />
      </div>
    );
  }
}

export default App;
