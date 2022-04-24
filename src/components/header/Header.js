import { useContext, useState } from 'react';
import {
  NavLink,
  useNavigate
} from 'react-router-dom';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';

import { GeneralContext } from '../../context/GeneralContext';

import ButtonCustom from '../buttonCustom/ButtonCustom';
import styles from './header.module.css';

const Header = () => {

  const { windowWidth, loginData, userData } = useContext(GeneralContext);
  const navigate = useNavigate();

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

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    sessionStorage.clear();
    window.location.href = '/';
  }


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
              loginData && loginData.token ?
                <>
                  <Avatar sx={{ width: 40, height: 40, marginLeft: '1rem' }} onClick={handleClick} style={{ cursor: 'pointer' }}></Avatar>
                  <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem>{userData && userData.name}</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                </>
                :
                <NavLink to={'login'}>
                  <ButtonCustom btnText={'Login / Signup'} secondaryBtn />
                </NavLink>
            }
          </nav>
        }
      </header>
    </div>
  )
}

export default Header
