import Link from "next/link";


export default function IndexPage() {
  return (
    <main className="container mx-auto pl-32 pr-32 grid xs:grid-cols-[14rem_minmax(14rem,_1fr)] gap-x-32 gap-y-12">
      <div id="portrait-pic" className="w-56 h-56 rounded-full bg-white">
        <img src="" alt="" />
      </div>
      <section id="hero-title" className="">
        <header>
          <h1 className="text-displayXLarge leading-3 font-bold">Manny Livi: UI and digital product designer</h1>
        </header>
      </section>
      <section id="hero-info" className="row-start-2 col-start-2 flex flex-col">
        <header className="mb-12">
          <h2 className="text-introMedium leading-5 tracking-8 text-primary-l dark:text-primary-d">I'm a Digital Product and Interaction Designer focusing on visual design, UI patterns, micro-interactions and accessibility.<br/>I'm also proficient in building and scaling complex design systems and creating tokens, components, and documentation.</h2>
        </header>
        <p className="text-bodySmall leading-8 tracking-5 text-primary-l dark:text-primary-d">I’m currently UI lead for <a href="https://www.8x8.com/products/contact-center/agent-workspace?locale=uk" className="link">8x8 Agent Workspace</a>, and I collaborate on the 8x8 Oxygen design system.</p>
      </section>
    </main>
  );
}
