import React from 'react';

export default function GreeterInput({ field, handleSubmit }) {
  return (
    <form onSubmit={e => {
      e.preventDefault();
      handleSubmit(e.target.elements[field].value);
      e.target.reset();
    }}>
      <label>
        {capitalize(field)}:
          <input name={field} />
        <button>
          submit
        </button>
      </label>
    </form>
  );
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}