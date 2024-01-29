import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDlc1FS_NpC88-Sle_efDQ7O4MYfWMezuE",
  authDomain: "netflix-8d56f.firebaseapp.com",
  projectId: "netflix-8d56f",
  storageBucket: "netflix-8d56f.appspot.com",
  messagingSenderId: "193741441792",
  appId: "1:193741441792:web:e5aebb352fcbc64096c1e5",
  measurementId: "G-Y96K0M90ZC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app); // Use getStorage to get the storage service

export default storage;
//export default analytics;
