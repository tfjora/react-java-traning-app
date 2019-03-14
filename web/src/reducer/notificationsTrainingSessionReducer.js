import {
    CREATED_TRAINING_SESSION_NOTIFICATION,
    DELETED_TRAINING_SESSION_NOTIFICATION,
    UPDATED_TRAINING_SESSION_NOTIFICATION
} from "../actions/actionTypes";

export const notificationsTrainingSessionReducer = (notifications = [], action) => {
    let newNotifications = new Array();
    switch (action.type) {
        case CREATED_TRAINING_SESSION_NOTIFICATION:
            let name = "New session created : " + action.body.name;
            newNotifications.push(name);
            return [...newNotifications];
        default:
            return notifications;
    }
};