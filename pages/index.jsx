import React from 'react';

// Import templates
import { Header } from '@templates/Header';
import { Works } from '@templates/Works/index';
import { Parasols } from '@templates/Parasols/index';

const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <Works />
            <Parasols />
        </React.Fragment>
    );
};

export default Home;
