import React from 'react';
import HeroSection from '../components/heroSection/HeroSection';
import FeaturesSection from '../components/features/FeaturesSection';
import SpecialitiesSection from '../components/specialities/SpecialitiesSection';

const Home = () => {

  const [loggedIn, setLoggedIn] = React.useState(true)

  React.useEffect(() => {
    if (sessionStorage.getItem("loginData") && JSON.parse(sessionStorage.getItem("loginData")).token) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
  }, []);

  return (
    <>
      {
        !loggedIn &&
        <HeroSection />
      }
      <FeaturesSection />
      <SpecialitiesSection />
    </>
  )
}

export default Home
