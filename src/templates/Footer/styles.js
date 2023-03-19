import styled from '@emotion/styled';

export const FooterStyled = styled.footer`
    width: 100%;
    height: 800px;
    background-image: url('/Footer/bg-footer.svg');
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: 100%;

    display: flex;
    justify-content: center;
    align-items: flex-end;

    .info {
        width: 80%;
        height: 400px;
        display: flex;
        justify-content: space-around;
        align-items: flex-start;

        div{
            h1{
                text-align: center;
                margin-bottom: 1rem;
                color: #fff;
            }

            p{
                margin: 10px 0px;
                color: #fff;
            }
        }
    }
`;
