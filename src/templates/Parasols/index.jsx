import React from 'react';

// Import custom styles
import { ContainerParasols } from './styles.js';

// Import image component
// import Image from 'next/image';

// Import components
import { SmallDropDown } from '@components/SmallDropDown';

// Impor data
import { dataParaSols } from '@utils/dataParasolsDrop.js';

const Parasols = () => {
    return (
        <ContainerParasols>
            <h1>Parasoles</h1>

            <article className="descriptionElement">

                <div className="leftSection">
                    <figure className='containerImages'>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                            src="https://www.shutterstock.com/image-photo/hand-touching-screen-icon-throw-260nw-696395281.jpg" 
                            alt=""
                            className='imageProduct'
                        />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                            src="https://www.shutterstock.com/image-photo/hand-touching-screen-icon-throw-260nw-696395281.jpg" 
                            alt=""
                            className='imageProduct'
                        />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                            src="https://www.shutterstock.com/image-photo/hand-touching-screen-icon-throw-260nw-696395281.jpg" 
                            alt=""
                            className='imageProduct'
                        />
                    </figure>
                </div>

                <div className="rightSection">
                    {
                        dataParaSols.map((element, i) => (
                            <SmallDropDown 
                                key={i}
                                texts={element}
                            />
                        ))
                    }
                </div>

            </article>
        </ContainerParasols>
    );
};

export { Parasols };