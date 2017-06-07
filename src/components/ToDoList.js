import React from 'react';

export default function ToDoList({ salutation, name, punctuation }) {
  return (
    <div>
      <span>{salutation} {name}{punctuation}</span>
    </div>
  );
}