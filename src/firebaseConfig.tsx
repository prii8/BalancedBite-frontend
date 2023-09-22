import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyDBph619x59SVgrvByobJR7S8NA6GHXFuc",
  authDomain: "diet-plan-b8cb0.firebaseapp.com",
  projectId: "diet-plan-b8cb0",
  storageBucket: "diet-plan-b8cb0.appspot.com",
  messagingSenderId: "739482205441",
  appId: "1:739482205441:web:c463e0ebb249a6960baf00"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const messaging = getMessaging(firebaseApp);