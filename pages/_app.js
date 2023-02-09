import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { Global, css } from '@emotion/react'; // es el styled component de chakra-ui
import theme from '../styles/theme';
import Nav from '../components/Nav.jsx';

const GlobalStyle = ({ children }) => {
  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
          }
        `}
      />
      {children}
    </>
  );
};

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <GlobalStyle />
        <Nav />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
