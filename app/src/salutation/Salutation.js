import React, { component } from 'react';

export default function Salutation(props) {
  const { changeName, changeSalutation, name, salutation } = props;

  return (
    <div>
      <div>
        <span>{salutation}</span>
        <span>{name}</span>!
    </div>
      <div>
        <label>Change the Salutation!<input value={salutation} onChange={e => changeSalutation(e.target.value)} /></label>
        <label>Change your Name!<input value={name} onChange={e => changeName(e.target.value)} /></label>
      </div>
    </div>
  );
}
