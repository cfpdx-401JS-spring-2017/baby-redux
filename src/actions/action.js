import * as actions from '../constants/constant';

export function addToDo(text) {
  return{
    type: actions.ADD_TODO,
    text
  };
}

export function toggleToDo(index) {
  return{
    type: actions.TOGGLE_TODO,
    index
  };
}

export function setVisibility(filter) {
  return{
    type: actions.SET_VISIBILITY_FILTER,
    filter
  };
}