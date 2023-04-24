import React from 'react';
import { WorksStyled } from './styles';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination, Autoplay } from 'swiper';
//import styles swiper
import 'swiper/css';
import 'swiper/css/pagination';
import { CardWork } from '@components/card/index';

// Import data
import { InfoWorks } from '@utils/infoWorks';

const Works = () => {
    return (
        <WorksStyled>
            <div className="swiperContent">
                <h1>TRABAJOS</h1>

                <Swiper
                    slidesPerView="3"
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        500: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        750: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                        950: {
                            slidesPerView: 3,
                            spaceBetween: 40
                        }
                    }}
                    pagination={{
                        dynamicBullets: true
                    }}
                    grabCursor={true}
                    loop={true}
                    modules={[Pagination, Autoplay]}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false
                    }}
                    className="mySwiper"
                >
                    {
                        InfoWorks.map((element, i) => (
                            <SwiperSlide key={i}>
                                <CardWork src={element} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div className="parasoles">
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
