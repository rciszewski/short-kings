import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../ components/sign-up-form/sign-up-form.component";
import SignInForm from "../../ components/sign-in-form/sign-in-form.component";
import "./sign-in.styles.scss";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className="signInComponentsContainer">
      <div>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <SignInForm />
      </div>
      <div>
        <h2>Don't have an account?</h2>
        <span>Sign up with your email and password</span>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignIn;
