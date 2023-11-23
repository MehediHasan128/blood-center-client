import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_APIKEY,
  authDomain: import.meta.env.VITE_API_AUTHDOMAIN,
  projectId: import.meta.env.VITE_API_PROJECTID,
  storageBucket: import.meta.env.VITE_API_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_API_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_API_APPID
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;