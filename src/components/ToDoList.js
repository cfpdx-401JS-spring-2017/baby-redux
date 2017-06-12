import React from 'react';
import ToDo from './ToDo';

export default function ToDoList({ todos, onTodoClick }) {
  return (
    <ul>
      {todos.map(todo => (
        <ToDo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
        />
      ))}
    </ul>
  );
}