// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Sua configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBLdusAXKM93khs_2l7mTroCB0SuWK02yc",
  authDomain: "littacortinasepersianas.firebaseapp.com",
  projectId: "littacortinasepersianas",
  storageBucket: "littacortinasepersianas.firebasestorage.app",
  messagingSenderId: "687999041773",
  appId: "1:687999041773:web:eda57a896805204900cce4",
  measurementId: "G-YXX2528TLQ"
};

// Inicializando o Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
