import React from 'react';
import './Card.scss';

/**
 * @description Interface for Props
 * @param logoLabel  Prop for 'header Text'.
 */
interface Props {
    icon:string;
    heading: string;
    action: string;
    children: React.ReactNode
}

/**
 * Logo Component
 */
const Card:React.FC<Props> = ({icon, heading, action, children}:Props) => {
    return (
      <div className="card__container">
        <div className="card__icon">
          {children}
        </div>
        <div className="card__content">
            <div className="card__content--heading">
                {heading}
            </div>
            <div className="card__content--action">
                {action}
            </div>
        </div>
      </div>
    );
};

export default Card;