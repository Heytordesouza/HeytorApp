import styled from "styled-components"

export const HeaderMain = styled.header`
    display: flex;
    width: 440px;
    height: 55px;
    justify-content: space-evenly;
    top: 0px;
    align-items: center;
    text-align: center;
    background-color: ${props => (props.theme === 'dark' ? '#333333' : '#ffffff')};
    color: ${props => (props.theme === 'dark' ? '#ffffff' : '#333333')};

    @media screen and (max-device-width: 450px){
        width: 95vw;
    }
`

export const Container = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;

    @media screen and (max-device-width: 400px){
        width: 95%;
    }
`

export const ContainerComments = styled.div`
    display: flex;
    width: 98%;
    gap: 20%;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (max-device-width: 400px){
        width: 100%;
        gap: 29%;
        justify-content: space-around;
    }
`

export const ImgLogo = styled.img`
    width: 34px;
    height: 34px;
`

export const ImgExit = styled.img`
    width: 33px;
    height: 33px;
    cursor: pointer;
`