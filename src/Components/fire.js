// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBAM_dpcU09AjyRhDQUEWh8wlLTumtdh4",
  authDomain: "trading-ac980.firebaseapp.com",
  projectId: "trading-ac980",
  storageBucket: "trading-ac980.appspot.com",
  messagingSenderId: "983853877666",
  appId: "1:983853877666:web:0607966854727cd46f4afb"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;