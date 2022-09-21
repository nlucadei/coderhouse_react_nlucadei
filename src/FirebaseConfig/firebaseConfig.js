import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZldVUgvV6gzdbRVygJdBZNKBh9kIRrV4",
  authDomain: "react-coder-nlucadei.firebaseapp.com",
  projectId: "react-coder-nlucadei",
  storageBucket: "react-coder-nlucadei.appspot.com",
  messagingSenderId: "1047469095278",
  appId: "1:1047469095278:web:9b0775e9f596542983697f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

 