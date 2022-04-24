import React from 'react';
import {
  NavLink
} from 'react-router-dom';
import styles from './specialities.module.css'

const SpecialityCard = ({ image, name, onClick, ...rest }) => {
  return (
    <div className={styles.featureCard} onClick={onClick}>
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
