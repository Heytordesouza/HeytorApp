import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => (props.theme === 'dark' ? '#333' : '#ffffff')};
  color: ${props => (props.theme === 'dark' ? '#fff' : '#333')};

  section {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`

export const PostContainer = styled.div`
  display: flex;
  height: 250px;
  margin-top: 10px;
  background-color: ${props => (props.theme === 'dark' ? '#333' : '#ffffff')};
  color: ${props => (props.theme === 'dark' ? '#fff' : '#333')};

  textarea {
    width: 364px;
    height: 131px;
    background-color: ${props => (props.theme === 'dark' ? '#333' : '#ffffff')};
    color: ${props => (props.theme === 'dark' ? '#fff' : '#333')};
    border-radius: 12px;
    border: 1px solid #e0e0e0;
    display: flex;
    margin-bottom: 15px;
    padding-left: 20px;
    padding-top: 10px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 365px;
    height: 51px;
    background: linear-gradient(90deg, #191970 0%, #0000FF 100%);
    border-radius: 27px;
    color: #ffffff;
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    cursor: pointer;
  }

  @media screen and (max-device-width: 400px){

    textarea, 
    button {
        width: 95vw;
    }
    
  }
`

export const Top = styled.div`
  display: flex;
  gap: 210px;
  color: red; 
  cursor: pointer;
`