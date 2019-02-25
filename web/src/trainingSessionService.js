const BASE_URL = "/api/trainingsessions/";

export const fetchTrainingSessions = () => fetch(BASE_URL)
    .then(response => response.json())
    .catch(e => console.error("Could not fetch training sessions", e));

export const fetchTrainingSession = location => fetch(location + "/")
    .then(response => response.json())
    .catch(e => console.error("Could not fetch training session on location [" + location + "]", e));

export const postTrainingSession = trainingSession => fetch(
    BASE_URL, {
        method: 'POST',
        body: JSON.stringify(trainingSession),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => fetchTrainingSession(response.headers.get("Location")))
    .catch(e => console.error("Could not post training session [" + trainingSession + "]", e));

export const deleteTrainingSession = id => fetch(
    BASE_URL + id, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .catch(e => console.error("Could not delete training session with id [" + id + "]", e));

export const updateTrainingSessionAPI = trainingSession => fetch(
    BASE_URL + trainingSession.id, {
        method: 'PUT',
        body: JSON.stringify(trainingSession),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .catch(e => console.error("Could not fetch training session by id = [" + trainingSession.id + "]", e));