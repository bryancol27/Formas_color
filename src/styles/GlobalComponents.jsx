import React from 'react';

import { Global ,css } from '@emotion/react';

// Import fonts
import { fontStyles } from './font';

const GlobalComponents = css`
    ${fontStyles}
    * {
        font-family: 'poppins';
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }
    body{
        margin-top: 60px;
    }
`;

const GlobalComponent = () => {
    return (
        <Global    
            styles={GlobalComponents}
        />
    );
};

export { GlobalComponent };