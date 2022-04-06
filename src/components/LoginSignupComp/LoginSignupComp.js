import { useState } from 'react'
import styles from './LoginSignupComp.module.css'
import ButtonCustom from '../buttonCustom/ButtonCustom'
import CreateAccountImg from '../../assets/CreateAccount.jpg'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

const LoginSignupComp = () => {

  const [toggleForm, setToggleForm] = useState(false)

  return (
    <div className={styles.LSCont}>
      <div className={styles.LSHead}>
          <h2>{toggleForm ? "Login" : "Create Account"}</h2>
          <p>Already have an account? <a href="#" id="signin" onClick={() => setToggleForm(!toggleForm)}>{toggleForm ? "Sign Up" : "Sign In"}</a></p>
        </div>
      {
        toggleForm ? <LoginForm /> : <SignupForm />
      }
      {/* <ButtonCustom primaryBtn btnText={toggleForm ? "Click to SignUp" : "Click to Login"} onClick={() => setToggleForm(!toggleForm)} /> */}
      
    </div>
  )

}


export default LoginSignupComp
