import React from 'react'
import styles from './PageTwoComp.module.css'
import Chip from '@mui/material/Chip';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Box from '@mui/material/Box';


const PageTwoComp = () => {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };
  const [open, setOpen] = React.useState(false);
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
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >

            <AlertTitle>Success</AlertTitle>
            Your request has been submitted.
          </Alert>
        </Collapse>
      </Box>
      <div className={styles.MotherCont}>

        <div className={styles.MainCont}>
          <div className={styles.CallAmbulance}>
            <Chip label="Call Ambulance" color="error" onClick={handleClick} />
          </div>
          <div className={styles.MainDiv}>
            <div className={styles.ChildDiv}>
              <h2 style={{ cursor: "pointer" }} onClick={() => {
                setOpen(true);
              }}>Fastlane</h2>

            </div>
            <div className={styles.ChildDiv}>
              <a href="/questions"><h2>Normal</h2></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PageTwoComp