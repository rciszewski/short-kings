
import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword,

} from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBwuKEauF1qXQ22XH6KDx4fD3NmOa4Ajn4",
  authDomain: "short-kings-db.firebaseapp.com",
  projectId: "short-kings-db",
  storageBucket: "short-kings-db.appspot.com",
  messagingSenderId: "279099580538",
  appId: "1:279099580538:web:c5e2eadc2ec7aaf5b6dbc3"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  if(!userAuth) return 
  
  const userDocRef = doc(db, 'users', userAuth.uid )

  const userSnapshot = await getDoc(userDocRef)

  // Check to see if snapshop exists
  if(!userSnapshot.exists()){
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email, 
        createdAt,
      })
    } catch (error){
      console.log('error in createUserDocumentFromAuth', error)
    }    
  }

  return userDocRef;
}

export const createAuthUserWithEmailandPassword = async (email, password) => {
  if(!email || !password) return;

  createAuthUserWithEmailandPassword(auth, email, password)
}