import React from 'react';
import styles from './buttonCustom.module.css'

const ButtonCustom = ({ primaryBtn, secondaryBtn, btnText, onClick, ...rest }) => {
  return (
    <button
      className={styles.buttonWrapper + ` ${primaryBtn ? styles.primaryBtnClass : secondaryBtn ? styles.secondaryBtnClass : ''}`
      }
      onClick={onClick}
    >
      {btnText}
    </button>
  )
}

export default ButtonCustom
