import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbW1aO5PK7vYNT4GUYOrhBsQP14C1l8HQ",
  authDomain: "warm-choir-438601-b4.firebaseapp.com",
  projectId: "warm-choir-438601-b4",
  storageBucket: "warm-choir-438601-b4.firebasestorage.app",
  messagingSenderId: "578578364483",
  appId: "1:578578364483:web:f83890a7e3870fbec7fcf6",
  measurementId: "G-H15MKR0T2J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app)

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getStorage } from "firebase/storage";

// const firebaseConfig = {
//   apiKey: "AIzaSyCbW1aO5PK7vYNT4GUYOrhBsQP14C1l8HQ",
//   authDomain: "warm-choir-438601-b4.firebaseapp.com",
//   projectId: "warm-choir-438601-b4",
//   storageBucket: "warm-choir-438601-b4.firebasestorage.app",
//   messagingSenderId: "578578364483",
//   appId: "1:578578364483:web:f83890a7e3870fbec7fcf6",
//   measurementId: "G-H15MKR0T2J"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const storage = storage();
