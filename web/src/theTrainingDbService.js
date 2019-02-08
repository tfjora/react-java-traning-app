const BASE_URL = "http://localhost:8080/TrainingSession";

export const fetchTrainingSessions = () => fetch(BASE_URL + "/bar").then(response => response.json());