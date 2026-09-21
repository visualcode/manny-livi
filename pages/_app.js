import Head from "next/head";
import { MotionConfig } from "framer-motion";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Layout from "../comps/Layout";
import "../styles/index.css";

const SITE_URL = "https://www.mannylivi.com";
const SITE_TITLE =
  "Manny Livi - UI Designer, Visual Designer and Design System Specialist";
const SITE_DESCRIPTION =
  "UI Designer, Visual Designer and Design System Strategist";
const OG_IMAGE = `${SITE_URL}/manny-livi-portrait-picture.jpg`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Manny Livi",
  jobTitle: "Design System Specialist",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  email: "hello@mannylivi.com",
  image: OG_IMAGE,
  address: {
    "@type": "PostalAddress",
    addressLocality: "London",
    addressCountry: "GB"
  },
  sameAs: [
    "https://www.linkedin.com/in/liviemanuele/",
    "https://x.com/MannyLivi"
  ]
};

function MyApp({ Component, pageProps }) {
  return (
    <MotionConfig reducedMotion="user">
      <Head>
        <title>{SITE_TITLE}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={SITE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Manny Livi" />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:title" content={SITE_TITLE} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="822" />
        <meta property="og:image:height" content="1247" />
        <meta property="og:image:alt" content="Portrait of Manny Livi" />
        <meta property="og:locale" content="en_GB" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={`${SITE_URL}/`} />
        <meta name="twitter:title" content={SITE_TITLE} />
        <meta name="twitter:description" content={SITE_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta name="twitter:image:alt" content="Portrait of Manny Livi" />
        <meta name="twitter:site" content="@MannyLivi" />

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
        <meta name="msapplication-TileColor" content="#603cba" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="color-scheme" content="light dark" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
      <SpeedInsights />
    </MotionConfig>
  );
}

export default MyApp;
