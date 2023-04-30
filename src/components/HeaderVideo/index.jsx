import React from 'react';

// Import styled
import { HeaderContainer } from './styles';

// Import videos asset
import video from '/public/videos/video1.mp4';

// Import imagen assets
import Image from 'node_modules/next/image';
import bg1 from '/public/logos/inferior azul.png';
import bg2 from '/public/logos/superior azul.png';

const HeaderVideo = () => {
    return (
        <HeaderContainer id="inicio">
            <div className="video__Cover">
                <video autoPlay muted loop>
                    <source src={video} type="video/mp4" />
                </video>
            </div>

            <div className="text">
                <h1>Agencia Publicitaria</h1>
                <p>
                    Somos una empresa con más de 20 años de experiencia en el
                    ambiente publicitario, brindando soluciones y calidad de
                    trabajos
                </p>

                <button className="cta">Servicios</button>
            </div>

            <Image src={bg1} className='inferiorBg blueBg' alt="BackgroundOnly" width={200} height={200}/>
            <Image src={bg2} className='superiorBg blueBg' alt="BakcgroundOnly" width={200} height={200}/>
        </HeaderContainer>
    );
};

export { HeaderVideo };
