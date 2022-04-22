import React from 'react';
import styles from './footer.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faLocationDot, faLocationArrow } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
           <div className={styles.footerTop}>
        <div className={styles.brandDetail}>
        <div className={styles.brandLogo}><h1>DocIt</h1></div>  
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        <div className={styles.socialLinks}>
          <FontAwesomeIcon className={styles.brandIcon} icon={faTwitter} size="xl"/>
          <FontAwesomeIcon className={styles.brandIcon} icon={faFacebook} size="xl"/>
          <FontAwesomeIcon className={styles.brandIcon} icon={faLinkedin} size="xl"/>
          </div>
        </div>
        <div className={styles.forPatients}>
        <ul>
        <h3>For Patients</h3>
        <li>one link</li>
        <li>one link</li>
        <li>one link</li>
        <li>one link</li>
        <li>one link</li>
        </ul>
        </div>
        <div className={styles.forDoctors}>
        <ul>
        <h3>For Doctors</h3>
        <li>one link</li>
        <li>one link</li>
        <li>one link</li>
        <li>one link</li>
        <li>one link</li>
        </ul>
        </div>
        <div className={styles.contactUs}>
        <h2>Contact Us</h2>
        <p><FontAwesomeIcon className={styles.brandIcon} icon={faLocationArrow} />3556 Beech Street, San Francisco,California, CA 94108</p>
        <p><FontAwesomeIcon className={styles.brandIcon} icon={faPhone} />+1 315 369 5943</p>
        <p><FontAwesomeIcon className={styles.brandIcon} icon={faEnvelope} />doccure@example.com</p>
        </div>
      </div>
      <hr/>
      <div className={styles.footerBottom}>
      <p>© 2020 Doccure. All rights reserved.</p>
      <p><a>Terms and Conditions</a> | <a>Policy</a></p>
      </div>
    </div>
  )
}

export default Footer
