import { RESET, DECREMENT,INCREMENT } from "./actionTypes.ts";

export const increment = () => {
    type: INCREMENT
};

export const decrement = () => {
    type: DECREMENT
};

export const reset = () => {
    type: RESET
}
