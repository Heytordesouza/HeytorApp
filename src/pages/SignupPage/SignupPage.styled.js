import styled from "styled-components"

export const Main = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-color: ${props => (props.theme === 'dark' ? '#333333' : '#ffffff')};
    color: ${props => (props.theme === 'dark' ? '#ffffff' : '#333333')};
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

export const ImgLogo = styled.img`
    width: 28.02px;
    height: 28.64px;
`

export const ButtonLogin = styled.div`
    width: 55px;
    height: 25px;
    left: 344px;
    top: 57px;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    cursor: pointer;
    text-align: center;
    color: #4088CB;
`

export const Welcome = styled.div`
    width: 364px;
    height: 86px;
    margin-top: 20px; 
    margin-bottom: 70px;
    font-weight: 700;
    font-size: 33px;
    line-height: 43px;
    background-color: ${props => (props.theme === 'dark' ? '#333333' : '#ffffff')};
    color: ${props => (props.theme === 'dark' ? '#ffffff' : '#333333')};

    @media screen and (max-device-width: 400px){
        width: 90vw;
        font-size: 8vw;
    }
`

export const Input = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1vh;
    width: 80%;
    justify-content: center;
    align-items: center;
`

export const InputUserName = styled.input`
    border: 1px solid #D5D8DE;
    border-radius: 4px;
    height: 60px;
    width: 363px;
    padding-left: 2vw;
    font-weight: 400;
    font-size: 16px;
    background-color: ${props => (props.theme === 'dark' ? '#333333' : '#ffffff')};
    color: ${props => (props.theme === 'dark' ? '#ffffff' : '#333333')};

    @media screen and (max-device-width: 400px){
        width: 95vw; 
    }
`

export const InputEmail = styled.input`
    border: 1px solid #D5D8DE;
    border-radius: 4px;
    height: 60px;
    width: 363px;
    padding-left: 2vw;
    font-weight: 400;
    font-size: 16px;
    background-color: ${props => (props.theme === 'dark' ? '#333333' : '#ffffff')};
    color: ${props => (props.theme === 'dark' ? '#ffffff' : '#333333')};

    @media screen and (max-device-width: 400px){
        width: 95vw; 
    }
`

export const InputPassword = styled.input`
    border: 1px solid #D5D8DE;
    border-radius: 4px;
    height: 60px;
    width: 363px;
    padding-left: 2vw;
    font-weight: 400;
    font-size: 16px;
    background-color: ${props => (props.theme === 'dark' ? '#333333' : '#ffffff')};
    color: ${props => (props.theme === 'dark' ? '#ffffff' : '#333333')};

    @media screen and (max-device-width: 400px){
        width: 95vw; 
    }
`

export const Signup = styled.div`
    width: 365px;
    height: 51px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1vh;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    background: linear-gradient(90deg, #191970 0%, #0000FF 100%);
    border-radius: 27px;
    color: white;
    cursor: pointer;
    margin-bottom: 2.5vh;
    margin-top: 2.5vh;

    @media screen and (max-device-width: 400px){
        width: 95vw; 
        margin-top: 8vw;
    }
`

export const ContainerSignup = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    background-color: ${props => (props.theme === 'dark' ? '#333333' : '#ffffff')};
`

export const Contract = styled.p`
    width: 361.02px;
    height: 38px;
    margin-top: 45px;
    margin-bottom: 15px;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    background-color: ${props => (props.theme === 'dark' ? '#333333' : '#ffffff')};
    color: ${props => (props.theme === 'dark' ? '#ffffff' : '#333333')};

    @media screen and (max-device-width: 400px){
        width: 95vw; 
        margin-bottom: 6vw;
        font-size: 4vw;
    }
`

export const ToAccept = styled.p`
    width: 361.02px;
    background-color: ${props => (props.theme === 'dark' ? '#333333' : '#ffffff')};

    @media screen and (max-device-width: 400px){
        width: 95vw; 
    }
`

export const Span = styled.span`
    display: flex;
    width: 361.02px;
    gap: 10px;
    justify-content: center;
    background-color: ${props => (props.theme === 'dark' ? '#333333' : '#ffffff')};

    @media screen and (max-device-width: 400px){
        width: 95vw; 
    }
`

export const Label = styled.label`
    width: 361px;
    height: 38px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    background-color: ${props => (props.theme === 'dark' ? '#333333' : '#ffffff')};

    @media screen and (max-device-width: 400px){
        width: 95vw; 
        font-size: 4vw;
    }
`

export const CheckBox = styled.input`
    border: 1px solid #C4C4C4;
    border-radius: 2px;
    background-color: ${props => (props.theme === 'dark' ? '#333333' : '#ffffff')};
`