import styled from '@emotion/styled';

// Import vars
import { variables } from '@styles/variables';

export const FooterStyled = styled.footer`
    width: 100%;
    height: 800px;
    background-image: url('/Footer/bg-footer.svg');
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: 100%;

    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    gap: 20px;
    /* align-items: flex-end; */

    .imgs {
        min-height: 350px;
        display: flex;
        justify-content: space-around;
        align-items: center;

        figure {
            display: flex;
            flex-direction: column;
            align-items: center;

            img {
                width: 100px;
                height: 100px;
            }

            figcaption {
                color: ${variables.secondaryColor};
            }
        }
    }

    .info {
        width: 100%;
        height: 400px;
        display: flex;
        justify-content: space-around;
        align-items: flex-start;

        div {
            h1 {
                text-align: center;
                margin-bottom: 1rem;
                color: #fff;
            }

            p {
                margin: 10px 0px;
                color: #fff;
            }
        }
    }
`;
