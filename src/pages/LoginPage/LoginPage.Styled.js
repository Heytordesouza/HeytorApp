import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background-color: ${props => (props.theme === 'dark' ? '#333' : '#ffffff')};
    color: ${props => (props.theme === 'dark' ? '#fff' : '#333')};
`;

export const ImgLogo = styled.img`
    width: 84px;
    height: 84px;
    margin-left: 1vw;
    margin-bottom: 1vh;
`;

export const Title = styled.div`
    width: 180px;
    height: 47px;
    left: 134px;
    top: 228px;

    font-family: 'IBM Plex Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 47px;

    
`;

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
    text-align: center;
    
`;

export const Input = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1vh;
    width: 80%;
    justify-content: center;
    align-items: center;
`;

export const InputEmail = styled.input`
    border: 1px solid #D5D8DE;
    border-radius: 4px;
    height: 60px;
    width: 363px;
    padding-left: 2vw;
    font-weight: 400;
    font-size: 16px;
    font-family: 'Noto Sans';
    
    background-color: ${props => (props.theme === 'dark' ? '#333' : '#ffffff')};
    color: ${props => (props.theme === 'dark' ? '#fff' : '#333')};
`;

export const InputPassword = styled.input`
    border: 1px solid #D5D8DE;
    border-radius: 4px;
    height: 60px;
    width: 363px;
    padding-left: 2vw;
    font-weight: 400;
    font-size: 16px;
    font-family: 'Noto Sans';
    background-color: ${props => (props.theme === 'dark' ? '#333' : '#ffffff')};
    color: ${props => (props.theme === 'dark' ? '#fff' : '#333')};
`;

export const Button = styled.div`
    display: flex;
    flex-direction: column;
`;

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
    background: linear-gradient(90deg, #191970 0%, #0000FF 100%);
    border-radius: 27px;
    color: white;
    cursor: pointer;
    margin-bottom: 0.5vh;
    margin-top: 2.5vh;
`;

export const Line = styled.img`
    width: 363.01px;
    height: 5px;

    transform: rotate(- 0.999deg);
`;

export const CreateAccount = styled.div`
    width: 365px;
    height: 51px;

    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 13px;
    gap: 10px;

   
    color: ${props => (props.theme === 'dark' ? '#ffffff' : '#191970')};
    margin-top: 2.5vh;

    border: 1px solid #191970;
    border-radius: 27px;
    cursor: pointer;
`;

