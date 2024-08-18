// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
export class Firebase {
  constructor() {
    // Your web app's Firebase configuration
    this.firebaseConfig = {
      apiKey: "AIzaSyCjx-EKiluf6KJgVlCn1RGEOfAWjIloIbQ",
      authDomain: "webcuabao.firebaseapp.com",
      projectId: "webcuabao",
      storageBucket: "webcuabao.appspot.com",
      messagingSenderId: "1007186685456",
      appId: "1:1007186685456:web:99515589a0bffd6c8fa495",
      measurementId: "G-T4CPEWJ5B0",
    };

    // Initialize Firebase
    this.app = initializeApp(this.firebaseConfig);
    this.auth = getAuth(this.app);
  }
  async signup(email, password) {
    return await createUserWithEmailAndPassword(this.auth, email, password);
  }
  async login(email, password) {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }
  async logout() {
    return await signOut(this.auth);
  }
}
