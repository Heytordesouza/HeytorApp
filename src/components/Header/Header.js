import { useLocation, useNavigate, useParams } from "react-router-dom";
import imgLogo from "../../assets/imgLogo.svg";
import { goToHomePage, goToLoginPage } from "../../router/Coordinator";
import { HeaderMain, Container, ImgLogo, Button, ContainerComments, ImgClose } from "./Header.styled";
import close from "../../assets/close.svg";

export const Header = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  const logout = () => {
    window.localStorage.removeItem("TokenApi-Labeddit");
    goToLoginPage(navigate);
  };

  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <HeaderMain>
            <Container>
              <ImgLogo src={imgLogo} alt={"imgLogo"}/>
              <Button onClick={() => logout()}>Logout</Button> 
            </Container>
          </HeaderMain>
        );
      case "/signup":
        return (
          <HeaderMain>
            <Container>
              <ImgLogo src={imgLogo} alt={"imgLogo"}/>
              <Button onClick={()=>goToLoginPage(navigate)}>Entrar</Button> 
            </Container>
          </HeaderMain>
        );
      case `/comments/${params.postId}`:
        return (
          <HeaderMain>
            <ContainerComments>
              <ImgClose src={close} onClick={() => goToHomePage(navigate)} />
              <ImgLogo src={imgLogo} alt={"imgLogo"}/>
              <Button onClick={() => logout()}>Logout</Button> 
            </ContainerComments>
          </HeaderMain>
        );
    }
  };
  return <HeaderMain>{renderHeader()}</HeaderMain>;
};