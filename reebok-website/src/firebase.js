// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHO7-UiI5g1lHUkiUYCaEFvJd0VogfGlM",
  authDomain: "login--logout.firebaseapp.com",
  projectId: "login--logout",
  storageBucket: "login--logout.appspot.com",
  messagingSenderId: "171011545799",
  appId: "1:171011545799:web:972f4d2b861535bed8fce2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };