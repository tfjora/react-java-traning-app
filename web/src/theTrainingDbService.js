const BASE_URL = "http://localhost:3000/";

export const fetchTrainingSessions = () => fetch(BASE_URL).then(response => response.json());