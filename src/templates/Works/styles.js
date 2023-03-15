import styled from '@emotion/styled';

// Import vars
import { variables } from '@styles/variables';

export const WorksStyled = styled.section`
    width: 100%;
    height: auto;
    padding: 3rem 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    background: ${variables.grey};

    h1{
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
`;
