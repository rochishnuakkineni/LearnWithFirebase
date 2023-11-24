// get firebase modules via Javascript SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

// apiKey: Public API key to interact with Firebase services
// authDomain: URL used for user authentication services
// projectId: Project ID for your Firebase application
// storageBucket: URL for file storage within your application
// messagingSenderId: Sender ID for sending messages via Firebase Cloud Messaging
// appId: Application ID for the Firebase app, it is unique to this application

// STEP 1: Declare Firebase Environment Variables  
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAuck2YCas_qPkTDBvsOM_IHzqxTbIJ8z4",
    authDomain: "learnwithfirebase-81bf0.firebaseapp.com",
    projectId: "learnwithfirebase-81bf0",
    storageBucket: "learnwithfirebase-81bf0.appspot.com",
    messagingSenderId: "377457455627",
    appId: "1:377457455627:web:6c98efd05d786c509c4d0e"
  };

// initialze firebase in our project by passing in our environment variables to the `initializeApp` method
const app = initializeApp(firebaseConfig);

// initialze firebase authentication by passing in firebase `app` instance we delared on the line above
export const auth = getAuth(app);

// initialze firestore by passing in firebase `app` instance we delared
export const db = getFirestore(app);
