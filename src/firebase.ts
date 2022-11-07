import firebase from "firebase/app";
import "firebase/database";

let config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DB_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_BUCKET_STORAGE,
  messagingSenderId: process.env.FIREBASE_MS_ID,
  appId: process.env.FIREBASE_APP_ID,
};

firebase.initializeApp(config);

export default firebase.database();