import { useContext } from 'react';
import {
  NavLink
} from 'react-router-dom';
import Avatar from '@mui/material/Avatar';

import { GeneralContext } from '../../context/GeneralContext';

import ButtonCustom from '../buttonCustom/ButtonCustom';
import styles from './header.module.css';

const Header = () => {

  const { windowWidth, userData } = useContext(GeneralContext)

  const navbarList = [
    {
      item: 'Home',
      link: '/'
    },
    {
      item: 'Find Doctors',
      link: '/find-doctors'
    },
    {
      item: 'Video Consult',
      link: '/video-consult'
    },
    {
      item: 'Medicines',
      link: '/medicines'
    },
  ]


  return (
    <div className={styles.headerWrapper}>
      <header className={styles.headerContainer + ' mainLayout'}>
        {
          windowWidth < 1024 &&
          <div className={styles.hamburgerContainer}>
            <img src="" alt="" />
          </div>
        }
        <div className={styles.logoContainer}>
          <h3>{process.env.REACT_APP_NAME}</h3>
          <img src="" alt="" />
        </div>
        {
          windowWidth > 1024 &&
          <nav className={styles.navbarContainer}>
            {
              navbarList.map((menu, index) =>
                <NavLink
                  key={index}
                  to={menu.link}
                  className={({ isActive }) => styles.navLink + ` ${isActive ? styles.navLinkActive : ''}`}
                >
                  {menu.item}
                </NavLink>
              )
            }
            {
              !userData ?
                <NavLink to={'login'}>
                  <ButtonCustom btnText={'Login / Signup'} secondaryBtn />
                </NavLink> :
                <Avatar sx={{ width: 40, height: 40, marginLeft: '1rem' }}>

                </Avatar>
            }
          </nav>
        }
      </header>
    </div>
  )
}

export default Header
