import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" />
                <link href="https://getbootstrap.com/docs/5.2/assets/css/docs.css" rel="stylesheet" />
            </Head>
            <body>
                <Main />
                <NextScript />
                <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js'></script>
                <script src="https://kit.fontawesome.com/78027e3817.js" crossorigin="anonymous"></script>
            </body>
        </Html>
    )
};  