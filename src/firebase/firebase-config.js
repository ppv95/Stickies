import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyDtQEnLmXZNpULM2pGERzGypEHa1A173Co",
    authDomain: "sticker-react-app.firebaseapp.com",
    projectId: "sticker-react-app",
    storageBucket: "sticker-react-app.appspot.com",
    messagingSenderId: "1078772833341",
    appId: "1:1078772833341:web:ccdd90b068a0ffda031e54"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  
  export {
    firebase,
    db
  }