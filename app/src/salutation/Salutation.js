import React from 'react';

export default function Salutation(props) {

  const { changeName, changeSalutation, name, salutation } = props;

  return (
    <div>
      <div>
        <h1>{salutation}, {name}!</h1>
      </div>
      <div>
        <h3>Change the salutation!</h3>
        <input value={salutation} onChange={e => {changeSalutation(e.target.value)}} />
        <br />
        <h3>Change the name!</h3>
        <input value={name} onChange={e => {changeName(e.target.value)}} />
      </div>
    </div>
  );
}
