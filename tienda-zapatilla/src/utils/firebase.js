import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDMCTOHap5oY5IkmufiSWRREFPZv9VpSko",
    authDomain: "tienda-virtual-af91d.firebaseapp.com",
    projectId: "tienda-virtual-af91d",
    storageBucket: "tienda-virtual-af91d.appspot.com",
    messagingSenderId: "595181821819",
    appId: "1:595181821819:web:26af7a3e06558b925b27de"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)