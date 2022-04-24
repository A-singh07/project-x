import axios from 'axios';

// User Register
export const userRegister = async (signupObj) => {

  let response;
  await axios.post('/user/register', signupObj)
    .then((res) => response = res.data)
    .catch((err) => console.log("Error in registering User", err));

  return response;
}


// User Login
export const userLogin = async (loginObj) => {
  let response;
  await axios.post('/user/login', loginObj)
    .then((res) => response = res.data)
    .catch((err) => console.log('Error in loggin in User!', err));

  return response
}