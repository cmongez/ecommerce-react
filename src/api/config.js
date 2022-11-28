// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBtNFkAOoJTT2QO-impYWRj2F7hK2_zUQE',
  authDomain: 'eccomerce-react-a10f1.firebaseapp.com',
  projectId: 'eccomerce-react-a10f1',
  storageBucket: 'eccomerce-react-a10f1.appspot.com',
  messagingSenderId: '351940855555',
  appId: '1:351940855555:web:f534c5017267c09066cb36',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
