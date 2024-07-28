
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut  } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  export class Firebase{
    constructor(){
  // Your web app's Firebase configuration
  this.firebaseConfig = {
    apiKey: "AIzaSyDEfH-BHBzXLtPzF2xxo-g09e4215JN250",
    authDomain: "spck-ba182.firebaseapp.com",
    projectId: "spck-ba182",
    storageBucket: "spck-ba182.appspot.com",
    messagingSenderId: "330748459048",
    appId: "1:330748459048:web:c10bc934d5382e5dcb9d1d"
  };

  // Initialize Firebase
  this.app = initializeApp(this.firebaseConfig);
  this.auth = getAuth(this.app)
}
async signup(email, password){
  return await createUserWithEmailAndPassword(this, auth, email, password)
}
async login(email, password){
  return await signInWithEmailAndPassword(auth, email, password)
}
async logout(){
  return await signOut(this.auth)
}
}