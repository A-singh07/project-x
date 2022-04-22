
import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar, utils } from "react-modern-calendar-datepicker";
import styles from './bookAppointmentStyle.module.css'
import Alert from '@mui/material/Alert'
import ButtonCustom from "../buttonCustom/ButtonCustom";

const Datepicker = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  return (
    <div>    
            <Alert variant="filled" severity="info" className={styles.detailsAlert}>You are yet to fill up your medical history details</Alert>
       <div className={styles.dateSection}>
      <h2>Pick a date</h2>
      <div className={styles.calendarWrapper}>

       <Calendar
    value={selectedDay}
    onChange={setSelectedDay}
    shouldHighlightWeekends
    calendarClassName="responsive-calendar" 
    minimumDate={utils().getToday()}
  /></div>  <a href="/book-appointment"><div className={styles.calBtn}>
  <ButtonCustom 
  primaryBtn
  btnText="Next"
  /></div></a></div>
  




  </div>
  )
}

export default Datepicker