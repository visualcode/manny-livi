import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Header = () => {
    return (
        <header id="main-header" className="container mx-auto">
            <div className="">
                <div className="text-headingMedium leading-5 font-bold text-primary-l dark:text-primary-d">Manny <span className="text-secondary-l dark:text-secondary-d">Livi</span></div>
                <div className="text-headingXSmall leading-5 text-primary-l dark:text-primary-d">London, UK / Remote</div>
            </div>
        </header>
    );
}

export default Header;