import React from 'react';
import { MdClose } from 'react-icons/md';
import './MenuIcon.scss';

/**
 * @description Interface for Props
 * @param toggleMenu Function for Menu toggle
 * @param closeLabel  Prop for 'Close Text'
 * @param isMenuOpen if menu is open or not
 */
interface Props {
    toggleMenu: () => void;
    isMenuOpen: boolean;
}

/**
 * Logo Component
 */
const MenuIcon:React.FC<Props> = ({toggleMenu, isMenuOpen}:Props) => {
    return (
      <div className="menu__icon col-sm-1 col-sm-shift-2 col-md-2">
        {isMenuOpen
          ? (
          <button
            onClick={toggleMenu}
            className="menu__close--icon"
          >
            <MdClose/>
          </button>
          ) : (
          <button
              onClick={toggleMenu}
              className="menu__hamburger--icon"
          >
              <div className="hamburger__icon--item" />
              <div className="hamburger__icon--item" />
              <div className="hamburger__icon--item" />
          </button>
          )}
      </div>
    );
};

export default MenuIcon;