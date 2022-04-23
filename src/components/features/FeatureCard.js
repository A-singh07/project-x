import React from 'react';
import Rating from '@mui/material/Rating';
import styles from './featureSection.module.css';

const FeatureCard = ({ image, heading, subHeading, rating, onClick, ...rest }) => {

  return (
    <div className={styles.featureCard} onClick={onClick}>
      <div className={styles.cardImage}>
        <img src={image} alt="" />
      </div>
      <div className={styles.cardText}>
        <p className={styles.cardHeading}>{heading}</p>
        <p className={styles.cardSubHeading}>{subHeading}</p>
        {
          rating &&
          <div className={styles.ratingContainer}>
            <Rating
              name="doctor-rating"
              value={rating}
              precision={0.5}
              readOnly
            />
          </div>
        }
      </div>
    </div>
  )
}

export default FeatureCard
