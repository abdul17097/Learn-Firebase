import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: process.env.VITE_API_KEY,
  authDomain: process.env.VITE_API_KEY,
  databaseURL: process.env.VITE_DATABASE_URL,
  projectId: process.env.VITE_PROJECT_ID,
  storageBucket: process.env.VITE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_MESSAGEING_SENDER_ID,
  appId: process.env.VITE_APP_ID,
};

export const app = initializeApp(firebaseConfig);
