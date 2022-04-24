import React from 'react'
import styles from './QuestionsComp.module.css'
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material'

const Question = ({ data, onChange }) => {
  return (
    <>
      <div className={styles.question}>
        <h5 style={{ marginBottom: '1rem' }}>{data.question}</h5>
        <FormGroup>
          {
            data.options.map((option, i) =>
              <FormControlLabel
                control={<Checkbox />}
                label={option}
                key={i}
                onChange={onChange}
              />
            )
          }
        </FormGroup>
      </div>
    </>
  )
}

export default Question