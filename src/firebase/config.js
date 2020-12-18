import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDtVbJ9n-hAVE4EAA5BEqAyRndxE6OI4YQ",
  authDomain: "vue3-firebase-udemy.firebaseapp.com",
  projectId: "vue3-firebase-udemy",
  storageBucket: "vue3-firebase-udemy.appspot.com",
  messagingSenderId: "362835430565",
  appId: "1:362835430565:web:79fae6e22fa7e092b6114c"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp }