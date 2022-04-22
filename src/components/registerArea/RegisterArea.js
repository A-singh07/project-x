import { SubtitlesOutlined } from '@mui/icons-material';
import React from 'react';
import styles from './registerArea.module.css';
const RegisterArea = () => {
  return (
    <div className={styles.registerAreaMother}>
      <div className={styles.DocRegisterArea}>
        <h3>ARE YOU A DOCTOR?</h3>
        <p>The service allows you to get maximum visibility online and to manage appointments and contacts coming from the site, in a simple and fast way.</p>
        <button>Register Now</button>
      </div>
      <div className={styles.PatientRegisterArea}>
        <h3>ARE YOU A PATIENT</h3>
        <p>The service allows you to get maximum visibility online and to manage appointments and contacts coming from the site, in a simple and fast way.</p>
        <button>Register Now</button>
      </div>
    </div>
  )
}

export default RegisterArea