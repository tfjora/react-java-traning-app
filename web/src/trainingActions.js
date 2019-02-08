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