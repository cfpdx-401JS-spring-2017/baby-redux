import {CHANGE_NAME, CHANGE_GREETING} from './constants';

export function changeName (name = 'chris') {
    return {
        type: CHANGE_NAME,
        name
    }
}

export function changeName (greeting = 'hello') {
    return {
        type: CHANGE_GREETING,
        greeting
    }
}