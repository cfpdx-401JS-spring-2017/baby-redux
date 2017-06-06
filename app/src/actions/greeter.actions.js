import { CHANGE_SALUTATION, CHANGE_NAME } from '../constants/greeter-constants';

export function changeSalutation(payload) {
  return {
    type: CHANGE_SALUTATION,
    payload
  };
}

export function changeName(payload) {
  return {
    type: CHANGE_NAME,
    payload
  };
}