import React from 'react';

export default function Greeting(props) {

    const { name, greeting, changeGreeting, changeName } = props;

    return (
        <div>
            <h1>{greeting},  {name}!</h1>
            <form>
                <input type="text" value={greeting}
                    onChange={event => {changeGreeting(event.target.value);
                    }} />
                    <input type="text" value={name}
                    onChange={event => {changeName(event.target.value);
                    }}/>
            </form>
        </div>
    );



}