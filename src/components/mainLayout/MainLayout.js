import React from 'react';
import {
  Outlet
} from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const MainLayout = () => {
  return (
    <>
      <Header />
      <div style={{ minHeight: '60vh' }}>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default MainLayout
