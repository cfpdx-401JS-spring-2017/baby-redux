import React from 'react';

export default function ToDo({ onClick, completed, text }) {
  return (
    <div
      onClick={onClick}
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
    >
      {text}
    </div>
  );
}