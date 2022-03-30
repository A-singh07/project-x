import React from 'react';
import TextField from '@mui/material/TextField';
import ButtonCustom from '../buttonCustom/ButtonCustom';

import styles from './forms.module.css';


const PatientForm = () => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <p>Are you a Patient?</p>
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

export default PatientForm
