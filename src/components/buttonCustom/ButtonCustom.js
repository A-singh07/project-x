import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
// import LoadingButton from '@mui/lab/LoadingButton';
import styles from './buttonCustom.module.css'

const ButtonCustom = ({
  primaryBtn,
  secondaryBtn,
  btnText,
  onClick,
  fullWidth,
  btnType,
  loader,
  ...rest }) => {

  return (
    <button
      className={styles.buttonWrapper + ` ${primaryBtn ? styles.primaryBtnClass : secondaryBtn ? styles.secondaryBtnClass : ''}`
      }
      style={fullWidth ? { width: '100%' } : null}
      onClick={onClick}
      type={btnType}
    >
      {
        loader ?
          <Spinner animation="border" size="sm" />
          : btnText
      }
    </button>
  )
}

export default ButtonCustom
