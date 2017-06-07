import React, { Component } from 'react';
import FilterLink from './containers/FilterLink';
import VisibleToDoList from './containers/VisibleToDoList';
import Footer from './components/Footer';
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
        <VisibleToDoList />
        <FilterLink />
        <Footer />
      </div>
    );
  }
}

export default App;
