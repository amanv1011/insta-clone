
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyATKo2UxQ2m_nooQHwygY1LvMZ2BVneQbs",
    authDomain: "instagrem-clone-react.firebaseapp.com",
    databaseURL: "https://instagrem-clone-react-default-rtdb.firebaseio.com",
    projectId: "instagrem-clone-react",
    storageBucket: "instagrem-clone-react.appspot.com",
    messagingSenderId: "771992297336",
    appId: "1:771992297336:web:1929fec6b00762ab9c728d",
    measurementId: "G-9RTLDBM52Q"
})

const db = firebaseApp.firestore();
const auth = firebase.auth()
const storage = firebase.storage()

export {db, auth, storage}
