import React from 'react';
import { CardWorkStyled } from './styles';

const CardWork = ({src}) => {
    return (
        <CardWorkStyled>
            <img src={src} alt="" />
        </CardWorkStyled>
    );
};

export { CardWork };
