// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDhzn3-SjsRJUyt5UQp1175JjsomUQ_-wI",
    authDomain: "cars-doctors-407b8.firebaseapp.com",
    projectId: "cars-doctors-407b8",
    storageBucket: "cars-doctors-407b8.appspot.com",
    messagingSenderId: "16365061585",
    appId: "1:16365061585:web:900093bc06d2c07f404cf0",
    measurementId: "G-9JLWNQKWDF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;