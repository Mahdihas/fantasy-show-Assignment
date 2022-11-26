// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsk7W3A5DU1QrKLhF6jrPU9ya_J5y0rwo",
  authDomain: "fantasy-show.firebaseapp.com",
  projectId: "fantasy-show",
  storageBucket: "fantasy-show.appspot.com",
  messagingSenderId: "753091210248",
  appId: "1:753091210248:web:0c93ffbf7ada1774ce75bd",
  measurementId: "G-5R2Y45DF7P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;