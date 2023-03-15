import React from 'react';

// Import templates
import { Header } from '@templates/Header';
import { Works } from '@templates/Works/index';

const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <Works />
        </React.Fragment>
    );
};

export default Home;
