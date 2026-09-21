import { motion } from "framer-motion";
import Image from "next/image";

export default function IndexPage() {
  return (
    <main
      id="main-content"
      className="grid xs:gap-y-8 lg:grid-cols-[auto] xl:grid-cols-2 lg:gap-x-8 inter:gap-x-16 xl:justify-items-center"
    >
      <motion.div
        className="flex flex-col xs:gap-8 lg:col-start-2 lg:pt-0 lg:pb-0 xl:gap-16 xxl:pt-16 xxl:pb-16 xl:justify-center"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: [0.22, 1, 0.36, 1],
          delay: 0.2,
          duration: 0.8
        }}
      >
        <h1 className="xs:display-xsmall sm:display-small inter:display-large">
          AI makes things fast. Design judgement makes them good.
        </h1>
        <div className="flex flex-col xs:gap-4 xl:gap-8">
          <p className="xs:intro-small md:intro">
            I&apos;m Manny, a Design Systems Architect and Product Designer, with
            eighteen years designing human-centred digital products and the last
            ten in design systems.
          </p>
          <ul className="m-0 flex list-none flex-col p-0 xs:gap-4 xl:gap-8 xs:body-default xl:paragraph text-text-primary dark:text-text-primary-d">
            <li>
              <strong className="font-semibold">Design systems.</strong> Tokens,
              components, guidelines and governance your designers and engineers
              actually use.
            </li>
            <li>
              <strong className="font-semibold">Product design.</strong> Complex,
              data-heavy interfaces taken from discovery to shipped product,
              starting from the right problem.
            </li>
            <li>
              <strong className="font-semibold">AI-assisted building.</strong>{" "}
              When a gap needs more than a spec, I build the fix myself, then
              judge whether it&apos;s actually good.
            </li>
          </ul>
          <p className="xs:body-default xl:paragraph text-text-primary dark:text-text-primary-d">
            Open to full-time, fractional, and consulting work in design systems
            or product design.
          </p>
          <a
            className="link-block"
            href="mailto:hello@mannylivi.com?subject=Request from mannylivi.com"
          >
            Let&apos;s talk
          </a>
        </div>
      </motion.div>
      <motion.div
        className="lg:col-start-1 lg:row-start-1 lg:w-72 lg:h-auto xl:w-full xl:h-full"
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: [0.22, 1, 0.36, 1],
          delay: 0.6,
          duration: 0.8
        }}
      >
        <Image
          src="/manny-livi-portrait-picture.jpg"
          alt="Portrait of Manny Livi"
          width={822}
          height={1247}
          sizes="(min-width: 50rem) 50vw, 100vw"
          className="h-auto w-full object-cover"
          priority
        />
      </motion.div>
    </main>
  );
}
