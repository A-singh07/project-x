import { useState, useEffect } from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import MainLayout from './components/mainLayout/MainLayout';
import Home from './pages/Home';
import FindDoctors from './pages/FindDoctors';
import VideoConsult from './pages/VideoConsult';
import Medicines from './pages/Medicines';

import { GeneralContext } from './context/GeneralContext';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, [windowWidth]);

  return (
    <GeneralContext.Provider value={{ windowWidth }}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="find-doctors" element={<FindDoctors />} />
          <Route path="video-consult" element={<VideoConsult />} />
          <Route path="medicines" element={<Medicines />} />
        </Route>
      </Routes>
    </GeneralContext.Provider>
  );
}

export default App;
