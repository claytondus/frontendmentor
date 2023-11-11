import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>Frontend Mentor | Workit landing page</title>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./images/favicon-32x32.png"
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default CustomApp;
