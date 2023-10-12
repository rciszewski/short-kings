import { useState } from "react"
import { createAuthUserWithEmailandPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',

}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const {displayName, email, password, confirmPassword} = formFields;

  console.log(formFields)

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!(password === confirmPassword)) return
    // check auth user with email and password
    // create user doc from what createAuthUserWithEmailandPassword
    
  }

  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormFields({
      ...formFields,
      [name]: value
    })
  }

return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form action="">

        <label htmlFor="">Display Name</label>
        <input type="text" required onChange={handleChange} name="displayName" value={displayName}/>
        
        <label htmlFor="">Email</label>
        <input type="email" required onChange={handleChange} name="email" value={email}/>

        <label htmlFor="">Password</label>
        <input type="password" required onChange={handleChange} name="password" value={password}/>

        <label htmlFor="">Confirm Password</label>
        <input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>

        <button type="submit" onClick={handleSubmit}>Sign up</button>
      </form>
      
    </div>
  )
}

export default SignUpForm