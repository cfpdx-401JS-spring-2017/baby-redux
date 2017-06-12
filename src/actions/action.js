import * as actions from '../constants/constant';

let nextToDoId = 2;

export function addToDo(text) {
  return{
    type: actions.ADD_TODO,
    id: nextToDoId++,
    text
  };
}

export function toggleToDo(id) {
  return{
    type: actions.TOGGLE_TODO,
    id
  };
}

export function setVisibility(filter) {
  return{
    type: actions.SET_VISIBILITY_FILTER,
    filter
  };
}