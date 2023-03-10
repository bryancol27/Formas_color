import React from 'react';

import { Global ,css } from '@emotion/react';

const GlobalComponents = css`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
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