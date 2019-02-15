import TrainingSession from "./TrainingSession";
import { FETCH_TRAINING_SUCCESS, FETCH_CREATE_TRAINING_SESSION, FETCH_DELETE_TRAINING_SESSION, FETCH_GET_ALL_TRAINING_SESSIONS_NAME } from "./actionTypes";

export const trainingReducer = (trainingSessions = [], action) => {
    switch (action.type) {
        case FETCH_CREATE_TRAINING_SESSION:
            return [
                ...trainingSessions,
                new TrainingSession(action.id ,action.name, action.time, action.date)
            ];
        case FETCH_DELETE_TRAINING_SESSION:
            return trainingSessions.filter(trainingSession => trainingSession.id !== action.id);
        case FETCH_TRAINING_SUCCESS:
            return action.body.map(result => new TrainingSession(result.id, result.name, result.minutes, result.date));
        case FETCH_GET_ALL_TRAINING_SESSIONS_NAME:
            return trainingSessions.filter(trainingSession => trainingSession.name.includes(action.name));
        default:
            return trainingSessions;
    }
};

export const getNextTrainingSessionId = state => {
    const trainingSessions = state.trainingSessions;
    for (let i = 1; i <= trainingSessions.length; i++){
        const trainingSessionsWithSameId = trainingSessions.filter(trainingSession => trainingSession.id === i);
        if (trainingSessionsWithSameId.length === 0) {
            return i;
        }
    }
    return trainingSessions.length + 1; 
};
