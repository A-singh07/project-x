import { usestate } from 'react'
import styles from './LoginSignupComp.module.css'
import ButtonCustom from '../buttonCustom/ButtonCustom'
import CreateAccountImg from '../../assets/CreateAccount.jpg'
import LoginForm from './LoginForm'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react'

const SignupForm = () => {
  // const [toggleForm, setToggleForm] = useState(false)

  // {
  //   toggleForm ? <LoginForm /> : <SignupForm />
  // }
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

  const [option, setOption] = useState('doctor');

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  return (
    <div>
      {/* <div className={styles.LSHead}>
          <h2>{toggleForm ? "Login" : "Create Account"}</h2>
          <p>Already have an account? <a href="#" id="signin" onClick={() => setToggleForm(!toggleForm)}>{toggleForm ? "Sign Up" : "Sign In"}</a></p>
        </div> */}
      <div className={styles.LSInner}>
        <div className={styles.LSLeft}>
          <form action="">
            <TextField style={{ marginBottom: "10px" }} id="standard-basic" label="Full Name" fullWidth />
            {/* <select name="" id="">
              <option id={styles.disabled} value="Select" disabled selected hidden>Select</option>
              <option value="Doctor">Doctor</option>
              <option value="Patient">Patient</option>
            </select> */}
            <TextField
              style={{ marginBottom: "10px" }}
              fullWidth
              id="outlined-select-user"
              select
              label="Select"
              value={option}
              onChange={handleChange}
            >
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField style={{ marginBottom: "10px" }} id="standard-basic" label="Email" fullWidth />
            {
              option === 'doctor' &&
              <>
                <TextField style={{ marginBottom: "10px" }} id="standard-basic" label="License Number" fullWidth />
                <TextField style={{ marginBottom: "10px" }} id="standard-basic" label="Speciality" fullWidth />
              </>
            }
            <TextField style={{ marginBottom: "10px" }} id="standard-basic" label="Password" fullWidth />
            <TextField style={{ marginBottom: "10px" }} id="standard-basic" label="Confirm Password" fullWidth />
          </form>
          <div className={styles.CABtn}>
            <ButtonCustom primaryBtn btnText="Create Account" fullWidth />
          </div>
          <div className={styles.GSignUp}>Sign Up with Google</div>
        </div>
        <div className={styles.LSRight}>
          <img src={CreateAccountImg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default SignupForm