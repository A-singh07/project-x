import { style } from '@mui/system';
import React from 'react';
import styles from './bookAppointmentStyle.module.css'
import FeaturesSection from '../features/FeaturesSection';
import SpecialitiesSection from '../specialities/SpecialitiesSection';
import Datepicker from './Datepicker';
import Alert from '@mui/material/Alert'



const BookAppointmentComp = () => {
  return (
    <div>
    <div>
 <Alert variant="filled" severity="info" className={styles.detailsAlert}>You are yet to fill up your medical history details</Alert>
      <SpecialitiesSection />
      <div className={styles.dateSection}>
      <h2>Pick a date</h2>
      <div className={styles.calendarWrapper}>
      <Datepicker/>
      </div>
      </div>


      <FeaturesSection />
    </div>
  </div>
  )
}
export default BookAppointmentComp