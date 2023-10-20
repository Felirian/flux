import Document, {Html, Head, Main, NextScript} from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="UTF-8"/>

          <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
          <meta
            name="description"
            content="Скоро здесь будет крутой сайт по продаже цифровых ключей стим"
          />
          <meta content="origin" id="mref" name="referrer"/>
          <link
            href="https://unpkg.com/aos@2.3.1/dist/aos.css"
            rel="stylesheet"
          />

          <meta name="msapplication-TileColor" content="#2b5797"/>
          <meta name="theme-color" content="#000000"/>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest"/>
          <link
            rel="mask-icon"
            href="/favicon/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="theme-color" content="#ffffff"/>
        </Head>
        <body>
        <Main/>
        <NextScript/>




        </body>
      </Html>
    );
  }
}

export default MyDocument;
