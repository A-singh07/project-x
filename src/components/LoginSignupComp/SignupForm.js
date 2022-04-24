import { useState } from 'react';
import {
  useNavigate
} from 'react-router-dom';
import styles from './LoginSignupComp.module.css'
import ButtonCustom from '../buttonCustom/ButtonCustom'
import CreateAccountImg from '../../assets/CreateAccount.jpg'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { userRegister } from '../../services/auth';

const SignupForm = () => {

  const navigate = useNavigate();

  const options = [
    {
      value: 'doctor',
      label: 'Doctor',
    },
    {
      value: 'patient',
      label: 'Patient',
    },
  ];

  const [loader, setLoader] = useState(false);
  const [option, setOption] = useState('patient');
  const [signupObject, setSignupObject] = useState({
    name: '',
    email: '',
    licenseNumber: '',
    speciality: '',
    password: '',
    cnfpassword: '',
    userType: option
  });

  const [incorrectPassword, setIncorrectPassword] = useState(false)

  const handleChange = (e) => {
    if (e.target.name === "userType") setOption(e.target.value)

    setSignupObject({
      ...signupObject,
      [e.target.name]: e.target.value
    });

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (signupObject.name !== '' && signupObject.email !== '' && signupObject.password !== '') {

      setLoader(true);

      if (signupObject.password !== signupObject.cnfpassword) {
        setIncorrectPassword(true)
        setLoader(false)
        return
      }

      let userObj;
      if (signupObject.userType === "patient") {
        userObj = {
          name: signupObject.name,
          email: signupObject.email,
          password: signupObject.password,
          userType: signupObject.userType
        }
      } else {
        userObj = signupObject;
      }

      userRegister(userObj)
        .then((res) => {
          if (res && res._id) {
            sessionStorage.setItem("userRegister", JSON.stringify(res))
            navigate('/page_two')
          }
          setLoader(false)
        })

    } else {
      alert("Fill out all the fields to continue!");
    }
  }

  return (
    <>
      <div className={styles.LSInner}>
        <div className={styles.LSLeft}>
          <form>
            <TextField
              style={{ marginBottom: "10px" }}
              fullWidth
              label="Full Name *"
              name='name'
              onChange={handleChange}
              value={signupObject.name}
            />
            <TextField
              style={{ marginBottom: "10px" }}
              fullWidth
              select
              label="User Type *"
              name='userType'
              onChange={handleChange}
              value={signupObject.userType}
            >
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              style={{ marginBottom: "10px" }}
              fullWidth
              label="Email *"
              name='email'
              onChange={handleChange}
              value={signupObject.email}
            />
            {
              option === 'doctor' &&
              <>
                <TextField
                  style={{ marginBottom: "10px" }}
                  fullWidth
                  label="License Number *"
                  name='licenseNumber'
                  onChange={handleChange}
                  value={signupObject.licenseNumber}
                />
                <TextField
                  style={{ marginBottom: "10px" }}
                  fullWidth
                  label="Speciality *"
                  name='speciality'
                  onChange={handleChange}
                  value={signupObject.speciality}
                />
              </>
            }
            <TextField
              style={{ marginBottom: "10px" }}
              fullWidth
              label="Password *"
              name='password'
              onChange={handleChange}
              value={signupObject.password}
              error={incorrectPassword}
              type="password"
            />
            <TextField
              style={{ marginBottom: "10px" }}
              fullWidth
              label="Confirm Password *"
              name='cnfpassword'
              onChange={handleChange}
              value={signupObject.cnfpassword}
              error={incorrectPassword}
              helperText={incorrectPassword && "Passwords do not match, please retype"}
              type="password"
            />
            <ButtonCustom
              primaryBtn
              btnText="Create Account"
              fullWidth
              btnType={'submit'}
              onClick={handleSubmit}
              loader={loader}
            />
          </form>
          <div className={styles.GSignUp}>Sign Up with Google</div>
        </div>
        <div className={styles.LSRight}>
          <img src={CreateAccountImg} alt="" />
        </div>
      </div>
    </>
  )
}

export default SignupForm