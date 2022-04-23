import { useState } from 'react';
import styles from './bookAppointmentStyle.module.css'
import stylestwo from '../features/featureSection.module.css';
import FeatureCard from '../features/FeatureCard'
import ModalCustom from '../modalCustom/ModalCustom';
// import SpecialitiesSection from '../specialities/SpecialitiesSection';
import Alert from '@mui/material/Alert'


const BookAppointmentComp = () => {

  const [showModal, setShowModal] = useState(false);

  const cardDataTwo = [
    {
      image: 'https://doccure-react.dreamguystech.com/template/210634dca875b5880520c51b4577e6aa.jpg',
      heading: 'Dr. Sofia Brient',
      subHeading: 'MBBS, MD - General Medicine, DNB - Cardiology',
      rating: 4.5
    },
    {
      image: 'https://doccure-react.dreamguystech.com/template/9cdf0ed08dfc33e5e94b79128b127c36.jpg',
      heading: 'Dr.Katharine Berthold',
      subHeading: 'BDS, MDS - Oral & Maxillofacial Surgery',
      rating: 4
    },
    {
      image: 'https://doccure-react.dreamguystech.com/template/8195619cf7f1edf432b9d0c6e4552908.jpg',
      heading: 'Dr. Ruby Perrin',
      subHeading: 'MDS - Periodontology and Oral Implantology, BDS',
      rating: 4
    },
    {
      image: 'https://doccure-react.dreamguystech.com/template/bc4e8d916b11472fc8050d8ff94e9a9a.jpg',
      heading: 'Dr. Darren Elder',
      subHeading: 'MS - Orthopaedics, MBBS, M.Ch - Orthopaedics',
      rating: 3
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
                    rating={card.rating}
                    onClick={() => setShowModal(true)}
                    key={index}
                  />
                )
              }
            </div>
          </div>
        </section>

        <ModalCustom
          show={showModal}
          setShow={setShowModal}
          modalHeading={'Appointment Booked'}
          modalBody={`An appointment has been booked on 5th May 2022`}
          modalBtnText={'Okay'}
        />

      </div>
    </div>
  )
}
export default BookAppointmentComp