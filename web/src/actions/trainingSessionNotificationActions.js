import { postTrainingSessionNotification  } from "../service/trainingSessionNotificationService";
import {CREATED_TRAINING_SESSION_NOTIFICATION} from "./actionTypes";


export const createdTrainingSessionNotification = body => ({
    type: CREATED_TRAINING_SESSION_NOTIFICATION,
    body
});


export const createTrainingSessionNotification = trainingSessionNotification => dispatch => {
    postTrainingSessionNotification(trainingSessionNotification)
        .then(trainingSessionNotification => dispatch(createdTrainingSessionNotification(trainingSessionNotification)))
        .catch(e => console.error("Could not post training session notification", e));
};
