import { GlobalContext } from "./contexts/GlobalContext";
import { createGlobalStyle } from "styled-components";
import Router from "./router/Router";

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }`;

export default function App() {


return (
  <>
  <GlobalStyle />
  <GlobalContext.Provider>
    <Router />
  </GlobalContext.Provider>
  </>
  );
}
