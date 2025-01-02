// src/firebase/config.js
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAdRWyQHpEW45jruEeCGnPA3xYkNdcQOs0",
    authDomain: "vue-firebase-sites-41eed.firebaseapp.com",
    projectId: "vue-firebase-sites-41eed",
    storageBucket: "vue-firebase-sites-41eed.appspot.com",
    messagingSenderId: "942963153905",
    appId: "1:942963153905:web:938ff22a0ece74bbc9c250"
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp, projectAuth }