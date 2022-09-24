import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA1uV9k5opHmQPBrICAeSJNw0QxjAxvaQ4",
    authDomain: "driveinapp-f785a.firebaseapp.com",
    projectId: "driveinapp-f785a",
    storageBucket: "driveinapp-f785a.appspot.com",
    messagingSenderId: "467529087018",
    appId: "1:467529087018:web:2c5103e4f7300c9dcf2b53",
    measurementId: "G-YYKWQBS2DJ"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}


export const auth = firebase.auth();