import {initializeApp} from "firebase/app";
import {FirebaseOptions} from "@firebase/app";

const firebaseConfig: FirebaseOptions = {
  projectId: "newron-waitlist",
  appId: "1:770416415056:web:1c368d1d56b5bbc0e4dc55",
  apiKey: "AIzaSyCxrJBin3meklAq0fzI39f2cq89JXCpUuo", // Auth / General Use
  authDomain: "newron-waitlist.firebaseapp.com", // Auth with popup/redirect
  databaseURL: "https://newron-waitlist.firebaseio.com", // Realtime Database
  storageBucket: "newron-waitlist.appspot.com", // Storage
  messagingSenderId: "770416415056", // Cloud Messaging
} as FirebaseOptions;

export default initializeApp(firebaseConfig);
