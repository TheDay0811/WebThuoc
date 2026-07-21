// firebase-config.js (hoặc firebaseConfig.js)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
    getFirestore,
    doc, getDoc, setDoc, updateDoc,
    collection, query, where, getDocs,
    writeBatch, addDoc, deleteDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Cấu hình Firebase của bạn
const firebaseConfig = {
    apiKey: "AIzaSyDii-TJcXX7Ms4sj01okRUVGAj5N9PaDUo",
    authDomain: "webthuoc-1cfc7.firebaseapp.com",
    projectId: "webthuoc-1cfc7",
    storageBucket: "webthuoc-1cfc7.firebasestorage.app",
    messagingSenderId: "578958504976",
    appId: "1:578958504976:web:d2e9631196e7976efbc695",
    measurementId: "G-V3NNH7KDJJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Export các hàm cần dùng
export {
    auth,
    db,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider,
    onAuthStateChanged,
    signOut,
    doc,
    getDoc,
    setDoc,
    updateDoc,
    collection,
    query,
    where,
    getDocs,
    writeBatch,
    addDoc,
    deleteDoc
};