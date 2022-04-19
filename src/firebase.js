// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDP77SqVMdaypQiNlsVXEJzmReBfqjXLmU",
  authDomain: "ecommerce-river.firebaseapp.com",
  projectId: "ecommerce-river",
  storageBucket: "ecommerce-river.appspot.com",
  messagingSenderId: "40716275015",
  appId: "1:40716275015:web:878dfe6f51013b1c0d1062"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db