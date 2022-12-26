import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  
  return (
    <Html lang="en" >
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script defer src="https://unpkg.com/alpinejs@3.2.3/dist/cdn.min.js"></script>
        <script
          src="https://kit.fontawesome.com/78027e3817.js"
          crossorigin="anonymous"
        ></script>
      </body>
    </Html>
  );
}
