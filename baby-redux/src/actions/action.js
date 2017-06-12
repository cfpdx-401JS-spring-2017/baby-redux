import * as action from '../constants/constant';

export function changeGreeting(payload) {
    return {
        type: action.CHANGE_GREETING,
        payload
    };
}

export function changeName(payload) {
    return{
        type: action.CHANGE_NAME,
        payload
    };
}