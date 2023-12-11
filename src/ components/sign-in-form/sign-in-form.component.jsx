import { useState } from "react";
import {
  signInWithGooglePopup,
  SignInUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../../ components/form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await SignInUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/invalid-email":
          alert("user not found");
          break;
        case "auth/invalid-login-credentials":
          alert("incorrect email or password");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form action="">
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="signInBtnContainer">
          <Button type="submit" onClick={handleSubmit}>
            Sign in
          </Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Sign in with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
