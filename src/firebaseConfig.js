import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyDijgrWXzW0XNH9r1ABnDbsZaC5HRXPcNo",
    authDomain: "react-firebase-auth-2024-c7e7d.firebaseapp.com",
    projectId: "react-firebase-auth-2024-c7e7d",
    storageBucket: "react-firebase-auth-2024-c7e7d.appspot.com",
    messagingSenderId: "631411001751",
    appId: "1:631411001751:web:91f7689cb9b434eead9cd2",
    measurementId: "G-7KDM6EM4CC"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



export default auth;