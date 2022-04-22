
import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar, utils } from "react-modern-calendar-datepicker";
import styles from './bookAppointmentStyle.module.css'

const Datepicker = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  return (
    <div>     <Calendar
    value={selectedDay}
    onChange={setSelectedDay}
    shouldHighlightWeekends
    calendarClassName="responsive-calendar" 
    minimumDate={utils().getToday()}
  /></div>
  )
}

export default Datepicker