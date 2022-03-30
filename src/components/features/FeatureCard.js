import React from 'react';
import styles from './featureSection.module.css';

const FeatureCard = ({ image, heading, subHeading, ...rest }) => {
  return (
    <div className={styles.featureCard}>
      <div className={styles.cardImage}>
        <img src={image} alt="" />
      </div>
      <div className={styles.cardText}>
        <p className={styles.cardHeading}>{heading}</p>
        <p className={styles.cardSubHeading}>{subHeading}</p>
      </div>
    </div>
  )
}

export default FeatureCard
