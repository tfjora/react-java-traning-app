const BASE_URL = "/api";

export const fetchTrainingSessions = () => fetch(BASE_URL + "/trainingsession").then(response => response.json());