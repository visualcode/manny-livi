import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function IndexPage() {
  return (
    <main
      className="grid xs:gap-y-8 lg:grid-cols-[auto] xl:grid-cols-2 lg:gap-x-8 xxl:gap-x-16 xl:justify-items-center"
      aria-label="Main content"
    >
      <header className="flex flex-col xs:gap-8 lg:col-start-2 lg:pt-8 lg:pb-8 xl:gap-16 xl:pt-16 xl:pb-16">
        <h1 className="xs:display-xsmall sm:display-small xl:display-large">
          Manny Livi: UI and digital product designer
        </h1>
        <div className="flex flex-col xs:gap-4 xl:gap-8">
          <h2 className="xs:intro-small lg:intro">
            I'm a Digital Product and Interaction Designer focusing on visual
            design, UI patterns, micro-interactions and accessibility. I'm also
            proficient in building and scaling complex design systems and
            creating tokens, components, and documentation.
          </h2>
          <p className="xs:body-default xl:paragraph">
            I’m currently UI lead for 8x8 Agent Workspace, and I collaborate on
            the 8x8 Oxygen design system.
          </p>
        </div>
      </header>
      <section className="lg:col-start-1 lg:row-start-1 lg:w-72 lg:h-auto xl:w-auto xl:h-72">
        <Image
          src="/manny-liviportrait-picture.png"
          alt="Manny Livi Portrait image"
          width={224}
          height={224}
          layout="responsive"
          objectFit="cover"
          priority="true"
        />
      </section>
    </main>
  );
}
