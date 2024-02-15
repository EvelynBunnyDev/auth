// Import the functions from the SDKs
import { initializeApp } from "firebase/app"; // takes the configuration object and initializes your Firebase application instance
import { getAuth } from "firebase/auth"; // takes the initialized Firebase application instance and returns the authentication service for the app
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
auth.useEmulator("http://localhost:9099");