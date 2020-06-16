import React from 'react';
import logo from '../../logo.svg';
import './Navbar.scss';
/**
 * @description Interface for Props
 * @param headerLabel  Prop for 'header Text'.
 */
interface Props {
    headerLabel:string;
}

/**
 * Header Component
 */
const Navbar:React.FC<Props> = ({headerLabel}:Props) => {
    return (
      <div className='Header'>
        <div className='logoWithHeading'>
            <img src={logo} className="logo" alt="logo" />
            <h1 className='Header_Content_heading'>
                {headerLabel}
            </h1>
        </div>
    </div>
    );
};

export default Navbar;