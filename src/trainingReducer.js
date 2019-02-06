import TrainingRecord from "./TrainingRecord";

export const trainingReducer = (trainingRecords = [], action) => {
    switch (action.type) {
        case "CREATE_TRAINING_RECORD":
            return [
                ...trainingRecords,
                new TrainingRecord(action.name)
            ]
        default:
            return trainingRecords;
    }
};