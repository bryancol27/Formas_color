import React from 'react';

import { NavbarElement } from './styles';

// Import Image component
import Image from 'node_modules/next/image';
import elementImg from '/public/logos/Color.png';

const Navbar = () => {
    return(
        <NavbarElement>
            <ul>
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#works">Trabajos</a></li>
                <li><a href="#services">Servicios</a></li>
                <li><a href="#contact">Contacto</a></li>
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