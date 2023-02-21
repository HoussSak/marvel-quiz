import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const config = {
  apiKey: "AIzaSyBC6YvGGmqXm_mSg7g7iDaTZNykofLT_IM",
  authDomain: "marvel-quiz-571f8.firebaseapp.com",
  projectId: "marvel-quiz-571f8",
  storageBucket: "marvel-quiz-571f8.appspot.com",
  messagingSenderId: "376353685200",
  appId: "1:376353685200:web:a0bdeb669b6a522da968d5"
};

const app = initializeApp(config);
export const auth = getAuth(app);


