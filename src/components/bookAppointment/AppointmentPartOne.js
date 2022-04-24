import React from 'react'
import SpecialitiesSection from '../specialities/SpecialitiesSection';
import Alert from '@mui/material/Alert'
import styles from './bookAppointmentStyle.module.css'
import { style } from '@mui/system';


const AppointmentPartOne = () => {

  return (
    <>
      {
        !(sessionStorage.getItem("loginData") && JSON.parse(sessionStorage.getItem("loginData")).token) &&
        <Alert variant="filled" severity="info" className={styles.detailsAlert}>Login first to book an appointment</Alert>
      }
      <SpecialitiesSection />
    </>
  )
}

export default AppointmentPartOne