import React from 'react';
import FeatureCard from './FeatureCard'
import styles from './featureSection.module.css';

const FeaturesSection = () => {

  const cardData = [
    {
      image: '',
      heading: 'Instant Video Consultation',
      subHeading: 'Connect with doctors in seconds'
    },
    {
      image: '',
      heading: 'Find doctor near you',
      subHeading: 'Lorem ipsumm ascmmonasd'
    },
    {
      image: '',
      heading: 'Order Medicines online',
      subHeading: 'Lorem ipsumm ascmmonasd'
    },
    {
      image: '',
      heading: 'Lab tests',
      subHeading: 'Lorem ipsumm ascmmonasd'
    },
  ]

  return (
    <section className={styles.sectionWrapper}>
      <div className={'mainLayout'}>
        <h3 className={styles.heading}>Features</h3>
        <div className={styles.featureCardsContainer}>
          {
            cardData.map((card, index) =>
              <FeatureCard
                heading={card.heading}
                subHeading={card.subHeading}
                image={card.image}
                key={index}
              />
            )
          }
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
