import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyDUdJygd1iLyOwhknNH6cusSZLxauc479Q',
  authDomain: 'oneminute-web.firebaseapp.com',
  databaseURL: 'https://oneminute-web.firebaseio.com',
  projectId: 'oneminute-web',
  storageBucket: 'oneminute-web.appspot.com',
  messagingSenderId: '1066993734297',
  appId: '1:1066993734297:web:d9ffc315ebe2be9a21de08',
  measurementId: 'G-V51R7PM815',
});

const db = firebase.firestore(app);
const base = Rebase.createClass(db);

export default base;
