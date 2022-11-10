import { getDatabase} from "firebase/database";
import { initializeApp } from "firebase/app";

// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
    apiKey: "AIzaSyAtY9r6dI-SWMZH05duRV2iFbQ8iweiiIU",
    authDomain: "lovka-shop.firebaseapp.com",
    projectId: "lovka-shop",
    storageBucket: "lovka-shop.appspot.com",
    messagingSenderId: "420291487879",
    appId: "1:420291487879:web:05993563b69619f75cb022",
    databaseURL: "https://lovka-shop-default-rtdb.europe-west1.firebasedatabase.app/"
};


const app = initializeApp(firebaseConfig);
export const fireData = getDatabase(app);