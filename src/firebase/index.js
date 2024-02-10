import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDfyt8SiqKH0hPF1ndia2ZjfUtZpdPz1N8",
    authDomain: "womazingakh.firebaseapp.com",
    projectId: "womazingakh",
    storageBucket: "womazingakh.appspot.com",
    messagingSenderId: "102754046036",
    appId: "1:102754046036:web:5269cb151b089b166c9dc1"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
  const db = getFirestore(app);

export {db}