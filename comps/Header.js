import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="">
      <div id="brand-space">
        <div className="brand text-text-primary dark:text-text-primary-d">Manny Livi </div>
        <div className="type-small text-text-secondary dark:text-text-secondary-d">
          London, UK / Remote
        </div>
      </div>
    </header>
  );
};

export default Header;
