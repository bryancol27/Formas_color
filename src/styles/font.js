import { css } from '@emotion/react';

//import of all files
import poppins_bold from 'public/font/Poppins-Bold.ttf';
import poppins_medium from 'public/font/Poppins-Medium.ttf';
import poppins_regular from 'public/font/Poppins-Regular.ttf';
import poppins_semibold from 'public/font/Poppins-SemiBold.ttf';

export const fontStyles = css`
    @font-face {
        font-family: 'poppins-bold';
        font-display: auto;
        src: url(${poppins_bold}) format('truetype');
        font-weight: 700;
        font-style: bold;
        text-rendering: optimizeLegibility;
    }

    @font-face {
        font-family: 'poppins-semibold';
        font-display: auto;
        src: url(${poppins_semibold}) format('truetype');
        font-weight: 600;
        font-style: normal;
        text-rendering: optimizeLegibility;
    }

    @font-face {
        font-family: 'poppins-medium';
        font-display: auto;
        src: url(${poppins_medium}) format('truetype');
        font-weight: 500;
        font-style: normal;
        text-rendering: optimizeLegibility;
    }

    @font-face {
        font-family: 'poppins';
        font-display: auto;
        src: url(${poppins_regular}) format('truetype');
        font-weight: 400;
        font-style: normal;
        text-rendering: optimizeLegibility;
    }
`;
