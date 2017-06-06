import * as actions from '../constants/constant';

export function changeSalutation(payload) {
  return{
    type: actions.CHANGE_SALUTATION,
    payload
  };
}

export function changeName(payload) {
  return{
    type: actions.CHANGE_NAME,
    payload
  };
}

export function changePunctuation(payload) {
  return{
    type: actions.CHANGE_PUNCTUATION,
    payload
  };
}