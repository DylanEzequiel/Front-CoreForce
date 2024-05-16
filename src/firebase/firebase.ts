
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getStorage, ref, uploadBytes, getDownloadURL, getBytes} from 'firebase/storage';
import {getFirestore, collection, addDoc, getDoc, query, where, setDoc, deleteDoc, doc} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRE_APIKEY,
  authDomain: import.meta.env.VITE_FIRE_DOMIAN,
  projectId: import.meta.env.VITE_FIRE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIRE_STORAGE,
  messagingSenderId: import.meta.env.VITE_FIRE_MESSAGING,
  appId: import.meta.env.VITE_FIRE_APPID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const store = getStorage(app);


//Saber si un usuario existe en firebase esta hacerlo despues con en postgres con firebase admin, funciona en base a referencia
export const userExist = async( uid: string ): Promise<boolean> => {
  const docRef = doc(db, 'users', uid);
  const res = await getDoc(docRef)
  console.log(res);
  return res.exists()
}