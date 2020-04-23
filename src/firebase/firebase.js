import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC9huFJamK1TqzY_BFT3MajST3S1PpEn1c",
    authDomain: "login-firebase-2440c.firebaseapp.com",
    databaseURL: "https://login-firebase-2440c.firebaseio.com",
    projectId: "login-firebase-2440c",
    storageBucket: "login-firebase-2440c.appspot.com",
    messagingSenderId: "599798517377",
    appId: "1:599798517377:web:d851449245aac1c2f40780",
    measurementId: "G-2NSRBB3E1L"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;