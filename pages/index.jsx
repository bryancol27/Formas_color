import React from 'react';

// Import templates
import { Header } from '@templates/Header/index';
import { Works } from '@templates/Works/index';
import { Footer } from '@templates/Footer/index';

const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <Works />
            <Footer/>
        </React.Fragment>
    );
};

export default Home;
