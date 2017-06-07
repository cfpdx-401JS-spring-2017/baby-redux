import {CHANGE_NAME, CHANGE_GREETING} from './constants';

export default function NameApp (state = '',{type, name}) {
    switch (type) {
        case CHANGE_NAME:
            return state = name;
        default: 
            return state;
    }
}