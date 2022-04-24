import axios from 'axios';


// Update patient details
export const updatePatient = async (userId, data) => {
  let response;

  await axios.put(`/patient/${userId}`, data)
    .then((res) => {
      response = res.data
    })
    .catch(err => console.log("Error in updating patient details", err));

  return response;
}

// Get patient details
export const getPatientDetails = async (userId) => {
  let response;

  await axios.get(`/patient/${userId}`)
    .then((res) => {
      response = res.data
    })
    .catch(err => console.log('Error in getting the user Profile', err))

  return response;
}


// Get All Medical Questions
export const getQuestion = async () => {
  let response;

  await axios.get('/question')
    .then((res) => {
      response = res.data
    })
    .catch(err => console.log('Error in getting the questions', err))

  return response;
}