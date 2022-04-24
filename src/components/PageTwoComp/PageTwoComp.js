import { useState, useEffect } from 'react';
import {
  NavLink,
  useNavigate
} from 'react-router-dom'
import styles from './PageTwoComp.module.css'
import Chip from '@mui/material/Chip';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import CloseIcon from '@mui/icons-material/Close';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';


const PageTwoComp = () => {

  const navigate = useNavigate();
  const handleClick = () => {
    // console.info('You clicked the Chip.');
  };
  const [open, setOpen] = useState(false);

  const clickFastlane = () => {
    setOpen(true);
    setTimeout(() => {
      navigate('/')
      sessionStorage.removeItem("userRegister")
    }, 2000);
  }


  const [userName, setUserName] = useState('User')

  useEffect(() => {
    sessionStorage.getItem("userRegister") &&
      setUserName(JSON.parse(sessionStorage.getItem("userRegister")).name)
  }, [])


  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Collapse in={open}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => setOpen(false)}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >

            <AlertTitle>Success</AlertTitle>
            Your request has been submitted. We'll connect with you shortly.
          </Alert>
        </Collapse>
      </Box>
      <div className={styles.MotherCont}>
        <div className={styles.MainCont}>
          <div className={styles.CallAmbulance}>
            <Chip label="Call Ambulance" className={styles.callAmb} onClick={handleClick} />
          </div>
          <p className={styles.userName}>Hi <span>{userName}</span>! </p>
          <p className={styles.description}>Choose any one path</p>
          <div className={styles.MainDiv}>
            <div className={styles.subDiv}>
              <h3 className={styles.ChildDiv} onClick={clickFastlane}>
                Fastlane
              </h3>
              <p className={styles.info}>
                <InfoOutlinedIcon
                  aria-label="close"
                  color="inherit"
                  size="small"
                >
                  <CloseIcon fontSize="inherit" />
                </InfoOutlinedIcon>
                <span>
                  To book an appoinment today. Our executives will reach out to you for booking confirmation.
                  No need for medical history.
                </span>
              </p>
            </div>
            <div className={styles.subDiv}>
              <NavLink to={'/questions'}>
                <h3 className={styles.ChildDiv} onClick={() => navigate('/questions')}>
                  General
                  </h3>
              </NavLink>
              <p className={styles.info}>
                <InfoOutlinedIcon
                  aria-label="close"
                  color="inherit"
                  size="small"
                >
                  <CloseIcon fontSize="inherit" />
                </InfoOutlinedIcon>
                <span>
                  To book an appointment at your selected date & time withing a week and longer.
                  You do need to fill out your medical history first.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PageTwoComp