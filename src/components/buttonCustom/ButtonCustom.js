import React from 'react';
import styles from './buttonCustom.module.css'

const ButtonCustom = ({ primaryBtn, secondaryBtn, btnText, onClick, fullWidth, ...rest }) => {
  return (
    <button
      className={styles.buttonWrapper + ` ${primaryBtn ? styles.primaryBtnClass : secondaryBtn ? styles.secondaryBtnClass : ''}`
      }
      style={fullWidth ? { width: '100%' } : null}
      onClick={onClick}
    >
      {btnText}
    </button>
  )
}

export default ButtonCustom
