import React, {useEffect} from 'react';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import '../styles/style.scss'
const _App = ({Component, pageProps}) => {

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
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
};

export default _App;