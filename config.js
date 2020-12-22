import * as firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyB3Nx3MjggROFhzEbcwxdPNXVaIdwfuUtE",
    authDomain: "story-a5e70.firebaseapp.com",
    databaseURL: "https://story-a5e70.firebaseio.com",
    projectId: "story-a5e70",
    storageBucket: "story-a5e70.appspot.com",
    messagingSenderId: "8676293475",
    appId: "1:8676293475:web:7a20aceaa96d9dbb6fb156"
  };

  firebase.initializeApp(firebaseConfig)
  export default firebase.firestore()