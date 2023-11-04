import { GlobalContext } from "./contexts/GlobalContext";
import { createGlobalStyle } from "styled-components";
import Router from "./router/Router";
import { GlobalState } from "./contexts/GlobalState";
import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from './contexts/ThemeContext';

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }`;

export default function App() {

  const context = GlobalState()

  return (
    <GlobalContext.Provider value={context}>
      <ThemeProvider>
        <ChakraProvider>
          <GlobalStyle />
          <Router />
        </ChakraProvider>
      </ThemeProvider>
    </GlobalContext.Provider>
  );
}
