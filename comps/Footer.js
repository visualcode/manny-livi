import { motion } from "framer-motion";

const elementAppear = {
  hidden: {
    opacity: 0,
    y: 16
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      delay: 1.1
    }
  }
};

const Footer = () => {
  return (
    <motion.footer
      class="lg:pt-16 xs:pt-8 flex flex-col gap-4 xs:pb-8 md:pb-16"
      variants={elementAppear}
      initial="hidden"
      animate="visible"
    >
      <div id="social" className="flex flex-row gap-4">
        <a
          className="link-block"
          href="mailto:hi@mannylivi.com?subject=Request from mannylivi.com&body="
        >
          Get in touch
        </a>
        <a className="link-block" href="https://twitter.com/MannyLivi">
          Twitter
        </a>
        <a
          className="link-block"
          href="https://www.linkedin.com/in/liviemanuele/"
        >
          Linkedin
        </a>
      </div>
      <div id="credit">
        <p className="type-small text-text-secondary dark:text-text-secondary-d">
          2022 © manny livi. This site was designed in Figma, Next Js,
          Tailwindcss & deployed via Vercel.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
