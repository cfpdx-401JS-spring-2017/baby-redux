import { SALUTATION, NAME, PUNCTUATION } from '../constants/constant';

export function salutation() {
  return{
    type: SALUTATION
  };
}

export function name() {
  return{
    type: NAME
  };
}

export function punctuation() {
  return{
    type: PUNCTUATION
  };
}