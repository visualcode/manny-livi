import Link from "next/link";


export default function IndexPage() {
  return (
    <main className="container mx-auto lg:pl-32 lg:pr-32 xxs:pl-6 xxs:pr-6 grid lg:grid-cols-[14rem_minmax(14rem,_1fr)] lg:gap-x-32 lg:gap-y-12 xxs:grid-cols-1 xxs:grid-rows-3 xxs:gap-y-8">
      <div id="portrait-pic" className="xl:w-56 xl:h-56 md:w-40 md:h-40 xxs:w-32 xxs:h-32 rounded-full bg-white xxs:row-start-1">
        <img src="" alt="" />
      </div>
      <section id="hero-title" className="xxs:row-start-2 xxs:auto-cols-auto">
        <header>
          <h1 className="lg:text-displayXLarge lg:leading-3 md:text-displayLarge md:leading-0 xs:text-displayMedium xs:leading-0 xxs:text-displaySmall xxs:leading-2 font-bold">Manny Livi: UI and digital product designer</h1>
        </header>
      </section>
      <section id="hero-info" className="lg:row-start-2 lg:col-start-2 xxs:row-start-3 flex flex-col">
        <header className="mb-12">
          <h2 className="md:text-introMedium md:leading-5 md:tracking-8 xxs:text-introSmall xxs:leading-6 xxs:tracking-8 text-primary-l dark:text-primary-d">I'm a Digital Product and Interaction Designer focusing on visual design, UI patterns, micro-interactions and accessibility.<br/>I'm also proficient in building and scaling complex design systems and creating tokens, components, and documentation.</h2>
        </header>
        <p className="md:text-bodyLarge md:leading-8 md:tracking-8 text-primary-l xxs:text-bodySmall xxs:leading-9 xxs:tracking-6 dark:text-primary-d">I’m currently UI lead for <a href="https://www.8x8.com/products/contact-center/agent-workspace?locale=uk" className="link">8x8 Agent Workspace</a>, and I collaborate on the 8x8 Oxygen design system.</p>
      </section>
    </main>
  );
}
