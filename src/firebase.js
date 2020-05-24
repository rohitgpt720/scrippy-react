import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyAJ7-WgCc7YJGjZ9WFxQ64KTa6cRq7Wx8g",
  authDomain: "scrippy-9707c.firebaseapp.com",
  databaseURL: "https://scrippy-9707c.firebaseio.com",
  projectId: "scrippy-9707c",
  storageBucket: "scrippy-9707c.appspot.com",
  messagingSenderId: "454941025473",
  appId: "1:454941025473:web:a886f67af0287067a02040",
  measurementId: "G-EQXM4220F0",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
