import { useEffect, useState, useContext } from 'react';
import {
  useNavigate
} from 'react-router-dom';
import styles from './QuestionsComp.module.css'
import Question from './Question'
import ButtonCustom from '../buttonCustom/ButtonCustom';
import Spinner from 'react-bootstrap/Spinner'
import { GeneralContext } from '../../context/GeneralContext';
import { getQuestion, updatePatient } from '../../services/general';


const QuestionsComp = () => {

  const { setUserData } = useContext(GeneralContext);

  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [questionAns, setQuestionAns] = useState([])
  const [btnLoader, setBtnLoader] = useState(false);

  useEffect(() => {
    let queAns = []

    getQuestion()
      .then((res) => {
        if (res) {
          setQuestions(res);

          // prepare an array of objects for onChange handler
          res.forEach((question) => {
            const temp = {
              question: question._id,
              answer: []
            }
            queAns.push(temp);
          });
          setQuestionAns(queAns);
        }
        setLoader(false)
      })
  }, [])

  // InComplete
  const handleChange = (e, data) => {

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnLoader(true)
    const userId = sessionStorage.getItem("userRegister") ?
      JSON.parse(sessionStorage.getItem("userRegister"))._id
      : sessionStorage.getItem("userData") ? JSON.parse(sessionStorage.getItem("userData"))._id : ""

    if (!userId) return

    updatePatient(userId, questionAns)
      .then((res) => {
        if (res) {
          sessionStorage.setItem("userData", JSON.stringify(res));
          setUserData(res);

          sessionStorage.removeItem("userRegister");
          alert("Medical history updated!")
          navigate("/")
        }
        setBtnLoader(false)
      })
  }

  return (
    <div className={styles.questionCont}>
      <h1>Medical Questions</h1>
      {
        loader ?
          <div className={styles.loaderContainer}>
            <Spinner animation="border" className={'customSpinner-primary'} />
          </div>
          :
          questions.length > 0 ?
            <>
              {
                questions.map((data, i) =>
                  <Question
                    data={data}
                    onChange={(e) => handleChange(e, data)}
                    key={i}
                  />
                )
              }
              <div className={styles.btn_cont}>
                <ButtonCustom primaryBtn btnText="Save" onClick={handleSubmit} loader={btnLoader} />
              </div>
            </> :
            <h6>No Questions to display</h6>
      }
    </div >
  )
}

export default QuestionsComp