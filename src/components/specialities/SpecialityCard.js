import React from 'react';
import styles from './specialities.module.css'

const SpecialityCard = ({ image, name, ...rest }) => {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureLogo}>
        <img src={image} alt="" />
      </div>
      <p className={styles.featureName}>
        {name}
      </p>
    </div>
  )
}

export default SpecialityCard
