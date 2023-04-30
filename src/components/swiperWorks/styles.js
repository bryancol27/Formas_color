import styled from '@emotion/styled';

// Import variables
import { variables } from '@styles/variables';

export const WrapSwiper = styled.div`
    width: 100%;
    padding: 35px 0;

    &.ligth {
        background-color: ${variables.white};

        .swiperContent {
            h1 {
                color: ${variables.grey};
            }
        }
    }
    &.dark {
        background-color: ${variables.grey};

        .swiperContent {
            h1 {
                color: #fff;
            }
        }
    }

    .swiperContent {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        h1 {
            font-size: 52px;
            font-weight: bolder;
        }

        .swiper {
            width: 90%;
            height: 400px;
        }

        .swiper-slide {
            text-align: center;
            font-size: 18px;
            background: transparent;

            /* Center slide text vertically */
            display: -webkit-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;
        }
    }
`;
