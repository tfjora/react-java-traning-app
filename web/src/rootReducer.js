import { combineReducers } from "redux";
import { trainingSessionReducer } from "./trainingSessionReducer";

export default combineReducers ({
    trainingSessions: trainingSessionReducer
});