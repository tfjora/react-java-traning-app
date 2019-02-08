import TrainingSession from "./TrainingSession";

export const trainingReducer = (trainingSessions = [], action) => {
    switch (action.type) {
        case "CREATE_TRAINING_SESSION":
            return [
                ...trainingSessions,
                new TrainingSession(action.id ,action.name, action.time, action.date)
            ]
        case "DELETE_TRAINING_SESSION":
            return trainingSessions.filter(trainingSession => trainingSession.id !== action.id);
        case "FETCH_TRAINING_SESSIONS":
                return [...action.body.results];
        default:
            return trainingSessions;
    }
};

export const getNextTrainingSessionId = state => {
    const trainingSessions = state.trainingSessions;
    for (var i = 1; i <= trainingSessions.length; i++){
        const trainingSessionsWithSameId = trainingSessions.filter(trainingSession => trainingSession.id === i);
        if (trainingSessionsWithSameId.length == 0) {
            return i;
        }
    }
    return trainingSessions.length + 1; 
}