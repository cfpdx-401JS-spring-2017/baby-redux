import React from 'react';
import GreeterInput from './GreeterInput';

export default function Editor(props) {
  const { changeSalutation, changeName } = props;

  return (
    <div>
      <p>
        Change your greeting by using these controls: 
      </p>
      <GreeterInput field={'salutation'} handleSubmit={changeSalutation} />
      <GreeterInput field={'name'} handleSubmit={changeName} />
    </div>
  );
}