import styled from "styled-components";

export const CardContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 364px;
  height: 175px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding-left: 15px;
  margin-top: 10px;
  word-break: break-word;
  
  p {
    font-size: 12px;
    color: #6F6F6F;
  }
  h1 {
    font-size: 18px;
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
`

export const SubText = styled.div`
  display: flex;
  width: 60px;
  border-radius: 50px;
  border: 1px solid #e0e0e0;
  justify-content: space-around;
  align-items: center;
`

