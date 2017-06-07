import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GreeterContainer from './containers/GreeterContainer';
import EditorContainer from './containers/EditorContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Baby Redux Greeter App</h2>
          <GreeterContainer />
          <EditorContainer />
        </div>
      </div>
    );
  }
}

export default App;
