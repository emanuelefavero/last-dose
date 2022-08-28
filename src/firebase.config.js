// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyBpXVZGTD9ooSwOxAUtAhz5a2lXoctGz70',
    authDomain: 'last-dose-app.firebaseapp.com',
    projectId: 'last-dose-app',
    storageBucket: 'last-dose-app.appspot.com',
    messagingSenderId: '810375358538',
    appId: '1:810375358538:web:e7294c2d20ce477cab5eb3',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
