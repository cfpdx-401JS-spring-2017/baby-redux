import * as actions from '../constants/constant';

export function salutation(payload) {
  return{
    type: actions.CHANGE_SALUTATION,
    payload
  };
}

export function name(payload) {
  return{
    type: actions.CHANGE_NAME,
    payload
  };
}

export function punctuation(payload) {
  return{
    type: actions.CHANGE_PUNCTUATION,
    payload
  };
}