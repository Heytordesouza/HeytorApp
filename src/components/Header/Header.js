import { useLocation, useNavigate, useParams } from "react-router-dom";
import imgLogo from "../../assets/logoheytorapp.png";
import { goToHomePage, goToLoginPage } from "../../router/Coordinator";
import { HeaderMain, Container, ImgLogo, Button, ContainerComments, ImgClose } from "./Header.styled";
import close from "../../assets/close.svg";
import ThemeToggle from '../../ThemeToggle';
import { useTheme } from '../../contexts/ThemeContext';
import exitLight from "../../assets/exitlight.png"
import exitDark from "../../assets/exitdark.png"

export const Header = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const { theme, toggleTheme } = useTheme();

  const logout = () => {
    window.localStorage.removeItem("TokenApi-Labeddit");
    goToLoginPage(navigate);
  };

  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <HeaderMain theme={theme}>
            <Container >
              <ThemeToggle onClick={toggleTheme} />
              <ImgLogo src={imgLogo} alt={"imgLogo"} />
              <div onClick={() => logout()} > {theme === 'light' ? (<img src={exitDark} width='33px'/>) : (<img src={exitLight} width='33px'/>)}</div>
            </Container>
          </HeaderMain>
        );
      case "/signup":
        return (
          <HeaderMain theme={theme}>
            <Container>
              <ThemeToggle onClick={toggleTheme} />
              <ImgLogo src={imgLogo} alt={"imgLogo"} />
              <Button onClick={() => goToLoginPage(navigate)}>Voltar</Button>
            </Container>
          </HeaderMain>
        );
      case `/comments/${params.postId}`:
        return (
          <HeaderMain theme={theme}>
            <ContainerComments>
              <ThemeToggle onClick={toggleTheme} />
              <ImgLogo src={imgLogo} alt={"imgLogo"} />
              <ImgClose src={close} onClick={() => goToHomePage(navigate)} />
            </ContainerComments>
          </HeaderMain>
        );
        default:
    }
  };
  return <HeaderMain>{renderHeader()}</HeaderMain>;
};