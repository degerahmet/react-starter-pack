import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";


export default function exampleActionReducer(state=initialState.currentData,action) {
    switch (action.type) {
        case actionTypes.EXAMPLE_ACTION:
            return action.payload
        default:
            return state;
    }
}