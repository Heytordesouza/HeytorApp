import { useLocation, useNavigate, useParams } from "react-router-dom";
import imgLogo from "../../assets/logoheytorapp.png";
import { goToHomePage, goToLoginPage } from "../../router/Coordinator";
import { HeaderMain, Container, ImgLogo, ContainerComments, ImgExit } from "./Header.styled";
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { useTheme } from '../../contexts/ThemeContext';
import exitLight from "../../assets/exitlight.png"
import exitDark from "../../assets/exitdark.png"
import homeLight from "../../assets/homelight.png"
import homeDark from "../../assets/homedark.png"
import xLight from "../../assets/xlight.png"
import xDark from "../../assets/xdark.png"

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
              <div onClick={() => logout()} >
                {theme === 'light' ?
                  (<ImgExit src={exitDark} alt="exitDark" />)
                  :
                  (<ImgExit src={exitLight} alt="exitlight" />)}
              </div>
            </Container>
          </HeaderMain>
        );
      case "/signup":
        return (
          <HeaderMain theme={theme}>
            <Container>
              <ThemeToggle onClick={toggleTheme} />
              <ImgLogo src={imgLogo} alt={"imgLogo"} />
              <div onClick={() => goToLoginPage(navigate)} >
                {theme === 'light' ?
                  (<ImgExit src={homeDark} alt="homeDark" />)
                  :
                  (<ImgExit src={homeLight} alt="homelight" />)}
              </div>
            </Container>
          </HeaderMain>
        );
      case `/comments/${params.postId}`:
        return (
          <HeaderMain theme={theme}>
            <ContainerComments>
              <ThemeToggle onClick={toggleTheme} />
              <ImgLogo src={imgLogo} alt={"imgLogo"} onClick={toggleTheme} />
              <div onClick={() => goToHomePage(navigate)} >
                {theme === 'light' ?
                  (<ImgExit src={xDark} alt="xDark" />)
                  :
                  (<ImgExit src={xLight} alt="xlight" />)}
              </div>
            </ContainerComments>
          </HeaderMain>
        );
      default:
    }
  };
  return <HeaderMain>{renderHeader()}</HeaderMain>;
};