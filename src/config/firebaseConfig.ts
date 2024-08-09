// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import * as dotenv from "dotenv";
dotenv.config();
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

console.log('NEXT_PUBLIC_APIKEY',process.env.NEXT_PUBLIC_APIKEY);
console.log('NEXT_PUBLIC_AUTHDOMAIN',process.env.NEXT_PUBLIC_AUTHDOMAIN);
console.log('NEXT_PUBLIC_FIREBASE_PROJECT_ID',process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID);
console.log('NEXT_PUBLIC_STORAGEBUKET',process.env.NEXT_PUBLIC_STORAGEBUKET);
console.log('NEXT_PUBLIC_APPID',process.env.NEXT_PUBLIC_APPID);
console.log('NEXT_PUBLIC_MEASURERMENTID',process.env.NEXT_PUBLIC_MEASURERMENTID);


const firebaseConfig = {
  apiKey:process.env.NEXT_PUBLIC_APIKEY,
  authDomain:process.env.NEXT_PUBLIC_AUTHDOMAIN,
  projectId:process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket:process.env.NEXT_PUBLIC_STORAGEBUKET,
  messagingSenderId:process.env.NEXT_PUBLIC_MESSEGINGSENDERID,
  appId:process.env.NEXT_PUBLIC_APPID,
  measurementId:process.env.NEXT_PUBLIC_MEASURERMENTID
};


// const firebaseConfig = {
  // apiKey: "AIzaSyBuW_UAT7feQR20ITzOj-jHTLduXxEavyE",
  // authDomain: "yubu-welness.firebaseapp.com",
  // projectId: "yubu-welness",
  // storageBucket: "yubu-welness.appspot.com",
  // messagingSenderId: "384410820384",
  // appId: "1:384410820384:web:98099a1bd77216518b0145",
  // measurementId: "G-VYSK914MRG"
// };


// Initialize Firebase

export const provider:any = new GoogleAuthProvider();
export const app = initializeApp(firebaseConfig);
export const auth:any = getAuth(app);
// const analytics = getAnalytics(app);