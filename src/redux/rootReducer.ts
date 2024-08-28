import { combineReducers } from "redux";
import reducer from "./reducer";

const rootReducer = combineReducers({
    counterValues: reducer
});

export default rootReducer;

