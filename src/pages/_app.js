import React, {createContext, useContext, useEffect, useState} from 'react';
import {Header} from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import {authContext, adminContext} from "@/components/Context";
import '../style/styles.scss'
import {ApolloProvider} from "@apollo/client";
import {client} from "@/supabase/services";

const CursorContext = createContext();

export const useCursorContext = () => {
  return useContext(CursorContext);
};

const _App = ({Component, pageProps}) => {
  const [auth, setAuth] = useState(false)
  const [admin, setAdmin] = useState(false)

  const [cursorPosition, setCursorPosition] = useState({x: 0, y: 0});

  const updateCursorPosition = (e) => {
    setCursorPosition({x: e.clientX, y: e.clientY});
  };

  useEffect(() => {
    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <>
      <CursorContext.Provider value={{cursorPosition}}>
        <authContext.Provider value={[auth, setAuth]}>
          <adminContext.Provider value={[admin, setAdmin]}>

            <Header/>
            <main>
              <ApolloProvider client={client}>
                <Component {...pageProps} />
                <Footer/>
              </ApolloProvider>
            </main>

          </adminContext.Provider>
        </authContext.Provider>
      </CursorContext.Provider>


    </>
  )
    ;
};

export default _App;