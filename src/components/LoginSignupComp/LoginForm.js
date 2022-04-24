import { useState, useContext } from 'react';
import {
  useNavigate
} from 'react-router-dom'
import styles from './LoginSignupComp.module.css'
import ButtonCustom from '../buttonCustom/ButtonCustom'
import CreateAccountImg from '../../assets/CreateAccount.jpg'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { userLogin } from '../../services/auth';
import { GeneralContext } from '../../context/GeneralContext';


const LoginForm = () => {

  const { setUserData } = useContext(GeneralContext)

  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  const [loginObject, setLoginObject] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setLoginObject({
      ...loginObject,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    if (Object.keys(loginObject) === '') {
      alert('Fill out all the fields to continue!');
      setLoader(false)
      return
    }

    userLogin(loginObject)
      .then((res) => {
        if (res && res._id) {
          sessionStorage.setItem("userData", JSON.stringify(res));
          setUserData(res);
          navigate('/')
        }
      })
  }

  return (

    <div className={styles.LSInner}>
      <div className={styles.LSLeft}>
        <form action="">
          <TextField
            style={{ marginBottom: "10px" }}
            fullWidth
            label="Email *"
            name="email"
            onChange={handleChange}
            value={loginObject.email}
          />
          <TextField
            style={{ marginBottom: "10px" }}
            fullWidth
            label="Password *"
            name="password"
            onChange={handleChange}
            value={loginObject.password}
          />
          <ButtonCustom
            primaryBtn
            btnText="Login"
            fullWidth
            btnType={'submit'}
            onClick={handleSubmit}
            loader={loader}
          />
        </form>
      </div>
      <div className={styles.LSRight}>
        <img src={CreateAccountImg} alt="" />
      </div>
    </div>
  )
}

export default LoginForm