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
          Scaling digital products with Design Systems that deliver
        </h1>
        <div className="flex flex-col xs:gap-4 xl:gap-8">
          <h2 className="xs:intro-small md:intro">
          Helping companies grow through strategic design, robust systems, and seamless collaboration.
          </h2>
          <p className="xs:body-default xl:paragraph text-text-secondary dark:text-text-secondary-d">
            I design scalable systems and user experiences that drive innovation, consistency, and product growth.<br />
            I lead the Oxygen Design System at <a href="https://8x8.com/">8x8</a>, partnering with every SaaS product team to ship cohesive, high-performing experiences.
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
