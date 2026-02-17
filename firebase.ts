import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { IntakeFormData } from './types';

// TODO: Replace with your actual Firebase configuration
// For now, this is a placeholder. If specific env vars are not found, 
// the app will log to console instead of crashing, allowing UI development.
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "PLACEHOLDER_KEY",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "placeholder.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "placeholder-project",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "placeholder.appspot.com",
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID || "123456789",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:123456789:web:abcdef"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const submitIntakeRequest = async (data: IntakeFormData): Promise<boolean> => {
  try {
    if (firebaseConfig.apiKey === "PLACEHOLDER_KEY") {
      console.log("Firebase not configured. Mocking submission:", data);
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
      return true;
    }

    await addDoc(collection(db, 'intake_requests'), {
      ...data,
      timestamp: Date.now()
    });
    return true;
  } catch (error) {
    console.error("Error submitting intake request:", error);
    return false;
  }
};
