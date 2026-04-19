import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, child } from "firebase/database";
import type { PortfolioData } from "../types/portfolio";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export const fetchPortfolioData = async (): Promise<PortfolioData> => {
  const dbRef = ref(db);
  const snapshot = await get(child(dbRef, "portfolio"));

  if (!snapshot.exists()) {
    throw new Error("Portfolio data not found in Realtime Database");
  }
  return snapshot.val() as PortfolioData;
};
