import Link from "next/link";
import { motion } from "framer-motion";

const elementAppear = {
  hidden: {
    opacity: 0,
    y: -16
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

const Header = () => {
  return (
    <motion.header
      className="xs:pb-8 xs:pt-8 lg:pb-16 md:pt-16"
      variants={elementAppear}
      initial="hidden"
      animate="visible"
    >
      <div id="brand-space">
        <p className="brand text-text-primary dark:text-text-primary-d">
          <Link href="/" className="text-inherit no-underline hover:no-underline">
            Manny Livi
          </Link>
        </p>
        <p className="type-small text-text-secondary dark:text-text-secondary-d">
          London, UK / Remote
        </p>
      </div>
    </motion.header>
  );
};

export default Header;
