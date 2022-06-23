import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Header = () => {
    return (
        <header id="main-header" className="container mx-auto pl-32 pr-32 lg:mt-20 lg:mb-32 lg:pl-32 lg:pr-32 md:mt-16 md:mb-16 md:pl-16 md:pr-16 xxs:mt-8 xxs:mb-16 xxs:pl-6 xxs:pr-6">
            <div id="brand-space">
                <div className="text-headingMedium leading-5 tracking-8 font-bold text-primary-l dark:text-primary-d">Manny <span className="text-secondary-l dark:text-secondary-d">Livi</span></div>
                <div className="text-headingXSmall leading-5 tracking-7 text-primary-l dark:text-primary-d">London, UK / Remote</div>
            </div>
        </header>
    );
}

export default Header;