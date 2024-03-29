import React from 'react';
import { FooterStyled } from './styles';

const Footer = () => {
    return (
        <FooterStyled id="contact">
            <div className="imgs">
                <figure>
                    <img src='/Footer/Bombillo.png' alt='' />
                    <figcaption>Innovador</figcaption>
                </figure>
                <figure>
                    <img src='/Footer/estrella.png' alt='' />
                    <figcaption>Servicio de calidad</figcaption>
                </figure>
                <figure>
                    <img src='/Footer/llave.png' alt='' />
                    <figcaption>Garantia</figcaption>
                </figure>
            </div>
            <div className="info">
                <div>
                    <h1>Servicios</h1>
                    <p>Acrílico</p>
                    <p>Neón</p>
                    <p>Luminoso</p>
                    <p>Marco Pendón</p>
                    <p>Parasoles de todo tipo</p>
                    <p>Tarjetas, volantes</p>
                    <p>Ornamentación</p>
                </div>

                <div>
                    <h1>Horarios</h1>
                    <p>Lun -Vie: 8:00AM :6:00PM</p>
                    <p>Sab - 8:00AM :400PM</p>
                </div>

                <div>
                    <h1>Contactenos</h1>
                    <p>Avenida ambala #33-59</p>
                    <p>Tel: 2782729</p>
                    <p>Whatsapp: 322 2758763</p>
                </div>
            </div>
        </FooterStyled>
    );
};

export { Footer };
