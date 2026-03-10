import { initializeApp } from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js"

import {
getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut
} from
"https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js"

const firebaseConfig = {

apiKey:"AIzaSyAkG5_0MAesDRi6paXsefDpw6WCyyIcXVs",
authDomain:"retail-cb7b9.firebaseapp.com",
projectId:"retail-cb7b9",
storageBucket:"retail-cb7b9.firebasestorage.app",
messagingSenderId:"1070740472515",
appId:"1:1070740472515:web:37a239305afa6acf5dd876"

}

const app=initializeApp(firebaseConfig)
const auth=getAuth(app)

window.signupUser=function(){

let email=document.getElementById("signupEmail").value
let pass=document.getElementById("signupPass").value

createUserWithEmailAndPassword(auth,email,pass)
.then(()=>window.location.href="login.html")
.catch(e=>alert(e.message))

}

window.loginUser=function(){

let email=document.getElementById("loginEmail").value
let pass=document.getElementById("loginPass").value

signInWithEmailAndPassword(auth,email,pass)
.then(()=>window.location.href="index.html")
.catch(e=>alert(e.message))

}

window.logoutUser=function(){

signOut(auth).then(()=>location.reload())

}