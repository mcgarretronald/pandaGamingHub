// Import Firebase SDK
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhUfsCk_fNqI3TQbnYupqh5IHcril0Y60",
  authDomain: "panda-gaming-hub.firebaseapp.com",
  databaseURL: "https://panda-gaming-hub-default-rtdb.firebaseio.com/",
  projectId: "panda-gaming-hub",
  storageBucket: "panda-gaming-hub.appspot.com",
  messagingSenderId: "533802180423",
  appId: "1:533802180423:web:565054aac4455d06383662",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
const database = getDatabase(app);

export { database };
