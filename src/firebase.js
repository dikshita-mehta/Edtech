import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAAr75IOS-w9he13QxSWIUTu874FyHKW_M",
  authDomain: "evirt-backend.firebaseapp.com",
  projectId: "evirt-backend",
  storageBucket: "evirt-backend.appspot.com",
  messagingSenderId: "650789287874",
  appId: "1:650789287874:web:96378dd31acf17f937885b",
  measurementId: "G-3GMWK2LE7S",
};
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);
