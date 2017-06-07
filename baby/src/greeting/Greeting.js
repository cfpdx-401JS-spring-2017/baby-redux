import React, { Component } from 'react';

export default function Greeting(props) {

    const {changeName , changeGreeting, name, greeting} = props;
    console.log(props);
    return (
      <div className="Greeting">
        <h1>{props.name}</h1>
        <h1>{greeting}</h1>
        <label>Whats yo name fool? <input onChange={e => changeName(e.target.value)}/></label>
        <label>Whats yo greeting fool? <input onChange={e => changeGreeting(e.target.value)}/></label>
      </div>
    );
  }

