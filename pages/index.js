import Link from "next/link";


export default function IndexPage() {
  return (
    <main className="">
      <section id="hero">
        <h1 className="">Manny Livi is a<br />UI and Digital Product Designer<span className="text-tertiary-l dark:text-tertiary-d">.</span></h1>
      </section>
      <div className="">
        <h2 className="">I'm a Product and Interaction Designer focusing on visual design, UI patterns, micro-interactions and accessibility. I'm also an expert on building and scaling complex design systems, creating tokens, components, processes and documentation.</h2>
        <p className="sm:mt-16 xxs:mt-8 lg:col-span-2 lg:col-start-2 xxs:col-span-3 xxs:col-start-1 text-paragraphLarge">I’m currently UI lead for the awarded <a href="https://www.8x8.com/products/contact-center/agent-workspace?locale=uk">8x8 Agent Workspace</a>, and I collaborate on the 8x8 Oxygen design system.</p>
      </div>
    </main>
  );
}
