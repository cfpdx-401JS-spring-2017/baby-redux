import React from 'react';

export default function Editor(props) {
  const { changeSalutation, changeName } = props;

  return (
    <div>
      <p>
        Change your greeting by using these controls: 
      </p>
      <form onSubmit={e => {
        e.preventDefault();
        changeSalutation(e.target.elements.salutation.value);
        e.target.reset();
      }}>
        <label>
          Salutation:
          <input name="salutation"/>
          <button>
            submit
          </button>
        </label>
      </form>
     
      <form onSubmit={e => {
        e.preventDefault();
        changeName(e.target.elements.name.value);
        e.target.reset();  
      }}>
        <label>
          Name:
          <input name="name"/>
          <button>
            submit
          </button>
        </label>
      </form>
    </div>
  );
}