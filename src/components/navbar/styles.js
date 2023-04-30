import styled from '@emotion/styled';

export const NavbarElement = styled.nav`
    width: 100%;
    height: 60px;
    display: flex;
    gap: 25px;
    justify-content: flex-end;
    padding: 0 50px;
    position: fixed;
    z-index: 5;
    top: 0px;
    background: #fff;

    ul {
        list-style: none;
        display: flex;
        gap: 25px;
        padding: 20px 0;

        li {
            a {
                text-decoration: none;
                color: #4a4a4a;
            }
        }
    }

    figure {
        display: flex;
        align-items: center;
    }
`;
