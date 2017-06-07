import React from 'react';

export default function Greeting(props) {

  const { changeName, changeSalutation, name, salutation } = props;

  return (
    <div>
      <div>
        <span>{salutation} </span>
        <span>{name}</span>
      </div>
      <div>
        <label>what kind of greeting would you like?<input value={salutation} 
        onChange={e => changeSalutation(e.target.value)} /></label>
        <br/>
        <label>What's your name?<input value={name} onChange={e => changeName(e.target.value)} /></label>
      </div>
    </div>
  );
}