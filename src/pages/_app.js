import React, {useEffect, useState} from 'react';
import {Header} from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import {authContext, adminContext, xMousePos, yMousePos} from "@/components/Context";
import '../style/styles.scss'
import {ApolloProvider} from "@apollo/client";
import {client} from "@/supabase/services";

const _App = ({Component, pageProps}) => {
  const [auth, setAuth] = useState(false)
  const [admin, setAdmin] = useState(false)
  const [xMos, setXMos] = useState()
  const [yMos, setYMos] = useState()
  //const [theme, setTheme] = useState('dark')

  useEffect(() => {
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
      <xMousePos.Provider value={[xMos, setXMos]}>
        <yMousePos.Provider value={[yMos, setYMos]}>

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

        </yMousePos.Provider>
      </xMousePos.Provider>
    </>
  )
    ;
};

export default _App;