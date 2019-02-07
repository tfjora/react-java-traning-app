import Training from "./Training";

export const trainingReducer = (trainingSession = [], action) => {
    switch (action.type) {
        case "CREATE_TRAINING_RECORD":
            return [
                ...trainingSession,
                new Training(action.name)
            ]
        default:
            return trainingSession;
    }
};