import React from 'react';
import styles from './featureCard.module.css';

const FeatureCard = () => {
  return (
    <div className={styles.sectionWrapper}>
      <div className={'mainLayout'}>
        <h3 className={styles.heading}>Specialities</h3>
        <div className={styles.featureCardsContainer}>
          <div className={styles.featureCard}>
            <div className={styles.featureLogo}></div>
            <p className={styles.featureName}>Neurology</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureLogo}></div>
            <p className={styles.featureName}>Gynaecology</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureLogo}></div>
            <p className={styles.featureName}>Sexology</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureLogo}></div>
            <p className={styles.featureName}>General Physician</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureLogo}></div>
            <p className={styles.featureName}>Dermatology</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureLogo}></div>
            <p className={styles.featureName}>Psychiatry</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureLogo}></div>
            <p className={styles.featureName}>Gastroenterologist</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureLogo}></div>
            <p className={styles.featureName}>Paediatrics</p>
          </div>
          <div className={styles.featureCard}>
            <div className={styles.featureLogo}></div>
            <p className={styles.featureName}>Urology</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureCard
