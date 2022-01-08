import { getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkSqtPuo2iFYaisRf7UZHTfUjj2Veg1uc",
  authDomain: "imoto-eswatini.firebaseapp.com",
  projectId: "imoto-eswatini",
  storageBucket: "imoto-eswatini.appspot.com",
  messagingSenderId: "256922903532",
  appId: "1:256922903532:web:4b5a3e07821663e4b0d6c9",
  measurementId: "G-KTTQDEQQ28",
};

initializeApp(firebaseConfig);
const app = getApp();
const auth = getAuth(app);
const firestore = getFirestore(app);

export { firebaseConfig, auth, firestore };
