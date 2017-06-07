import React from 'react';

export default function Greeter({ salutation, name }) {
  return (
    <div className="Greeter">
      <span className="greeting">
        {salutation}, {name}!
      </span>
    </div>
  );
}