import { CHANGE_NAME, CHANGE_SALUTATION } from './constants';

export default function NameApp(state = '', {type, payload}) {
  switch (type) {
    case CHANGE_NAME:
      return state + amount;
    case CHANGE_SALUTATION:
      return { ...state, name: payload };
    default:
      return { ...state, salutation: payload };
  }
}