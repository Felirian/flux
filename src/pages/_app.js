import React, {useEffect, useState} from 'react';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import {authContext, adminContext} from "@/components/Context";
import '../style/button.scss'
import {GlobalStyle, globalStyle} from "@/style/globals";
import {ApolloProvider} from "@apollo/client";
import {client} from "@/supabase/services";
import {LiveBorder} from "@/style/styledComponents";

const _App = ({Component, pageProps}) => {

  const [auth, setAuth] = useState(false)
  const [admin, setAdmin] = useState(false)
  //const [theme, setTheme] = useState('dark')

  useEffect(() => {
    //let cards = document.getElementsByName(<LiveBorder/>)
    let cards = document.querySelectorAll(".Button");
    document.addEventListener('mousemove', e => {
      for (let i = 0; i < cards.length; i++) {
        const rect = cards[i].getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;
        cards[i].style.setProperty("--mouse-x", `${x}px`);
        cards[i].style.setProperty("--mouse-y", `${y}px`);
      }
    });
  }, []);

  return (
    <>
      <GlobalStyle/>
      <Header/>
      <main>
        <authContext.Provider value={[auth, setAuth]}>
          <adminContext.Provider value={[admin, setAdmin]}>
            <ApolloProvider client={client}>
              <Component {...pageProps} />
              <Footer/>
            </ApolloProvider>
          </adminContext.Provider>
        </authContext.Provider>
      </main>

    </>
  );
};

export default _App;