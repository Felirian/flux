import React, {createContext, useContext, useEffect, useState} from 'react';
import {Header} from "@/widgets/general/Header";
import Footer from "@/widgets/general/Footer";
import {authContext, adminContext} from "@/shared/Context";
//import '../style/styles.scss'
import {ApolloProvider} from "@apollo/client";
import {checkSession, client} from "@/supabase/services";
import styled, {createGlobalStyle} from "styled-components";
import {BREAKPOINTS, COLOR} from "@/style/variables";

const CursorContext = createContext();

export const useCursorContext = () => {
  return useContext(CursorContext);
};

const _App = ({Component, pageProps}) => {
  const [auth, setAuth] = useState(checkSession())
  const [admin, setAdmin] = useState(false)
  const [cursorPosition, setCursorPosition] = useState({x: 0, y: 0});


  // позиция курсора для живых границ
  const updateCursorPosition = (e) => {
    setCursorPosition({x: e.clientX, y: e.clientY});
  };
  useEffect(() => {
    document.addEventListener('mousemove', updateCursorPosition);
  }, []);

  return (
    <>
      <CursorContext.Provider value={{cursorPosition}}>
        <authContext.Provider value={[auth, setAuth]}>
          <adminContext.Provider value={[admin, setAdmin]}>

            <GlobalStyle/>

            <Display>
              <Header/>
              <MainWrapper>
                <ApolloProvider client={client}>
                  <Component {...pageProps} />
                </ApolloProvider>
              </MainWrapper>
            </Display>

          </adminContext.Provider>
        </authContext.Provider>
      </CursorContext.Provider>
    </>
  );
};

const Display = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

const MainWrapper = styled.main`
  max-width: 1420px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  
  @media ${BREAKPOINTS.laptop} {
    max-width: 100%;
    width: 100%;
    margin: 0;
    background-color: pink;
  }
  @media ${BREAKPOINTS.tablet} {
    margin-left: 40px;
    background-color: red;
  }
  @media ${BREAKPOINTS.mobile} {
    margin-left: 0;
    margin-top: 40px;
    background-color: blue;
  }
  @media ${BREAKPOINTS.smallMobile} {
    background-color: green;
  }
`

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    //border: 1px pink solid;
  }

  html, body {    
    background-color: ${COLOR.bg[0]};
    height: 100%;
  }
  
  main {
    width: 100%;
    background-color: $color-bg-1;
  }

  p,
  a,
  br,
  span,
  img,
  div,
  ul,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  input,
  textarea {
    color: ${COLOR.text[0]};
  }

  button {
    cursor: pointer;
    outline: none;
    border: none;
    background: transparent;
    color: inherit;

    &:focus {

    }

    &:disabled {

    }
  }

  //----- Text Tags ------\\\\
  a {
    text-decoration: none;
    color: inherit;
  }
`

export default _App;