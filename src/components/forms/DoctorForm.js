import React from 'react';
import TextField from '@mui/material/TextField';
import ButtonCustom from '../buttonCustom/ButtonCustom';
8a21~import styles from './forms.module.css';

const DoctorForm = () => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <p>Are you a Doctor?</p>
      </div>
      <form action="" className={styles.formBody}>
        <TextField id="standard-basic" label="Full Name" fullWidth className={styles.inputField} />
        <TextField id="standard-basic" label="Age" fullWidth className={styles.inputField} />
        <TextField id="standard-basic" label="Gender" fullWidth className={styles.inputField} />

        <ButtonCustom primaryBtn btnText="Register" />
      </form>
    </div>
  )
}
1
