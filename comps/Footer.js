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
      ease: [0.22, 1, 0.36, 1],
      delay: 1.1
    }
  }
};

const Footer = () => {
  return (
    <motion.footer
      className="lg:pt-16 xs:pt-8 flex flex-col gap-4 xs:pb-8 md:pb-16"
      variants={elementAppear}
      initial="hidden"
      animate="visible"
    >
      <nav id="social" aria-label="Social" className="flex flex-row gap-4">
        <a
          className="link-block"
          href="https://www.linkedin.com/in/mannylivi/"
          rel="noopener noreferrer"
          target="_blank"
        >
          LinkedIn
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
        <a
          className="link-block"
          href="https://x.com/MannyLivi"
          rel="noopener noreferrer"
          target="_blank"
        >
          X
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </nav>
      <div id="credit">
        <p className="type-small text-text-secondary dark:text-text-secondary-d">
          2026 &copy; Manny Livi. This site was designed in Figma, Next.js,
          Tailwind CSS and deployed via Vercel.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
