import { CHANGE_SALUTATION, CHANGE_NAME } from '../constants/greeter.constants';

const initialState = {
  salutation: 'Hello',
  name: 'Yuval'
};

export default function GreeterApp(state = initialState, action) {
  switch(action.type) {
    case CHANGE_SALUTATION:
      return Object.assign({}, state, { salutation: action.payload });
    case CHANGE_NAME:
      return Object.assign({}, state, { name: action.payload });
    default:
      return state;
  }
}