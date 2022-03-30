import React from 'react';
import styles from './heroSection.module.css';
import DoctorForm from '../forms/DoctorForm';
import PatientForm from '../forms/PatientForm';

const HeroSection = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.registrationContainer + ' mainLayout'}>
        <DoctorForm />
        <PatientForm />
      </div>
    </div>
  )
}

export default HeroSection
