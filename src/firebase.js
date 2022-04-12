import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB1HdkS3xNMGazhC34U_O_ZTkl1ayJy4b0",
    authDomain: "linkedin-clone-xein.firebaseapp.com",
    projectId: "linkedin-clone-xein",
    storageBucket: "linkedin-clone-xein.appspot.com",
    messagingSenderId: "930634804850",
    appId: "1:930634804850:web:cb70901ad7b7d4b0249ceb",
    measurementId: "G-859WLCR9QR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();

  export {db, auth};