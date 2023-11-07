import React from 'react';
import { WorksStyled } from './styles';

// Import components
import { SwiperWork } from '@components/swiperWorks';

// Import utils
import { generalWorks, neonSigns, avisosAcrilicos } from '@utils/infoWorks';

const Works = () => {
    return (
        <WorksStyled id="works">
            {/* GeneralWorks */}
            <SwiperWork
                info={neonSigns}
                title={'NEON SIGNS'}
                ligthVersion={true}
            />

            <SwiperWork
                info={generalWorks}
                title={'TRABAJOS'}
                ligthVersion={false}
            />

            <SwiperWork
                info={avisosAcrilicos}
                title={'AVISOS EN ACRILICO'}
                ligthVersion={true}
            />

            <div className="parasoles" id="services">
                <div className="images">
                    <div className="one">
                        <figure>
                            <img src="" alt="" />
                        </figure>
                    </div>

                    <div className="two">
                        <figure>
                            <img src="" alt="" />
                        </figure>
                    </div>

                    <div className="three">
                        <figure>
                            <img src="" alt="" />
                        </figure>
                    </div>
                </div>

                <div className="text">
                    <div>
                        <span>1</span>
                        <p>asdasdasd asdasda asd</p>
                    </div>
                    <div>
                        <span>2</span>
                        <p>asdasdasd asdasda asd</p>
                    </div>
                    <div>
                        <span>3</span>
                        <p>asdasdasd asdasda asd</p>
                    </div>
                </div>
            </div>
        </WorksStyled>
    );
};

export { Works };
