
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAzHezxD5fmyL7iZ70DtAfUnFP1_W6WwZo",
  authDomain: "ezems-d4aa3.firebaseapp.com",
  projectId: "ezems-d4aa3",
  storageBucket: "ezems-d4aa3.appspot.com",
  messagingSenderId: "937681075932",
  appId: "1:937681075932:web:e7850723c3b033742ffe19",
  measurementId: "G-2RFLF9S2QX"
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

const submitButton = document.getElementById("submit");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const main = document.getElementById("main");
const createacct = document.getElementById("create-acct");

const signupEmailIn = document.getElementById("email-signup");
const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
const signupPasswordIn = document.getElementById("password-signup");
const confirmSignUpPasswordIn = document.getElementById(
  "confirm-password-signup"
);


const createacctbtn = document.getElementById("create-acct-btn");
const returnBtn = document.getElementById("return-btn");
const signupButton = document.getElementById("sign-up");

var email,
  password,
  signupEmail,
  signupPassword,
  confirmSignupEmail,
  confirmSignUpPassword;

createacctbtn.addEventListener("click", function () {
  var isVerified = true;

  signupEmail = signupEmailIn.value;
  confirmSignupEmail = confirmSignupEmailIn.value;
  if (signupEmail != confirmSignupEmail) {
    window.alert("Email fields do not match. Try again.");
    isVerified = false;
  }

  signupPassword = signupPasswordIn.value;
  confirmSignUpPassword = confirmSignUpPasswordIn.value;
  if (signupPassword != confirmSignUpPassword) {
    window.alert("Password fields do not match. Try again.");
    isVerified = false;
  }

  if (
    signupEmail == null ||
    confirmSignupEmail == null ||
    signupPassword == null ||
    confirmSignUpPassword == null
  ) {
    window.alert("Please fill out all required fields.");
    isVerified = false;
  }

  if (isVerified) {
    createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
      .then((userCredential) => {
        
        const user = userCredential.user;
      
        window.alert("Success! Account created.");
        window.location = "./services.html";
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      
        window.alert("Error occurred. Try again.");
        window.alert(errorMessage);
      });
  }
});

submitButton.addEventListener("click", function () {
  email = emailInput.value;
  console.log(email);
  password = passwordInput.value;
  console.log(password);

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
     
      const user = userCredential.user;

      window.alert("Success! Welcome back!");
      window.location = "./services.html";

     
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      window.alert("Error occurred. Try again.");
    });
});



signupButton.addEventListener("click", () => {
  main.style.display = "none";
  createacct.style.display = "block";
});

returnBtn.addEventListener("click", function () {
  main.style.display = "block";
  createacct.style.display = "none";
});
