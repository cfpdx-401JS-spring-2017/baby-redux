import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {GreetingContainer} from'./containers/Container';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>WELCOME TO BABY REDUX LAB</h2>
                </div>
             <GreetingContainer/>
            </div>
        );
    }
}

export default App;
