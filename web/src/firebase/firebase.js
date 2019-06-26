import firebase from "firebase/app";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyAJiM9ij2d0M3_S7kI01I5xbosdxU-3y2o",
    authDomain: "training-app-301d6.firebaseapp.com",
    databaseURL: "https://training-app-301d6.firebaseio.com",
    projectId: "training-app-301d6",
    storageBucket: "training-app.appspot.com",
    messagingSenderId: "100296608121"
  };
  firebase.initializeApp(config);

  export const firestore = firebase.firestore();
  export default firebase;