import React, {createContext, useContext, useEffect, useState} from 'react';
import {Header} from "@/widgets/general/Header";
import {ApolloProvider} from "@apollo/client";
import {client} from "@/supabase/services";
import styled, {createGlobalStyle} from "styled-components";
import {BREAKPOINTS, COLOR} from "@/style/variables";

const CursorContext = createContext();

export const useCursorContext = () => {
  return useContext(CursorContext);
};

const _App = ({Component, pageProps}) => {
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

        <GlobalStyle/>

        <Display>
          <Header/>
          <MainWrapper>
            <ApolloProvider client={client}>
              <Component {...pageProps} />
            </ApolloProvider>
          </MainWrapper>
        </Display>

      </CursorContext.Provider>
    </>
  );
};

const Display = styled.div`
  width: 100%;
  height: auto;
  display: flex;

  position: relative;

  @media ${BREAKPOINTS.mobile} {
    flex-direction: column;
  }
  //background-color: blue;
`

const MainWrapper = styled.main`
  width: 1420px;

  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin: 0 auto;

  position: relative;

  @media ${BREAKPOINTS.laptop} {
    width: 95.24vw;
    //margin: 0;
  }
  @media ${BREAKPOINTS.mobile} {
    width: 95%;
    margin: 11.11vw auto;
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
    scroll-behavior: smooth;
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

  a {
    text-decoration: none;
    color: inherit;
  }
`

export default _App;