import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBIxuGQL_FiAUWLDVnQ4oVVyKPBtVAm4Tw",
    authDomain: "docs-clone-a6dc4.firebaseapp.com",
    projectId: "docs-clone-a6dc4",
    storageBucket: "docs-clone-a6dc4.appspot.com",
    messagingSenderId: "649568071804",
    appId: "1:649568071804:web:38fe95269a7e19753b59f9"
  };
  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
  const db = app.firestore();
  export {db};