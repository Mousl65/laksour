import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBojec1nG5H6_nprrLRFXajBjD1rGspuVc",
    authDomain: "laksour-d1ea4.firebaseapp.com",
    projectId: "laksour-d1ea4",
    storageBucket: "laksour-d1ea4.appspot.com",
    messagingSenderId: "270931009490",
    appId: "1:270931009490:web:9ea846d69a24fb9185b20b",
    measurementId: "G-T1YPJDF2FL"
    });
    const db = firebaseApp.firestore();
    export {db}