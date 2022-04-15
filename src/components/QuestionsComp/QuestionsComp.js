import React from 'react'
import styles from './QuestionsComp.module.css'
import Question from './Question'
import ButtonCustom from '../buttonCustom/ButtonCustom'


const QuestionsComp = () => {
  const questions = [
    {
      _id: "624a9eb95e20915c69c803ca",
      question: "What are your medical histories?",
      options: [
        "Hepatitis",
        "Anaemia",
        "Hyperlipidemia (high Cholesterol",
        "Anxiety",
        "Hypertension (high BP)",
        "Arthritis"
      ],
    },
    {
      _id: "624a9eb95e20915c69c504ca",
      question: "What are your medical histories?",
      options: [
        "Hepatitis",
        "Anaemia",
        "Hyperlipidemia (high Cholesterol",
        "Anxiety",
        "Hypertension (high BP)",
        "Arthritis"
      ],
    }
  ]
  return (
    <div className={styles.questionCont}>
      <h1>Medical Questions</h1>
      {
        questions.map((data, i) =>
          <Question
            data={data}
            key={i}
          />
        )
      }
      <div className={styles.btn_cont}>
        <ButtonCustom primaryBtn btnText="Skip" />
      </div>
    </div>
  )
}

export default QuestionsComp