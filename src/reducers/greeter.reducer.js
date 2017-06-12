import { CHANGE_SALUTATION, CHANGE_NAME, CHANGE_PUNCTUATION } from '../constants/constant';

export default function greetingReducer(state, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: action.payload
      };
    case CHANGE_SALUTATION:
      return {
        ...state,
        salutation: action.payload
      };
    case CHANGE_PUNCTUATION:
      return {
        ...state,
        punctuation: action.payload
      };
    default:
      return state;
  }
}
