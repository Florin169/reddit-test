import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBzgvpcRzfi9-X1fmWix9M41Eaw5FA8jlw",
  authDomain: "reddit-practice-2.firebaseapp.com",
  projectId: "reddit-practice-2",
  storageBucket: "reddit-practice-2.appspot.com",
  messagingSenderId: "898022409684",
  appId: "1:898022409684:web:d2ba4e226b7d344368c241",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
