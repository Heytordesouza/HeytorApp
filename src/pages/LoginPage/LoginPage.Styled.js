import styled from "styled-components";

export const MainContainer = styled.div`
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
    margin-bottom: 1vh;
    margin-top: 80px;
`;

export const Title = styled.div`
    width: 181px;
    height: 47px;
    left: 134px;
    top: 228px;
    font-weight: 700;
    font-size: 36px;
    line-height: 47px;

    @media screen and (max-device-width: 200px){
        width: 95vw;
        font-size: 14vw;
        text-align: center;
    }
`;

export const SubTitle = styled.div`
    width: 378px;
    height: 21px;
    left: 4vw;
    top: 275px;
    margin-bottom: 10vh;
    font-weight: 300;
    font-size: 16px;
    line-height: 21px;
    text-align: center;

    @media screen and (max-device-width: 400px){
        width: 95vw;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1vh;
    width: 80%;
    justify-content: center;
    align-items: center;

    @media screen and (max-device-width: 400px){
        width: 95vw;
    }
`;

export const InputEmail = styled.input`
    border: 1px solid #D5D8DE;
    border-radius: 4px;
    height: 60px;
    width: 363px;
    padding-left: 2vw;
    font-weight: 400;
    font-size: 16px;
    background-color: ${props => (props.theme === 'dark' ? '#333' : '#ffffff')};
    color: ${props => (props.theme === 'dark' ? '#fff' : '#333')};

    @media screen and (max-device-width: 400px){
        width: 95vw;
    }
`;

export const InputPassword = styled.input`
    border: 1px solid #D5D8DE;
    border-radius: 4px;
    height: 60px;
    width: 363px;
    padding-left: 2vw;
    font-weight: 400;
    font-size: 16px;
    background-color: ${props => (props.theme === 'dark' ? '#333' : '#ffffff')};
    color: ${props => (props.theme === 'dark' ? '#fff' : '#333')};

    @media screen and (max-device-width: 400px){
        width: 95vw;
    }
`;

export const ButtonContainer = styled.div`
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

    @media screen and (max-device-width: 400px){
        width: 95vw;
    }
`;

export const CreateAccount = styled.div`
    width: 365px;
    height: 51px;
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

    @media screen and (max-device-width: 400px){
        width: 95vw;
    }
`;

