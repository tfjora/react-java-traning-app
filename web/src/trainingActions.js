import { fetchTrainingSessions } from "./trainingSessionService";
import { FETCH_TRAINING_FAILURE, FETCH_TRAINING_REQUEST, FETCH_TRAINING_SUCCESS } from "./actionTypes";

export const createTrainingSession= (id, name, time, date) => ({
    type: "CREATE_TRAINING_SESSION",
    id, 
    name,
    time,
    date
});

export const deleteTrainingSession = id => ({
    type: "DELETE_TRAINING_SESSION",
    id
});

export const fetchTrainingRequest = () => ({
    type:  FETCH_TRAINING_REQUEST
});

export const fetchTrainingSuccess = (body) => ({
    type:  FETCH_TRAINING_SUCCESS,
    body
});

export const fetchTrainingFailure = error => ({
    type:  FETCH_TRAINING_FAILURE,
    error
});


export const fetchTrainingSession = () => dispatch => {
    dispatch(fetchTrainingRequest());
    return fetchTrainingSessions()
        .then(body => dispatch(fetchTrainingSuccess(body)))
        .catch(e => {
            console.log(e);
            dispatch(fetchTrainingFailure(e));
        });
};