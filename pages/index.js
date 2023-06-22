import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function IndexPage() {
  return (
    <main
      className="grid xs:gap-y-8 lg:grid-cols-[auto] xl:grid-cols-2 lg:gap-x-8 inter:gap-x-16 xl:justify-items-center"
      aria-label="Main content"
    >
      <motion.header
        className="flex flex-col xs:gap-8 lg:col-start-2 lg:pt-0 lg:pb-0 xl:gap-16 xxl:pt-16 xxl:pb-16 xl:justify-center"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: [0.6, 0.01, -0.05, 0.95],
          delay: 0.2,
          duration: 0.8
        }}
      >
        <h1 className="xs:display-xsmall sm:display-small inter:display-large">
          Manny Livi: UI and digital product designer
        </h1>
        <div className="flex flex-col xs:gap-4 xl:gap-8">
          <h2 className="xs:intro-small md:intro">
            I'm a Digital Product and Interaction Designer with expertise in
            visual design, UI patterns, micro-interactions, and accessibility.
            Additionally, I possess strong skills in developing and scaling
            complex design systems.
          </h2>
          <p className="xs:body-default xl:paragraph text-text-secondary dark:text-text-secondary-d">
            I’m currently UI lead for{" "}
            <a
              className="link"
              href="https://www.8x8.com/products/contact-center/agent-workspace?locale=uk"
            >
              8x8 Agent Workspace
            </a>
            , and I collaborate on the 8x8 Oxygen design system.
          </p>
        </div>
      </motion.header>
      <motion.section
        className="lg:col-start-1 lg:row-start-1 lg:w-72 lg:h-auto xl:w-full xl:h-full"
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: [0.6, 0.01, -0.05, 0.95],
          delay: 0.6,
          duration: 0.8
        }}
      >
        <Image
          src="/manny-livi-portrait-picture.jpg"
          alt="Manny Livi Portrait image"
          width={822}
          height={1247}
          layout="responsive"
          objectFit="cover"
          priority="true"
        />
      </motion.section>
    </main>
  );
}
