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
            type: 'spring',
            delay: 0.8,
            stifness: 238,
            Damping: 30,
            Mass: 1
        }
    }
}

const Header = () => {
    return (
        <motion.header 
            variants={ elementAppear }
            initial='hidden'
            animate='visible'
            id="main-header" className="mx-auto xxs:mt-8 xxs:mb-16 xxs:pl-6 xxs:pr-6 xs:mt-16 xs:mb-16 xs:pl-16 xs:pr-16 lg:mt-20 lg:mb-32 lg:pl-32 lg:pr-32 xxl:container">
            <div id="brand-space">
                <div className="text-headingMedium leading-5 tracking-8 font-bold text-primary-l dark:text-primary-d">Manny <span className="text-secondary-l dark:text-secondary-d">Livi</span></div>
                <div className="text-headingXSmall leading-5 tracking-7 text-primary-l dark:text-primary-d">
                    London, UK / Remote
                </div>
            </div>
        </motion.header>
    );
}

export default Header;