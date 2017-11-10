import  * as Types from "../actions/ActionTypes";

const counterInitialState = {
    value: 0,
    diff: 1,
    dumbObject: {
        d: 0,
        u: 1,
        m: 3
    }
};

const counter  = (state = counterInitialState, action) => {
    switch (action.type) {
        case Types.INCREMENT:
            return  {
                ...state,
                value: state.value + state.diff,
                dumbObject: {...state.dumbObject, u: state.dumbObject.u + state.diff }
            };
            // return Object.assign({}, state, {
            //     value: state.value + state.diff
            // });
        case Types.DECREMENT:
            return Object.assign({}, state, {
                value: state.value - state.diff
            });
        case Types.SET_DIFF:
            return Object.assign({}, state, {
                diff: action.diff
            });
        default:
            return state;
    }
};

const counterAop = (state = {}, action) => {
    return {
        counter: counter(state.counter, action)
    }
};

export default  counterAop;