import {CHANGE_NAME, CHANGE_GREETING} from './constants';

export function changeName (payload = 'chris') {
    return {
        type: CHANGE_NAME,
        payload
    }
}

export function changeGreeting (payload = 'hello') {
    return {
        type: CHANGE_GREETING,
        payload
    }
}