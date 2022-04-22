import { style } from '@mui/system';
import React from 'react';
import styles from './bookAppointmentStyle.module.css'
import stylestwo from '../features/featureSection.module.css';
import FeatureCard from '../features/FeatureCard'
import SpecialitiesSection from '../specialities/SpecialitiesSection';
import Alert from '@mui/material/Alert'




const BookAppointmentComp = () => {

  const cardDataTwo = [
    {
      image: '',
      heading: 'Doctor 1',
      subHeading: 'Connect with doctors in seconds'
    },
    {
      image: '',
      heading: 'Doctor 2',
      subHeading: 'Lorem ipsumm ascmmonasd'
    },
    {
      image: '',
      heading: 'Doctor 3',
      subHeading: 'Lorem ipsumm ascmmonasd'
    },
    {
      image: '',
      heading: 'Doctor 4',
      subHeading: 'Lorem ipsumm ascmmonasd'
    },
  ]

  return (
    <div>
    <div>
      <Alert variant="filled" severity="info" className={styles.detailsAlert}>You are yet to fill up your medical history details</Alert>
     <section className={stylestwo.sectionWrapper}>
      <div className={'mainLayout'}>
        <h3 className={stylestwo.heading}>Select Doctor</h3>
        <div className={stylestwo.featureCardsContainer}>
          {
            cardDataTwo.map((card, index) =>
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


    </div>
  </div>
  )
}
export default BookAppointmentComp