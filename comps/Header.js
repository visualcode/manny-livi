import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header>
      <div id="brand-space">
        <div className="brand text-text-primary">Manny Livi </div>
        <div className="type-small text-text-secondary">
          London, UK / Remote
        </div>
      </div>
    </header>
  );
};

export default Header;
