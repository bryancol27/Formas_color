import React from 'react';

// Import styled
import { HeaderContainer } from './styles';

// Import videos
import video from '/public/videos/video1.mp4';

const HeaderVideo = () => {
    return (
        <HeaderContainer>
            <div className='videoContainer'>
                <video autoPlay muted loop>
                    <source src={video} type='video/mp4'/>
                </video>
            </div>

            <div className="titleContainer">
                <h3>Agencia Publicitaria</h3>

                <div className='subcontent'>
                    <p>Somos una empresa con más de 20 años de experiencia en el ambiente publicitario, brindando soluciones y calidad de trabajos</p>

                    <button className="cta">Servicios</button>
                </div>
            </div>
        </HeaderContainer>
    );
};

export { HeaderVideo };