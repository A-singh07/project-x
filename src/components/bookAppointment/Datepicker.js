import React, { useState, useEffect } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar, utils } from "react-modern-calendar-datepicker";
import styles from "./bookAppointmentStyle.module.css";
import Alert from "@mui/material/Alert";
import ButtonCustom from "../buttonCustom/ButtonCustom";

const Datepicker = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  const [medicalHist, setMedicalHist] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("userData") && JSON.parse(sessionStorage.getItem("userData")).appointments.length === 0)
      setMedicalHist(false)
  }, []);

  return (
    <>
      {
        !medicalHist &&
        <Alert variant="filled" severity="info" className={styles.detailsAlert}>
          You are yet to fill up your medical history details
      </Alert>
      }
      <div className={styles.dateSection}>
        <h2>Pick a date</h2>
        <div className={styles.calendarWrapper}>
          <Calendar
            value={selectedDay}
            onChange={setSelectedDay}
            shouldHighlightWeekends
            calendarClassName="responsive-calendar"
            minimumDate={utils().getToday()}
          />
        </div>
        <a href="/book-appointment">
          <div className={styles.calBtn}>
            <ButtonCustom primaryBtn btnText="Next" />
          </div>
        </a>
      </div>
    </>
  );
};

export default Datepicker;
