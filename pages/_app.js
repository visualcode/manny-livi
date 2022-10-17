// import App from 'next/app'
import Layout from "../comps/Layout";
import "../styles/index.css";
import Head from "next/head";
import Image from "next/image";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>
          Manny Livi - UI Designer, Visual Designer and Design System Specialist
        </title>
        <meta
          name="description"
          content="UI Designer, Visual Designer and Design System Strategist"
        />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://www.mannylivi.com/"></meta>
        <meta
          property="og:title"
          content="Manny Livi - UI Designer, Visual Designer and Design System Strategist"
        />
        <meta
          property="og:description"
          content="UI Designer, Visual Designer and Design System Strategist"
        ></meta>
        <meta property="og:image" content="/img/index.png"></meta>
        {/* Open Graph / Twitter */}
        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:url" content="https://www.mannylivi.com/"></meta>
        <meta property="twitter:title" content=""></meta>
        <meta property="twitter:description" content=""></meta>
        <meta property="twitter:image" content="/img/index.png"></meta>
        {/* Apple assett */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="../img/apple-touch-icon.png"
        ></link>
        <link rel="canonical" href="https://www.mannylivi.com/"></link>
        {/* Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="mask-icon"
          href="../img/safari-pinned-tab.svg"
          color="#5bbad5"
        ></link>
        <meta name="msapplication-TileColor" content="#603cba"></meta>
        <meta name="theme-color" content="#ffffff"></meta>
        <script async data-api="/_hive" src="/bee.js"></script>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
