import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithRedirect, 
  signInwithPopup, 
  GoogleAuthProvider,
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBwuKEauF1qXQ22XH6KDx4fD3NmOa4Ajn4",
  authDomain: "short-kings-db.firebaseapp.com",
  projectId: "short-kings-db",
  storageBucket: "short-kings-db.appspot.com",
  messagingSenderId: "279099580538",
  appId: "1:279099580538:web:c5e2eadc2ec7aaf5b6dbc3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInwithPopup(auth, provider);