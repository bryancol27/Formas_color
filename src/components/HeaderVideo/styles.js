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
    position: relative;

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
        max-width: 700px;
        min-width: 330px;
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

    .blueBg {
        position: absolute;
    }

    .superiorBg {
        top: 0;
        left: 10%;
    }

    .inferiorBg {
        bottom: 0;
        right: 50%;
    }
`;
