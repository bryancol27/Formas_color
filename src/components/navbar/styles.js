import styled from '@emotion/styled';

export const NavbarElement = styled.nav`
    height: 60px;
    display: flex;
    gap: 25px;
    justify-content: flex-end;
    padding: 0 50px;

    ul {
        list-style: none;
        display: flex;
        gap: 25px;
        padding: 20px 0;

        li {
            a {
                text-decoration: none;
            }
        }
    }

    figure {
        display: flex;
        align-items: center;
    }
`;
