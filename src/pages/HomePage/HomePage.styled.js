import styled from "styled-components"

export const Main = styled.main`
    display: flex;
    /* justify-content: center; */
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
`

export const Header = styled.header`
display: flex;
width: 428px;
height: 50px;
justify-content: center;
top: 0px;
align-items: center;

background: #EDEDED;
`

export const Container = styled.div`
display: flex;
width: 50%;
gap: 55%;
margin-left: 45%;
`

export const ImgLogo = styled.img`
 width: 28.02px;
 height: 28.64px;
`

export const ButtonLogin = styled.div`
width: 55px;
height: 25px;
left: 344px;
top: 57px;

font-family: 'Noto Sans';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 25px;
/* identical to box height */

text-align: center;

color: #4088CB;
`

export const CreatePost = styled.input`
width: 364px;
height: 131px;
font-family: 'IBM Plex Sans';
color: #6F6F6F;
font-weight: 400;
font-size: 18px;
border: none;
background: #EDEDED;
border-radius: 12px;
`

export const ButtonPost = styled.input`
width: 365px;
height: 51px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 1vh;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 25px;
text-align: center;
background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
border-radius: 27px;
color: white;
cursor: pointer;
margin-bottom: 2.5vh;
margin-top: 2.5vh;
`
