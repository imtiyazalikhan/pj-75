 import firebase from 'firebase';
 require("@firebase/firestore")


 var firebaseConfig = {
  apiKey: "AIzaSyDTKn38GHyLQlBk5QD8AFDKDKUJ86D-mZc",
  authDomain: "wire-less-story-hub.firebaseapp.com",
  databaseURL: "https://wire-less-story-hub-default-rtdb.firebaseio.com",
  projectId: "wire-less-story-hub",
  storageBucket: "wire-less-story-hub.appspot.com",
  messagingSenderId: "105689795520",
  appId: "1:105689795520:web:9c890de2f0fd599ad39625"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig); 

  export default firebase.firestore()