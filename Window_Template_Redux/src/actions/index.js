import  * as Types from "./ActionTypes";

export function  increment() {
    return {
        type: Types.INCREMENT
    };
}

export function decrement() {
    return {
        type: Types.DECREMENT
    };
}

export function setDiff(value) {
    return {
        type: Types.SET_DIFF,
        diff:value
    };
}