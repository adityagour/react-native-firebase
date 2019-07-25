import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCiEPZa0JMJTIBd-LAqcGq1LE0JH7XS1aM",
    authDomain: "fir-starter-d67c9.firebaseapp.com",
    databaseURL: "https://fir-starter-d67c9.firebaseio.com",
    projectId: "fir-starter-d67c9",
    storageBucket: "",
    messagingSenderId: "356321789175",
    appId: "1:356321789175:web:04f1554ffedc6ead"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export const firebaseAuth = firebaseApp.auth();