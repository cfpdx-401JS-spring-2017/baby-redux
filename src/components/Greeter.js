import React from 'react';

export default function Greeter({ salutation, name, punctuation }) {
  return (
    <div>
      <span>{salutation} {name}{punctuation}</span>
    </div>
  );
}