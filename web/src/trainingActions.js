import { fetchTrainingSessions } from "./trainingSessionService";
import { FETCH_TRAINING_FAILURE, FETCH_TRAINING_REQUEST, FETCH_TRAINING_SUCCESS, FETCH_GET_ALL_TRAINING_SESSIONS_NAME, FETCH_DELETE_TRAINING_SESSION, FETCH_CREATE_TRAINING_SESSION} from "./actionTypes";

export const createTrainingSession= (id, name, time, date) => ({
    type: FETCH_CREATE_TRAINING_SESSION,
    id, 
    name,
    time,
    date
});

export const deleteTrainingSession = id => ({
    type: FETCH_DELETE_TRAINING_SESSION,
    id
});

export const getAllTrainingSessionsName = userInputText => ({
    type: FETCH_GET_ALL_TRAINING_SESSIONS_NAME,
    userInputText
})

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