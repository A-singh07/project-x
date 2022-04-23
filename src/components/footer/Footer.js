import React from 'react';
import styles from './footer.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import {
  faPhone,
  faEnvelope,
  faLocationArrow
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.innerContainer + ' mainLayout'}>
        <div className={styles.footerTop}>
          <div className={styles.brandDetail}>
            <div className={styles.brandLogo}><h2>{process.env.REACT_APP_NAME}</h2></div>
            <p>I care for You</p>
            <div className={styles.socialLinks}>
              <FontAwesomeIcon className={styles.brandIcon} icon={faTwitter} size="xl" />
              <FontAwesomeIcon className={styles.brandIcon} icon={faFacebook} size="xl" />
              <FontAwesomeIcon className={styles.brandIcon} icon={faLinkedin} size="xl" />
            </div>
          </div>
          <div className={styles.forPatients}>
            <ul>
              <h4>For Patients</h4>
              <li>one link</li>
              <li>one link</li>
              <li>one link</li>
            </ul>
          </div>
          <div className={styles.forDoctors}>
            <ul>
              <h4>For Doctors</h4>
              <li>one link</li>
              <li>one link</li>
            </ul>
          </div>
          <div className={styles.contactUs}>
            <h4>Contact Us</h4>
            <p><FontAwesomeIcon className={styles.brandIcon} icon={faLocationArrow} />KIIT University, Bhubaneswar</p>
            <p><FontAwesomeIcon className={styles.brandIcon} icon={faPhone} />+911234567890</p>
            <p><FontAwesomeIcon className={styles.brandIcon} icon={faEnvelope} />icu360@example.com</p>
          </div>
        </div>
        <hr />
        <div className={styles.footerBottom}>
          <p>© 2020 Doccure. All rights reserved.</p>
          <p>Terms and Conditions | Policy</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
