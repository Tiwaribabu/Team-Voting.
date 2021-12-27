import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  apiKey: "AIzaSyCSML4TCEL7V_FuIVgi8vnBGbeEILJFKn4",
  authDomain: "c67-c3bf2.firebaseapp.com",
  projectId: "c67-c3bf2",
  storageBucket: "c67-c3bf2.appspot.com",
  messagingSenderId: "1064575967061",
  appId: "1:1064575967061:web:1d2d0718d9222a844719dc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();