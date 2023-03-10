import styled from '@emotion/styled';

// Import vars
import { variables } from '@styles/variables';

export const HeaderContainer = styled.header`
    display: flex;
    padding: 50px 0;
    justify-content: center;

    .videoContainer {
        width: 300px;

        video {
            width: 100%;
        }
    }

    .titleContainer {
        max-width: 600px;
        min-width: 330px;

        h3 {
            font-size: 80px;
            color: ${variables.thridColor};
        }

        .subcontent {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 35px;

            p {
                max-width: 450px;
                min-width: 300px;
                width: 100%;
            }

            .cta {
                border-radius: 10px;
                border: none;
                padding: 10px 20px;
                background-color: ${variables.secondaryColor};
                color: ${variables.white};
            }
        }
    }
`;
