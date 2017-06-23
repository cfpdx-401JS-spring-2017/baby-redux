import {CHANGE_NAME, CHANGE_SALUTATION} from './constants';

export function changeName(name = 'Morgan') {
  return {
    type: CHANGE_NAME,
    payload
  }; 
}

export function changeSalutation(salutation = 'Hey') {
  return {
    type: CHANGE_SALUTATION,
    payload
  };
}
 