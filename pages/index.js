import Link from "next/link";
import Head from "next/head";


export default function IndexPage() {
  return (
    <main className="container mx-auto max-w-7xl md:pt-16 md:pb-16 xxs:pt-8 xxs:pb-8 xxl:px-0 md:px-16 sm:px-8 xxs:px-4">
      <Head>
        <title>Manny Livi - UI Designer, Visual Designer and Design System Specialist</title>
        <meta name="description" content="" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://www.mannylivi.com/"></meta>
        <meta property="og:title" content="Manny Livi - UI Designer, Visual Designer and Design System Strategist" />
        <meta property="og:description" content="UI Designer, Visual Designer and Design System Strategist"></meta>
        <meta property="og:image" content="/img/index.png"></meta>
        {/* Open Graph / Twitter */}
        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:url" content="https://livi.design/"></meta>
        <meta property="twitter:title" content=""></meta>
        <meta property="twitter:description" content=""></meta>
        <meta property="twitter:image" content="/img/index.png"></meta>
        {/* Apple assett */}
        <link rel="apple-touch-icon" sizes="180x180" href="../img/apple-touch-icon.png"></link>
        <link rel="canonical" href="https://livi.design/"></link>
        {/* Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="../img/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="../img/favicon-16x16.png"></link>
        <link rel="manifest" href="/site.webmanifest"></link>
        <link rel="mask-icon" href="../img/safari-pinned-tab.svg" color="#5bbad5"></link>
        <meta name="msapplication-TileColor" content="#603cba"></meta>
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <h1 className="xl:text-displayLarge xl:leading-[148px] lg:text-displayMedium lg:leading-[112px] md:text-displaySmall md:leading-[92px] sm:text-displayXSmall sm:leading-[72px] xxs:text-displayXXSmall xxs:leading-[64px] font-bold text-primary-l dark:text-primary-d">Manny Livi is a<br />UI and Digital Product Designer<span className="text-tertiary-l dark:text-tertiary-d">.</span></h1>
      <div className="sm:mt-16 xxs:mt-8 grid grid-cols-3">
        <h2 className="lg:col-span-2 lg:col-start-2 xxs:col-span-3 xxs:col-start-1 xl:text-headingLarge lg:text-headingMedium md:text-headingSmall sm:text-headingXSmall xxs:text-headingXSmall leading-snug font-normal text-secondary-l dark:text-secondary-d">I'm a Product and Interaction Designer focusing on visual design, UI patterns, micro-interactions and accessibility. I'm also an expert on building and scaling complex design systems, creating tokens, components, processes and documentation.</h2>
        <p className="sm:mt-16 xxs:mt-8 lg:col-span-2 lg:col-start-2 xxs:col-span-3 xxs:col-start-1 text-paragraphLarge">I’m currently UI lead for the awarded <a href="https://www.8x8.com/products/contact-center/agent-workspace?locale=uk">8x8 Agent Workspace</a>, and I collaborate on the 8x8 Oxygen design system.</p>
      </div>
    </main>
  );
}
