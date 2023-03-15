import React from 'react';

// Import styled
import { HeaderContainer } from './styles';

// Import videos
import video from '/public/videos/video1.mp4';

const HeaderVideo = () => {
    return (
        <HeaderContainer>
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
        </HeaderContainer>
    );
};

export { HeaderVideo };
