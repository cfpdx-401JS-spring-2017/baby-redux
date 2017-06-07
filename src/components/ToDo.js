import React from 'react';

export default function Editor(props) {
  const { salutation, name, punctuation } = props;
  const { changeSalutation, changeName, changePunctuation } = props;

  return (
    <div>
      <form>
        <input value={salutation} onChange={e => {
          changeSalutation(e.target.value);
        }} />
        <input value={name} onChange={e => {
          changeName(e.target.value);
        }} />
        <input value={punctuation} onChange={e => {
          changePunctuation(e.target.value);
        }} />
      </form>
    </div>
  );
}