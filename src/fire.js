import firebase from "firebase";
require('firebase/auth');



const firebaseConfig = {
    apiKey: "AIzaSyDSnHjJVI844PLRZhwkh5G7_Xu-lsQQ8is",
    authDomain: "login-f5f07.firebaseapp.com",
    projectId: "login-f5f07",
    storageBucket: "login-f5f07.appspot.com",
    messagingSenderId: "486670813084",
    appId: "1:486670813084:web:32fd82add835422a9eaa59"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
