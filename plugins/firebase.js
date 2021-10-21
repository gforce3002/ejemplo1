import firebase from 'firebase/app'
require("firebase/auth")
require("firebase/firestore")
require("firebase/storage")

const firebaseConfig = {
    /* apiKey: "AIzaSyCt9fubbSru-nsTggJTeHx3iQpdFTWHzGE",
    authDomain: "nuxt-1-c0153.firebaseapp.com",
    projectId: "nuxt-1-c0153",
    storageBucket: "nuxt-1-c0153.appspot.com",
    messagingSenderId: "277368992917",
    appId: "1:277368992917:web:6df370b44a634a14b4579c" */
    
    apiKey: "AIzaSyABDOLIX0QBcbgfDrL6tGgk4MbhnwMCK68",
    authDomain: "ejemplo-v2-f074d.firebaseapp.com",
    projectId: "ejemplo-v2-f074d",
    storageBucket: "ejemplo-v2-f074d.appspot.com",
    messagingSenderId: "676052508593",
    appId: "1:676052508593:web:057ac48a91f759cf66a790"

};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export {firebase, db, auth, storage}