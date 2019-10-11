import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';




const config = {
  apiKey: "AIzaSyDxRjR-smW_yjUm63jELmLhlMe7DjfMAWM",
  authDomain: "react-movie-5ede8.firebaseapp.com",
  databaseURL: "https://react-movie-5ede8.firebaseio.com",
  projectId: "react-movie-5ede8",
  storageBucket: "react-movie-5ede8.appspot.com",
  messagingSenderId: "979800632508",
  appId: "1:979800632508:web:9fb0cb8014d5bd66efb4b9",
  measurementId: "G-4Y7FS1LC5W"
};




const firebaseApp = firebase.initializeApp(config);
const database = firebase.database();
const githubProvider = new firebase.auth.GithubAuthProvider();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebaseApp, githubProvider , googleAuthProvider, database as default };
