import React from 'react';
import styles from './heroSection.module.css';
// import DoctorForm from '../forms/DoctorForm';
// import PatientForm from '../forms/PatientForm';
import RegisterArea from '../registerArea/RegisterArea';

const HeroSection = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.mainLayout}>
        <RegisterArea />
        {/* <DoctorForm />
        <PatientForm /> */}
      </div>
    </div>
  )
}

export default HeroSection
