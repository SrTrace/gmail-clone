import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDkSTKO40yoMfqb1HQSKesAPYHA2r3yx9M",
    authDomain: "clone-f2e73.firebaseapp.com",
    projectId: "clone-f2e73",
    storageBucket: "clone-f2e73.appspot.com",
    messagingSenderId: "121077694671",
    appId: "1:121077694671:web:17ea69821520778b7777ba",
    measurementId: "G-MC81ZZQ25G"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};