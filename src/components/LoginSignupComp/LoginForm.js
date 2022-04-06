import React from 'react'
import styles from './LoginSignupComp.module.css'
import ButtonCustom from '../buttonCustom/ButtonCustom'
import CreateAccountImg from '../../assets/CreateAccount.jpg'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react'

const LoginForm = () => {
  const options = [
    {
      value: 'Doctor',
      label: 'Doctor',
    },
    {
      value: 'Patient',
      label: 'Patient',
    },
  ];

  const [option, setOption] = React.useState('Doctor');

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  return (

    <div className={styles.LSInner}>
      <div className={styles.LSLeft}>
        {/* <div id={styles.names} className={styles.NameInputCont}>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div> */}
        <form action="">
          <TextField
            style={{ marginBottom: "10px" }}
            fullWidth
            id="outlined-select-currency"
            select
            label="Select"
            value={option}
            onChange={handleChange}
          // helperText="Please select your currency"
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField style={{ marginBottom: "10px" }} id="standard-basic" label="Email" fullWidth />
          <TextField style={{ marginBottom: "10px" }} id="standard-basic" label="Password" fullWidth />
        </form>
        {/* <input id={styles.CPass} type="text" placeholder="Confirm Password" /> */}
        <div className={styles.LBtn}>
          <ButtonCustom primaryBtn btnText="Login" />
        </div>
        {/* <div className={styles.GSignUp}>Sign Up with Google</div> */}
      </div>
      <div className={styles.LSRight}>
        <img src={CreateAccountImg} alt="" />
      </div>
    </div>
  )
}

export default LoginForm