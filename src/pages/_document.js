import Document, {Html, Head, Main, NextScript} from "next/document";
import {ServerStyleSheet} from "styled-components";

class MyDocument extends Document {

  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8"/>
          <meta name="yandex-verification" content="491c4f8021ab2254"/>
          <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
          <meta
            name="description"
            content="Интернет-магазин по продаже цифровых ключей Steam"
          />
          <meta content="origin" id="mref" name="referrer"/>
          <link
            href="https://unpkg.com/aos@2.3.1/dist/aos.css"
            rel="stylesheet"
          />
          {/*-----------------------------------------------шрифты-----------------------------------------------*/}
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
          <link
            href="https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400;500&family=Open+Sans:wght@300;400;600&display=swap"
            rel="stylesheet"/>
          {/*-----------------------------------------------иконки-----------------------------------------------*/}
          <meta name="msapplication-TileColor" content="#2b5797"/>
          <meta name="theme-color" content="#000000"/>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
          />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0d0d0d"/>
          <meta name="msapplication-TileColor" content="#ff0000"/>
          <meta name="theme-color" content="#ffffff"/>
        </Head>

        <body>
        <Main/>
        <NextScript/>

        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(97254749, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
   `,
          }}
        ></script>
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/97254749"
              style={{position: "absolute", left: "-9999px"}}
              alt=""
            />
          </div>
        </noscript>

        </body>
      </Html>
    );
  }
}

export default MyDocument;
