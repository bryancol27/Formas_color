import styled from '@emotion/styled';

// Import vars
import { variables } from '@styles/variables';

export const WorksStyled = styled.section`
    width: 100%;
    /* height: 140vh; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: ${variables.grey};

    .parasoles {
        width: 80%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 150px 0;

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
