import styled from '@emotion/styled';

export const NavbarElement = styled.nav`
    background-color: red;
    height: 60px;
    display: flex;
    justify-content: flex-end;

    ul {
        list-style: none;
        display: flex;
        gap: 10px;
        padding: 20px 0;

        li {
            a {
                text-decoration: none;
            }
        }
    }
`;
