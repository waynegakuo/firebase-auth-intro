// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "{YOUR_API_KEY}",
    authDomain: "xxxxxxxxxxxxxxxxxxxxxx",
    databaseURL: "xxxxxxxxxxxxxxxxxxxxxx",
    projectId: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
    storageBucket: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    messagingSenderId: "xxxxxxxxxxxxxxxxxxxxxxxxx",
    appId: "xxxxxxxxxxxxxxxxxxxxxxxx",
    measurementId: "xxxxxxxxxxxxxxxxxxxxxxxxxxx"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Make auth, db and firestore references
const auth = firebase.auth();
const db = firebase.firestore();
const functions = firebase.functions();