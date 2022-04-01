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
import Dashboard from './pages/Dashboard';

import { GeneralContext } from './context/GeneralContext';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, [windowWidth]);

  const theme = createTheme({
    typography: {
      "fontFamily": `"Poppins", sans-serif`,
      "fontSize": 14,
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <GeneralContext.Provider value={{ windowWidth }}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="find-doctors" element={<FindDoctors />} />
            <Route path="video-consult" element={<VideoConsult />} />
            <Route path="medicines" element={<Medicines />} />
            <Route path="dashboard" element={<Dashboard />}>
              {/* <Route path="" />   */}
            </Route>
          </Route>
        </Routes>
      </GeneralContext.Provider>
    </ThemeProvider>
  );
}

export default App;
