import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBP5brgOMLv0HJil0Pm_H1VYQ3hAfMoOdU",
  authDomain: "invoice-app-vue-372d7.firebaseapp.com",
  projectId: "invoice-app-vue-372d7",
  storageBucket: "invoice-app-vue-372d7.appspot.com",
  messagingSenderId: "510034328401",
  appId: "1:510034328401:web:6061b0731ed9492ea57170"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();
