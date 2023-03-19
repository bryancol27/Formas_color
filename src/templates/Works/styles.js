import styled from '@emotion/styled';

// Import vars
import { variables } from '@styles/variables';

export const WorksStyled = styled.section`
    width: 100%;
    height: 140vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 9rem;
    background: ${variables.grey};

    .swiperContent {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        h1 {
            font-size: 52px;
            font-weight: bolder;
            color: #fff;
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

    .parasoles {
        width: 80%;
        display: flex;
        justify-content: space-around;
        align-items: center;

        .images {
            width: 300px;
            height: 320px;
            background: #c8154a;
            border-radius: 10px;

            display: flex;
            justify-content: center;
            align-items: center;

            position: relative;

            div {
                position: absolute;
                background: #666666;
                border-radius: 10px;
            }

            .one {
                right: -120px;
                top: -50px;
                width: 250px;
                height: 250px;
            }

            .two {
                left: -120px;
                width: 250px;
                height: 250px;
            }

            .three {
                bottom: -100px;
                right: -50px;
                width: 180px;
                height: 180px;
            }
        }

        .text {
            width: 30%;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-direction: column;
            gap: 2rem;

            div {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 1rem;

                span {
                    width: 50px;
                    height: 50px;
                    background: #05c1ff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50px;
                    color: #fff;
                }

                P {
                    color: #fff;
                    font-size: 18px;
                }
            }
        }
    }
`;
