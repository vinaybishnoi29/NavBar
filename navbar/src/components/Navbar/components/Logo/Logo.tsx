import React from 'react';
import './Logo.scss';

/**
 * @description Interface for Props
 * @param logoLabel  Prop for 'header Text'.
 */
interface Props {
    logoLabel:string;
}

/**
 * Logo Component
 */
const Logo:React.FC<Props> = ({logoLabel}:Props) => {
    return (
      <div className="logo col-sm-1 col-md-2 col-lg-2">
        {logoLabel}
      </div>
    );
};

export default Logo;