import styled from '@emotion/styled';

// Import vars
import { variables } from '@styles/variables';

export const ContainerParasols = styled.section`
    width: 100%;
    height: auto;
    padding: 3rem 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: ${variables.grey};

    h1 {
        font-size: 52px;
        font-family: poppins-bold;
        color: #fff;
        margin-bottom: 150px;
    }

    .descriptionElement {
        display: flex;
        justify-content: center;
        gap: 150px;

        .leftSection {
            display: flex;

            .containerImages {
                position: relative;

                width: 100%;
                max-width: 400px;
                min-width: 400px;
                height: 100%;
                max-height: 400px;
                min-height: 400px;

                border-radius: 20px;
                background-color: ${variables.secondaryColor};

                .imageProduct {
                    position: absolute;
                    border-radius: 20px;

                    &:nth-child(1) {
                        width: 250px;
                        height: 250px;
                        right: -75px;
                        top: -50px;
                    }
                    &:nth-child(2) {
                        width: 250px;
                        height: 250px;
                        bottom: 50px;
                        left: -50px;
                    }
                    &:nth-child(3) {
                        width: 200px;
                        height: 200px;
                        bottom: -25px;
                        right: -25px;
                    }
                }
            }
        }

        .rightSection {
            width: 50%;
            max-width: 370px;
            min-width: 330px;
        }
    }
`;
