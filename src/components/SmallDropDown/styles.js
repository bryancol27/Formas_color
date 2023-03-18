import styled from '@emotion/styled';

import { css, keyframes } from '@emotion/css';

const close = keyframes`
    from{
        transform: scale(1);
        transform-origin: top;
    }

    to{
        transform: scale(0);
        transform-origin: top;
    }
`;

const open = keyframes`
    from{
        transform: scale(0);
        transform-origin: top;
    }

    to{
        transform: scale(1);
        transform-origin: top;
    }
`;

export const ContainerSmallDropDown = styled.div`
    width: 100%;

    .HeaderDropDown {
        cursor: pointer;
    }

    .contentDropDown {
        overflow: hidden;

        &.hidden {
            /* height: 0px; */
            animation: ${close} 0.5s ease 1 forwards;
        }

        &.open {
            animation: ${open} 0.5s ease 1 forwards;
        }
    }
`;
