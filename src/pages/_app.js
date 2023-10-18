import React from 'react';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import '@/style/styles.scss'
const _App = ({Component, pageProps}) => {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
};

export default _App;