import styled from "styled-components"

export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
`

// export const SectionLogin = styled.section`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//     width: 90%;
//     height: 100vh;
// `

export const ImgLogo = styled.img`
 width: 84px;
 height: 84px;
 margin-left: 1vw;
 margin-bottom: 1vh;
`

export const Title = styled.div`

width: 152px;
height: 47px;
left: 134px;
top: 228px;

font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 47px;
/* identical to box height */


color: #373737;
`

export const SubTitle = styled.div`
width: 378px;
height: 21px;
left: 4vw;
top: 275px;
margin-bottom: 10vh;

font-family: 'IBM Plex Sans';
font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 21px;
/* identical to box height */

text-align: center;

color: #000000;
`

// export const Input = styled.input`
//     height: 33.33%;
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//     gap: 1vh;
// `

export const InputEmail = styled.input`

    border: 1px solid #D5D8DE;
    border-radius: 4px;
    height: 60px;
    width: 363px;
    padding-left: 4vw;
    font-weight: 400;
    font-size: 16px;
    font-family: 'Noto Sans';
    color: #323941;
`

export const InputPassword = styled.input`

    border: 1px solid #D5D8DE;
    border-radius: 4px;
    height: 60px;
    width: 363px;
    padding-left: 4vw;
    font-weight: 400;
    font-size: 16px;
    font-family: 'Noto Sans';
    color: #323941;
`

export const Continue = styled.div`
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
`
