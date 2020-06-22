import React from 'react';
import './Content.scss';

interface Props {
    selectedLink: string
}

const Content: React.FC<Props> = ({selectedLink}: Props) => {
    return (
        <div className="container__content--main">
            {selectedLink}
        </div>
    )
}

export default Content;