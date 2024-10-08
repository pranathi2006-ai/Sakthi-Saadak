import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCnKdlypGWNiM9bFuXTLyQY6y8ogxVl-Fc",
    authDomain: "sakthi-saadhak.firebaseapp.com",
    projectId: "sakthi-saadhak",
    storageBucket: "sakthi-saadhak.appspot.com",
    messagingSenderId: "1062042370266",
    appId: "1:1062042370266:web:e61755acdf58f2cd4f25e3",
    measurementId: "G-TTLS5K3L8K",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

