import React, { useState } from 'react';
import './Header.css';
import { Link as LinkRouter } from 'react-router-dom';
import { logo, linkLogo, menu, phone } from '../../global';
import { Link, animateScroll as scroll } from 'react-scroll';
import talkToUs from '../../assets/talkToUs.png';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import Headroom from 'react-headroom';

// Importando Componentes
import TopContact from './TopContact';

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <header className="header" >
      {/* <TopContact/> */}

      <Headroom
       style={{
        webkitTransition: 'all .5s ease-in-out',
        mozTransition: 'all .5s ease-in-out',
        oTransition: 'all .5s ease-in-out',
        transition: 'all .5s ease-in-out'
      }}
      >
        <div className="c-headerComponent">
          <div className="c-headerComponent__headerContainer">
            <div className="c-headerComponent__logo">
              <LinkRouter to={linkLogo}>
                <img className='c-headerComponent__logo' src={logo} alt="Logo" />
              </LinkRouter>
            </div>

            <nav className="c-headerComponent__nav">
              <ul className="c-headerComponent__firstUl">
                {menu.map((menuItem, index) => (
                  <li key={index}>
                    {!menuItem.isTo ? (
                      <Link
                        activeClass="active"
                        to={menuItem.link}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="c-headerComponent__link"
                      >
                        {menuItem.menuName}
                      </Link>
                    ) : (
                      <LinkRouter
                        activeClass="active"
                        to={menuItem.link}
                        className="c-headerComponent__link"
                      >
                        {menuItem.menuName}
                      </LinkRouter>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className='c-menu_mobile'>
              <IconButton onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
            </div>

            <Drawer anchor='right' open={drawerOpen} onClose={toggleDrawer(false)}>
              <div
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <List>
                  {menu.map((menuItem, index) => (
                    <ListItem key={index}>
                      <Link
                        activeClass="active"
                        to={menuItem.link}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="c-headerComponent__link"
                        onClick={toggleDrawer(false)}
                      >
                        <ListItemText primary={menuItem.menuName} />
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </div>
            </Drawer>

            <div className='c-headerWPPLink'>
              <a title='Whatsapp' target='_blank' href='https://wa.me/5512996123692?text=Olá,%20gostaria%20de%20mais%20informações.'><img src={talkToUs} alt="Whatsapp" /></a>
            </div>
          </div>
        </div>
      </Headroom>
    </header>
  );
}

export default Header;
