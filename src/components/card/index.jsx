import React from 'react';
import { CardWorkStyled } from './styles';

import Image from 'node_modules/next/image';

const CardWork = ({src}) => {
    return (
        <CardWorkStyled>
            <Image src={src} alt="" width="100" height="100"/>
        </CardWorkStyled>
    );
};

export { CardWork };
