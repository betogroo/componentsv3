// import Vue from 'vue'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
// import 'firebase/storage'
// import 'firebase/database'

firebase.initializeApp({
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID
})

// firebase.initializeApp(firebaseConfig)

export default firebase

const fbAuth = firebase.auth()
const fbFirestore = firebase.firestore()
const fbTimestamp = firebase.firestore.FieldValue.serverTimestamp

export { fbFirestore, fbTimestamp, fbAuth }
