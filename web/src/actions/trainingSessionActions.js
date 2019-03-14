import { fetchTrainingSessions, postTrainingSession, deleteTrainingSession, putTrainingSession } from "../service/trainingSessionService";
import {RECEIVED_TRAINING_SESSIONS, CREATED_TRAINING_SESSION, DELETED_TRAINING_SESSION, UPDATED_TRAINING_SESSION } from "./actionTypes";

export const receivedTrainingSessions = body => ({
    type: RECEIVED_TRAINING_SESSIONS,
    body
});

export const createdTrainingSession = body => ({
    type: CREATED_TRAINING_SESSION,
    body
});

export const deletedTrainingSession = id => ({
    type: DELETED_TRAINING_SESSION,
    id
});

export const updatedTrainingSession = body => ({
    type: UPDATED_TRAINING_SESSION,
    body
});

export const getTrainingSessions = () => dispatch => {
    return fetchTrainingSessions().then(body => dispatch(receivedTrainingSessions(body))).catch(e => console.log(e));
};

export const createTrainingSession = trainingSession => dispatch => {
    postTrainingSession(trainingSession)
        .then(trainingSession => dispatch(createdTrainingSession(trainingSession)))
        .catch(e => console.error("Could not post training session", e));
};

export const deleteTrainingSessionWithId = id => dispatch => {
    deleteTrainingSession(id)
        .then(deleted => {
            if (deleted) {
                dispatch(deletedTrainingSession(id))
            }
        })
        .catch(e => console.error("Could not delete training sessiong with id [" + id + "]", e));
};

export const updateTrainingSession = trainingSession => dispatch => {
    putTrainingSession(trainingSession)
        .then(trainingSession => dispatch(updatedTrainingSession(trainingSession)))
        .catch(e => console.error("Could not post training session", e));
}
