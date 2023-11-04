import styled from "styled-components"

export const HeaderMain = styled.header`
    display: flex;
    width: 428px;
    height: 55px;
    justify-content: space-evenly;
    top: 0px;
    align-items: center;
    text-align: center;
    background-color: ${props => (props.theme === 'dark' ? '#333' : '#e0e0e0')};
    color: ${props => (props.theme === 'dark' ? '#fff' : '#333')};
`

export const Container = styled.div`
    display: flex;
    width: 84%;
    gap: 36%;
    
`

export const ContainerComments = styled.div`
    display: flex;
    width: 50%;
    gap: 50%;
    justify-content: center;
`

export const ImgClose = styled.img`
    display: flex;
    margin-right: 12%;
    cursor: pointer;
`

export const ImgLogo = styled.img`
    width: 34px;
    height: 34px;
`

export const Button = styled.div`
    width: 70px;
    height: 25px;

    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    cursor: pointer;
    /* identical to box height */

    text-align: center;

    color: #4088CB;
`