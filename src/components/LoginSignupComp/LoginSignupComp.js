import { useState } from 'react'
import styles from './LoginSignupComp.module.css'
import ButtonCustom from '../buttonCustom/ButtonCustom'
import CreateAccountImg from '../../assets/CreateAccount.jpg'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

const LoginSignupComp = () => {

  const [toggleForm, setToggleForm] = useState(false)

  return (
    <div className={' mainLayout'}>
      <div className={styles.LSHead}>
        <h2>{toggleForm ? "Login" : "Create Account"}</h2>
        <div className={styles.message}>
          {
            toggleForm ? "Don't have an account?" : "Already have an account?"
          }
          <p onClick={() => setToggleForm(!toggleForm)}>&nbsp;<u>{toggleForm ? 'Sign up' : 'Login'}</u></p>
        </div>
      </div>
      {
        toggleForm ? <LoginForm /> : <SignupForm />
      }
    </div>
  )

}


export default LoginSignupComp
