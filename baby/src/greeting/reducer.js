import {CHANGE_NAME, CHANGE_GREETING} from './constants';

export default function NameApp (state = '',{type, payload}) {
    switch (type) {
        case CHANGE_NAME:
            return {...state, name:payload};
        case CHANGE_GREETING:
            return {...state, greeting:payload};
        default: 
            return state;
    }
}