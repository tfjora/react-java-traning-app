import { combineReducers } from "redux";
import { trainingReducer } from "./trainingReducer";

export default combineReducers ({
    trainingRecords: trainingReducer
});