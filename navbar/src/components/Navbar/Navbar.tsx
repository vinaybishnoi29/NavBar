import React, {useState} from 'react';
import { IconContext } from "react-icons";
import { MdClass, MdDataUsage } from 'react-icons/md';
import './Navbar.scss';
import Logo from './components/Logo';
import MenuIcon from './components/MenuIcon';
import Card from './components/Card';
import {
  Links,
  LogoText,
  ProgressLabel,
  ScheduleCallLabel,
  TalkFinanceLabel,
  UnlockScore,
  Devon,
} from './config';

/**
 * Navbar Component
 */
const Navbar:React.FC = () => {
    const [isMenuOpen, openMenu] = useState(false);
    const toggleMenu = () => {
        openMenu(!isMenuOpen);
    }
    const smallDeviceMenu = (
      <div className="nav__menu--small">
        <div className="col-sm-4 col-md-12">
          {Links.map((link, index) => (
            <div className="grid-row menu__row" key={index}>
              <a className="menu__link"
                href={link.href}
                target={link.target}
              >
                { link.label }
              </a>
            </div>
          ))}
          <Card 
            icon="Box"
            heading={TalkFinanceLabel}
            action={ScheduleCallLabel}
          >
            <IconContext.Provider value={{ color: "blue", className: "card__icon__box" }}>
              <MdClass />
            </IconContext.Provider>
          </Card>
          <Card 
            icon="Circle"
            heading={Devon}
            action={UnlockScore}
          >
            <IconContext.Provider value={{ color: "grey", className: "card__icon__circle" }}>
              <MdDataUsage />
            </IconContext.Provider>
          </Card>
        </div>
      </div>
    );
    
    const desktopNav = (
        <div className="grid-row desktop__row">
                <Logo logoLabel={LogoText} />
                <div className="links col-lg-5">
                    {Links.map((link, index) => (
                        <a className="link" href={link.href}>{link.label}</a>
                    ))}
                </div>

                <div className="actions col-lg-3 col-lg-shift-2">
                    <button className="btn__progress--main">{ProgressLabel}</button>
                    <button className="btn__schedule--main">{ScheduleCallLabel}</button>
                </div>
            </div>
    );
    const tabletMobileNav = (
        <>
        <div className="grid-row tablet__mobile__row">
            <Logo logoLabel={LogoText} />
            <div className="actions__md col-md-4 col-md-shift-4">
                <button className="btn__progress--main">{ProgressLabel}</button>
                <button className="btn__schedule--main">{ScheduleCallLabel}</button>
            </div>
            <MenuIcon
              toggleMenu={toggleMenu}
              isMenuOpen={isMenuOpen}
            />
		</div>
        {isMenuOpen && (
            smallDeviceMenu
        )}
        </>
    );

    return (
      <div className="navbar__container">
        <div className="container-fluid">
			{desktopNav}
            {tabletMobileNav}
        </div>
      </div>
    );
};

export default Navbar;