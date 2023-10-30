import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwuKEauF1qXQ22XH6KDx4fD3NmOa4Ajn4",
  authDomain: "short-kings-db.firebaseapp.com",
  projectId: "short-kings-db",
  storageBucket: "short-kings-db.appspot.com",
  messagingSenderId: "279099580538",
  appId: "1:279099580538:web:c5e2eadc2ec7aaf5b6dbc3",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const SignInUserWithEmailAndPassword = async (email, password) => {
  console.log(email)
  if (!email || !password) return;
  try {
    return await signInWithEmailAndPassword(auth, email, password);
    // Signed in

    // ...
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(
      `'Error in signIn -  Code: ${errorCode} - Message: ${errorMessage}`
    );
  }
};

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  // Check to see if snapshop exists
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error in createUserDocumentFromAuth", error);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailandPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
