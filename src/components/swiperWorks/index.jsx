import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination, Autoplay } from 'swiper';
//import styles swiper
import 'swiper/css';
import 'swiper/css/pagination';

import { CardWork } from '@components/card/index';

// Import custom styles
import { WrapSwiper } from './styles'; 

const SwiperWork = ({ info, title, ligthVersion }) => {
    return (
        <WrapSwiper
            className={ligthVersion ? 'ligth' : 'dark'}
        >
            <div className="swiperContent">
                <h1>{title}</h1>

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
                        info.map((element, i) => (
                            <SwiperSlide key={i}>
                                <CardWork src={element} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </WrapSwiper>
    );
};

export { SwiperWork };