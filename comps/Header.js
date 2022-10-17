import Navbar from "./Navbar";
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
          ease: [0.6, 0.01, -0.05, 0.95],
          delay: 1.1,
      }
  }
}

const Header = () => {
  return (
    <motion.header 
      className="xs:pb-8 xs:pt-8 lg:pb-16 md:pt-16"
      variants={elementAppear}
      initial= "hidden"
      animate="visible"
    >
      <div id="brand-space">
        <div className="brand text-text-primary dark:text-text-primary-d">Manny Livi </div>
        <div className="type-small text-text-secondary dark:text-text-secondary-d">
          London, UK / Remote
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
