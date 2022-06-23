import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Header = () => {
    return (
        <header id="main-header" className="container mx-auto pl-32 pr-32 mt-20 mb-32">
            <div id="brand-space">
                <div className="text-headingMedium leading-5 tracking-8 font-bold text-primary-l dark:text-primary-d">Manny <span className="text-secondary-l dark:text-secondary-d">Livi</span></div>
                <div className="text-headingXSmall leading-5 tracking-7 text-primary-l dark:text-primary-d">London, UK / Remote</div>
            </div>
        </header>
    );
}

export default Header;