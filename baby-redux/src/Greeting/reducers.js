import { CHANGE_NAME, CHANGE_SALUTATION } from './constants';

export default function NameApp(state, { type, payload }) {
  switch (type) {
  case CHANGE_NAME:
    return {
      ...state,
      name: payload
    };
  case CHANGE_SALUTATION:
    return  {
      ...state,
      salutation: payload
    };
  default:
    return state;
  }
}