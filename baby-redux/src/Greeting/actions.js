import { CHANGE_NAME, CHANGE_SALUTATION } from './constants';

export function changeName(payload) {
  return { 
    type: CHANGE_NAME,
    payload
  };
}

export function changeSalutation(payload) {
  return { 
    type: CHANGE_SALUTATION,
    payload
  };
}