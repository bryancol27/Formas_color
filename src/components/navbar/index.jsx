import React from 'react';

import { NavbarElement } from './styles';

// Import Image component
import Image from 'node_modules/next/image';
import elementImg from '/public/logos/Color.png';

const Navbar = () => {
    return(
        <NavbarElement>
            <ul>
                <li>Inicio</li>
                <li>Trabajos</li>
                <li>Servicios</li>
                <li>Contacto</li>
            </ul>

            <figure>
                <Image 
                    src={elementImg}
                    alt="Logo formas and color" 
                    width={150}
                    height={50}
                />
            </figure>
        </NavbarElement>
    );
};

export { Navbar };