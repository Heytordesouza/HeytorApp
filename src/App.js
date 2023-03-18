import { GlobalContext } from "./contexts/GlobalContext";
import { createGlobalStyle } from "styled-components";
import Router from "./router/Router";
import GlobalState from "./contexts/GlobalState"

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }`;


export default function App() {

  const context = GlobalState()


  return (
    <>
      <GlobalStyle value={context} />
      <GlobalContext.Provider>
        <Router />
      </GlobalContext.Provider>
    </>
  );
}
