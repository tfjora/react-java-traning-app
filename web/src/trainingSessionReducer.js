import {
    RECEIVED_TRAINING_SESSIONS,
    CREATED_TRAINING_SESSION,
    DELETED_TRAINING_SESSION,
    UPDATED_TRAINING_SESSION,
    GET_TRAINING_SESSION_BY_ID
} from "./actionTypes";
import TrainingSession from "./TrainingSession";

export const trainingSessionReducer = (trainingSessions = [], action) => {
    switch (action.type) {
        case RECEIVED_TRAINING_SESSIONS:
            return [...action.body];
        case CREATED_TRAINING_SESSION:
            return [action.body, ...trainingSessions];
        case DELETED_TRAINING_SESSION:
            return trainingSessions.filter(trainingSession => trainingSession.id !== action.id);
        case GET_TRAINING_SESSION_BY_ID:
            return null;
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
    let month = (date.getUTCMonth() + 1);
    let year = date.getUTCFullYear();

    if (day < 10)
        day = "0" + date.getUTCDate();

    if (month < 10)
        month = "0" + (date.getUTCMonth() + 1);

    return year + "-" + month + "-" + day;
};

export const formatSecondsToHoursMinutesSecound = trainingSession => {
    let formatSecound = "00:00:00";
    if (trainingSession != null) {
        let totalSeconds = trainingSession.minutes;
        let hours = Math.floor(totalSeconds / 3600);
        if (hours < 10)
            hours = "0" + hours;
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        if (minutes < 10)
            minutes = "0" + minutes;
        let seconds = totalSeconds % 60;
        if (seconds < 10)
            seconds = "0" + seconds;
        console.log( hours + ":" + minutes + ":" + seconds);
        return hours + ":" + minutes + ":" + seconds;
    }
    return formatSecound;
};


export const getTrainingSession = (state, id) => {
    if (state.trainingSessions.id !== null) {
        return state.trainingSessions.find(trainingSession => parseInt(id) === trainingSession.id);
    } else {
         console.log(" null: " + id + "\nTrainingsession id: " + state.trainingSessions);
    }
};