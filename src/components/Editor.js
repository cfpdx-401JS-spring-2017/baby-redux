import React from 'react';

export default function Editor(props) {
  const { salutation, name, punctuation } = props;
  const { changeSalutation, changeName, changePunctuation } = props;

  return (
    <div>
      <form>
        <input type="text" value={salutation} onChange={e => {
          changeSalutation(e.target.value);
        }} />
        <input type="text" value={name} onChange={e => {
          changeName(e.target.value);
        }} />
        <input type="text" value={punctuation} onChange={e => {
          changePunctuation(e.target.value);
        }} />
      </form>
    </div>
  );
}