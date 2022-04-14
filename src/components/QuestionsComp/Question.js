import React from 'react'
import styles from './QuestionsComp.module.css'
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material'

const Question = ({ data }) => {
  return (
    <div>
      <div className={styles.question}>
        <p>What Are Your Medical Histories?</p>
        <FormGroup>
          {
            data.options.map((option, i) =>
              <FormControlLabel control={<Checkbox />} label={option} key={i} />

            )
          }
        </FormGroup>
      </div>
    </div>
  )
}

export default Question