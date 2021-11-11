import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBB7bnsb6B_crGOKi86pXiEkDuOwQdBiWw",
  authDomain: "oikonomos-4656c.firebaseapp.com",
  projectId: "oikonomos-4656c",
  storageBucket: "oikonomos-4656c.appspot.com",
  messagingSenderId: "171430419976",
  appId: "1:171430419976:web:84b3757ea786f073ef3bbd"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, auth, timestamp }