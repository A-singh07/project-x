import React from 'react';
import SpecialityCard from './SpecialityCard';
import styles from './specialities.module.css';

const SpecialitiesSection = () => {

  const specialitiesData = [
    {
      image: '',
      name: 'Neurology'
    },
    {
      image: '',
      name: 'Gynaecology'
    },
    {
      image: '',
      name: 'Sexology'
    },
    {
      image: '',
      name: 'General Physician'
    },
    {
      image: '',
      name: 'Dermatology'
    },
    {
      image: '',
      name: 'Psychiatry'
    },
    {
      image: '',
      name: 'Gastroenterologist'
    },
    {
      image: '',
      name: 'Paediatrics'
    },
    {
      image: '',
      name: 'Urology'
    },
  ]

  return (
    <section className={styles.sectionWrapper}>
      <div className={'mainLayout'}>
        <h3 className={styles.heading}>Browse by Specialities</h3>
        <p className={styles.subHeading}>Private online consultations with verified doctors in all specialities</p>
        <div className={styles.featureCardsContainer}>
          {
            specialitiesData.map((card, i) =>
              <SpecialityCard name={card.name} image={card.image} key={i} />
            )
          }
        </div>
      </div>
    </section>
  )
}

export default SpecialitiesSection
