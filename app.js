// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFI6mzOvmlTmY-oDL23F4ddbzGLsNEJ38",
  authDomain: "acm-mitb-auth.firebaseapp.com",
  projectId: "acm-mitb-auth",
  storageBucket: "acm-mitb-auth.firebasestorage.app",
  messagingSenderId: "807128448012",
  appId: "1:807128448012:web:05c9e3f897291c7a710229",
  measurementId: "G-7FF6MME2WZ"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Add event listener for the Google Sign-In button
const googleSignInButton = document.querySelector(".google-signin-button");

googleSignInButton.addEventListener("click", () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  auth.signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      console.log('Signed in as:', user.displayName);
      updateUI(user);
    })
    .catch((error) => {
      console.error('Error during sign-in:', error.message);
    });
});

function updateUI(user) {
  // Hide the Google Sign-In button
  document.querySelector(".google-signin-container").style.display = "none";

  // Show the profile picture
  const profilePic = document.getElementById("user-profile-pic");
  profilePic.src = user.photoURL;

  // Display the profile picture
  document.querySelector(".user-profile-container").style.display = "block";
}

document.getElementById("sign-out-button").addEventListener("click", () => {
  auth.signOut()
    .then(() => {
      console.log("User signed out");
      // Reset the UI
      document.querySelector(".google-signin-container").style.display = "block";
      document.querySelector(".user-profile-container").style.display = "none";
    })
    .catch((error) => {
      console.error("Error signing out:", error.message);
    });
});
