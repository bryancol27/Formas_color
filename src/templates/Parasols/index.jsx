import React from 'react';

// Import custom styles
import { ContainerParasols } from './styles.js';

// Import image component
import Image from 'next/image';

const Parasols = () => {
    return (
        <ContainerParasols>
            <h1>Parasoles</h1>

            <div className="descriptionElement">

                <div className="leftSection">
                    <figure className='containerImages'>
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </figure>
                </div>

                <div className="rightSection">

                </div>

            </div>
        </ContainerParasols>
    );
};

export { Parasols };