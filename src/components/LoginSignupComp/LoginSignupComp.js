import { useState, useEffect } from 'react'
import {
  useLocation
} from 'react-router-dom';
import styles from './LoginSignupComp.module.css'
import ButtonCustom from '../buttonCustom/ButtonCustom'
import CreateAccountImg from '../../assets/CreateAccount.jpg'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

const LoginSignupComp = () => {

  const location = useLocation();
  const [toggleForm, setToggleForm] = useState(false);

  useEffect(() => {
    location.state === "login" && setToggleForm(true)
  }, [])

  return (
    <div className={'mainLayout'}>
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
