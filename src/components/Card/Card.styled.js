import styled from "styled-components";

export const CardContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 364px;
  height: 175px;
  border: 1px solid ${props => (props.theme === 'dark' ? '#e0e0e0' : '#0000CD')};;
  border-radius: 12px;
  padding-left: 15px;
  margin-bottom: 10px;
  word-break: break-word;
  background-color: ${props => (props.theme === 'dark' ? '#333' : '#ffffff')};
  color: ${props => (props.theme === 'dark' ? '#fff' : '#333')};
  
  p {
    font-size: 14px;
    color: ${props => (props.theme === 'dark' ? '#B0C4DE' : '#333')};
  }

  h1 {
    font-size: 18px;
    margin-top: 0px;
  }

  @media screen and (max-device-width: 400px){
    width: 95vw;
  }
  
`;

export const PostMenu = styled.div`
  display: flex;
  gap: 15px;
`

export const TextButton = styled.div`
  display: flex;
  width: 100px;
  height: 25px;
  border: 1px solid #e0e0e0;
  border-radius: 50px;
  align-items: center;
  justify-content: space-around;
`
export const SubTextButton = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  
  img{
    cursor: pointer;
    width: 20px;
    margin-top: 2px;
  }
`

export const SubText = styled.div`
  display: flex;
  width: 60px;
  border-radius: 50px;
  border: 1px solid #e0e0e0;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  img{
    width: 20px;
  }
`

export const Top = styled.div`
  display: flex;
  justify-content: start;
  gap: 30px;

  span {
    width: 275px;
    color: ${props => (props.theme === 'dark' ? '#B0C4DE' : '#333')};
    font-size: 14px;
  }
`
