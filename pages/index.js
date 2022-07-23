import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function IndexPage() {
  return (
    <main className="mx-auto grid grid-cols-2 grid-rows-2 xxs:grid-flow-row xxs:auto-cols-fr xxs:grid-cols-1 xxs:grid-rows-1 xxs:gap-y-8 xxs:pl-6 xxs:pr-6 xs:gap-12 xs:mt-16 xs:mb-16 xs:pl-16 xs:pr-16 md:grid-cols-[auto] lg:pl-32 lg:pr-32 xxl:container xl:gap-x-32">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          delay: 0,
          stifness: 232,
          Damping: 16,
          Mass: 1.1
        }}
        id="portrait-pic"
        className="xl:w-56 xl:h-56 md:w-40 md:h-40 xxs:w-32 xxs:h-32 xxs:row-start-1"
      >
        <Image
          src="/manny-liviportrait-picture.png"
          alt="My Portrait image"
          width={224}
          height={224}
          layout="responsive"
          objectFit="cover"
          className="rounded-full"
          priority="true"
        />
      </motion.div>
      <section
        id="hero-title"
        className="xxs:row-start-1 xxs:auto-cols-auto md:row-start-1 md:auto-cols-auto"
      >
        <header>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              delay: 0.2,
              stifness: 400,
              Damping: 30,
              Mass: 1
            }}
            className="font-bold text-primary-l dark:text-primary-d xxs:text-displaySmall xxs:leading-2 xxs:tracking-3 xs:text-displayMedium xs:tracking-1 xs:leading-1 md:text-displayLarge md:leading-0 md:tracking-1 lg:text-displayXLarge lg:leading-3 lg:tracking-0 xxl:text-displayXLarge"
          >
            Manny Livi: UI and digital product designer
          </motion.h1>
        </header>
      </section>
      <section
        id="hero-info"
        className="flex flex-col xxs:gap-y-8 md:row-start-2 md:col-start-2"
      >
        <header>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              type: "spring",
              delay: 0.4,
              stifness: 400,
              Damping: 30,
              Mass: 1
            }}
            className="text-primary-l dark:text-primary-d xxs:text-introSmall xxs:leading-6 xxs:tracking-8 lg:text-introMedium lg:leading-5 lg:tracking-8"
          >
            I'm a Digital Product and Interaction Designer focusing on visual
            design, UI patterns, micro-interactions and accessibility.
            <br />
            I'm also proficient in building and scaling complex design systems
            and creating tokens, components, and documentation.
          </motion.h2>
        </header>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "spring",
            delay: 0.5,
            stifness: 400,
            Damping: 30,
            Mass: 1
          }}
          className="text-primary-l xxs:text-bodySmall xxs:leading-9 xxs:tracking-6 dark:text-primary-d lg:text-bodyLarge"
        >
          I’m currently UI lead for{" "}
          <a
            href="https://www.8x8.com/products/contact-center/agent-workspace?locale=uk"
            className="link"
          >
            8x8 Agent Workspace
          </a>
          , and I collaborate on the 8x8 Oxygen design system.
        </motion.p>
      </section>
    </main>
  );
}
