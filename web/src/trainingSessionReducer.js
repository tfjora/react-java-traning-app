import { RECEIVED_TRAINING_SESSIONS, CREATED_TRAINING_SESSION, DELETED_TRAINING_SESSION, UPDATED_TRAINING_SESSION} from "./actionTypes";

export const trainingSessionReducer = (trainingSessions = [], action) => {
    switch (action.type) {
        case RECEIVED_TRAINING_SESSIONS:
            return [...action.body];
        case CREATED_TRAINING_SESSION:
            return [action.body, ...trainingSessions];
        case DELETED_TRAINING_SESSION:
            return trainingSessions.filter(trainingSession => trainingSession.id !== action.id);
        case UPDATED_TRAINING_SESSION:
            console.log(action.body);

            //finn og fjern den gamle versjonen fra trainingsessions
            //ta kopi av trainingsessions og legg inn den nye versjonen
            //returner den nye listen med trainingsessions

            return [...action.body];
        default:
            return trainingSessions;
    }
};

export const getNowAsDateString = () => {
    const date = new Date();
    let day = date.getUTCDate();
    let month = (date.getUTCMonth()+1);
    let year = date.getUTCFullYear();

    if (day < 10)
        day = "0" + date.getUTCDate();

    if (month < 10)
        month = "0" + (date.getUTCMonth()+1);

    return year + "-" + month + "-" + day;
};


export const getTrainingSession = (id, state) => {
    return state.trainingSessions.find(trainingSession => parseInt(id) === trainingSession.id);
};
