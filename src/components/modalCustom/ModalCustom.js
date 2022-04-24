import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ButtonCustom from '../buttonCustom/ButtonCustom';

import checkGreen from '../../assets/greenCheck.jpg'
import styles from './modalCustom.module.css'

const ModalCustom = ({ show, setShow, modalHeading, modalBody, modalBtnText, onClose }) => {

  // const [show, setShow] = useState(false);

  return (
    <Modal show={show} onExited={onClose} centered className={styles.modalWrapper}>
      <Modal.Header closeButton className={styles.modalHeading}>
        <Modal.Title>{modalHeading}</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.modalBody}>
        <div className={styles.iconContainer}>
          <img src={checkGreen} alt="check mark" />
        </div>
        <div className={styles.textContainer}>
          {modalBody}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <ButtonCustom primaryBtn btnText={modalBtnText} onClick={() => setShow(false)} />
      </Modal.Footer>
    </Modal>
  )
}

export default ModalCustom
