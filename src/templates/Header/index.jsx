import React from 'react';

// Import components
import { Navbar } from '@components/navbar/index';
import { HeaderVideo } from '@components/HeaderVideo/index';

const Header = () => {
    return (
        <React.Fragment>
            <Navbar/>
            <HeaderVideo/>
        </React.Fragment>
    );
};

export { Header };