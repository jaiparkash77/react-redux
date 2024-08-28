import { DECREMENT, INCREMENT, RESET } from "./actionTypes";

type StateType = {
    value: number
}

const initialState = {
    value: 0,
}

const reducer = (state: StateType = initialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return {
                ...state,
                value: state.value + 1
            };
        case DECREMENT:
            return {
                ...state,
                value: state.value - 1
            };
        case RESET:
            return {
                ...state,
                value: 0
            };
        default:
            return {
                state,
            };
    }
}

export default reducer;