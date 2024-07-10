
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";




const firebaseConfig = {
  apiKey: "AIzaSyD_FYxEu38lYPF-xK_S6-MLIdT9amBVjDc",
  authDomain: "backend-spotify-be91b.firebaseapp.com",
  databaseURL: "https://backend-spotify-be91b-default-rtdb.firebaseio.com",
  projectId: "backend-spotify-be91b",
  storageBucket: "backend-spotify-be91b.appspot.com",
  messagingSenderId: "675755214583",
  appId: "1:675755214583:web:6bc37c7b18b82712bbf5f2",
  measurementId: "G-TTMNXXPBR6"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
