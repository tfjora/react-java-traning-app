import { combineReducers } from "redux";
import { trainingSessionReducer } from "./trainingSessionReducer";
import { notificationsTrainingSessionReducer } from "./notificationsTrainingSessionReducer";

export default combineReducers ({
    trainingSessions: trainingSessionReducer,
    notifications: notificationsTrainingSessionReducer
});