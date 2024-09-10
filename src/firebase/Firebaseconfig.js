import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAD9BXIfSEtyPTTDQ0R-L3LE0AuNKfxA5c",
  authDomain: "ecommerce-react-jsx-f62d0.firebaseapp.com",
  projectId: "ecommerce-react-jsx-f62d0",
  storageBucket: "ecommerce-react-jsx-f62d0.appspot.com",
  messagingSenderId: "225509284620",
  appId: "1:225509284620:web:da87dc5a06a73984ea8729"
  };
                                                                 
const app = initializeApp(firebaseConfig);

export {app};