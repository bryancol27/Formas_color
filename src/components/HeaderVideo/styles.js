import styled from '@emotion/styled';

// Import vars
import { variables } from '@styles/variables';

export const HeaderContainer = styled.header`
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 1rem;

    .video__Cover {
        width: 80%;
        height: 100%;
        overflow: hidden;
        mask-image: url('/logos/overlay.png');
        mask-position: left;
        mask-repeat: no-repeat;
        mask-size: 100%;

       
    }

    .text {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        flex-direction: column;
        gap: 2rem;

        h1 {
            font-size: 100px;
            color: ${variables.thridColor};
        }

        p {
            font-size: 18px;
            text-align: right;
        }

        button {
            width: 100px;
            height: 30px;
            border: 0px;
            border-radius: 30px;
            color: #fff;
            background: #ff0048;
            font-weight: bold;
        }
    }
`;
