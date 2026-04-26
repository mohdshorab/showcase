import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import type { PortfolioData } from "../types/portfolio";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function fetchPortfolioData(): Promise<PortfolioData> {
  const sections = [
    "personal",
    "about",
    "stats",
    "projects",
    "experience",
    "education",
    "expertise",
  ] as const;

  const snapshots = await Promise.all(
    sections.map((section) => getDoc(doc(db, "showcase", section))),
  );

  const data: Record<string, unknown> = {};

  snapshots.forEach((snap, i) => {
    if (!snap.exists()) throw new Error(`showcase/${sections[i]} not found`);

    const raw = snap.data();

    data[sections[i]] = raw[sections[i]] ?? raw;
  });

  return data as unknown as PortfolioData;
}
