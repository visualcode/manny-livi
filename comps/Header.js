import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="lg:pb-16 xs:pb-8">
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
