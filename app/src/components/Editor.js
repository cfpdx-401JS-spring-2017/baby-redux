import React from 'react';

export default function Editor(props) {
  const { salutation, name } = props;
  const { changeSalutation, changeName } = props;

  return (
    <div>
      <p>
        Change your greeting by using these controls: 
      </p>
      <label>
        Salutation:
        <input 
          name="salutation" 
          value={salutation} 
          onChange={e => changeSalutation(e.target.value)}
        /> 
      </label>
      <label>
        Name:
        <input 
          name="name" 
          value={name} 
          onChange={e => changeName(e.target.value)}
        /> 
      </label>
    </div>
  );
}