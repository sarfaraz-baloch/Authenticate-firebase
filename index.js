//   // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
//   import { getAuth , onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
//   // import { getAuth } from "firebase/auth";


// // const auth = getAuth();



//   // import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

//   const firebaseConfig = {
//     apiKey: "AIzaSyBvI918oa6xOXlDmvQP9PKvmv65BVGJ6pw",
//     authDomain: "weather-api-ae2a8.firebaseapp.com",
//     projectId: "weather-api-ae2a8",
//     storageBucket: "weather-api-ae2a8.appspot.com",
//     messagingSenderId: "298678795143",
//     appId: "1:298678795143:web:49f6748f54a7b0105c3122",
//     measurementId: "G-2VDTYZ62T7"
//   };

//   const email = document.getElementById('email');
//   const password = document.getElementById('password');
//   const signUp = document.getElementById('signUp');
//   const email_2 = document.getElementById('email_2');
//   const password_2 = document.getElementById('password_2');
//   const signIn = document.getElementById('signIn');


//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
//   // console.log(app);


//   // console.log(auth);
  
  
  
//   const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/auth.user
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });


// signUp.addEventListener('click', createdSingUppage);

// function createdSingUppage() {
//   createUserWithEmailAndPassword(auth, email.value, password.value)

//     .then((userCredential) => {
//       // Signed up 
//       const user = userCredential.user;
//       console.log(user);
//     })

//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;

//       console.log(errorMessage);
//       // ..
//     });
// }


  

  // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword ,  signOut ,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvI918oa6xOXlDmvQP9PKvmv65BVGJ6pw",
  authDomain: "weather-api-ae2a8.firebaseapp.com",
  projectId: "weather-api-ae2a8",
  storageBucket: "weather-api-ae2a8.appspot.com",
  messagingSenderId: "298678795143",
  appId: "1:298678795143:web:49f6748f54a7b0105c3122",
  measurementId: "G-2VDTYZ62T7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Get DOM elements
const email = document.getElementById('email');
const password = document.getElementById('password');
const signUp = document.getElementById('signUp');
const email_2 = document.getElementById('email_2');
const password_2 = document.getElementById('password_2');
const signIn = document.getElementById('signIn');

const auth_container = document.getElementById('auth_container');
const user_container = document.getElementById('user_container');
const user_email = document.getElementById('user_email');
const Logout = document.getElementById('Logout');

// Auth state observer
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(`User signed in: ${uid}`);

    auth_container.style.display = 'none';
    user_container.style.display = 'block';
    user_email.innerHTML = `User email: ${user.email}`;
  } else {
    console.log("User signed out");

    auth_container.style.display = 'block';
    user_container.style.display = 'none';

  }
});

// Sign up event listener
signUp.addEventListener('click', createdSingUppage);
signIn.addEventListener('click', signInToApp);
Logout.addEventListener('click', logout)


function createdSingUppage() {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      alert(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
}


function signInToApp() {
  
  signInWithEmailAndPassword(auth, email_2.value, password_2.value)
    .then((userCredential) => {
      const user = userCredential.user;
      alert('user');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });

  // console.log(email_2.value );
  // console.log(password_2.value );
}


function logout() {
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}