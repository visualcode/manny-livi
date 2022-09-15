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
      type: "spring",
      delay: 0.8,
      stifness: 238,
      Damping: 30,
      Mass: 1
    }
  }
};

const Footer = () => {
  return <footer></footer>;
};

export default Footer;
