const BASE_URL = "/api/trainingsessionsnotification/";

export const postTrainingSessionNotification = trainingSessionNotification => fetch(
    BASE_URL, {
        method: 'POST',
        body: JSON.stringify(trainingSessionNotification),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .catch(e => console.error("Could not post training session [" + trainingSessionNotification + "]", e));
