import React from 'react';

export default function Greeter({ salutation, name }) {
  return (
    <div className="Greeter">
      <p className="greeting">
        {salutation}, {name}!
      </p>
    </div>
  );
}