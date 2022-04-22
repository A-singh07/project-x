import React from 'react'
import SpecialitiesSection from '../specialities/SpecialitiesSection';
import Alert from '@mui/material/Alert'
import styles from './bookAppointmentStyle.module.css'
import { style } from '@mui/system';
const AppointmentPartOne = () => {
  return (
    
    <div>
      <Alert variant="filled" severity="info" className={styles.detailsAlert}>You are yet to fill up your medical history details</Alert>
      <SpecialitiesSection />
      </div>
  )
}

export default AppointmentPartOne