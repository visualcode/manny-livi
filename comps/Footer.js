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
            type: 'spring',
            delay: 0.8,
            stifness: 238,
            Damping: 30,
            Mass: 1
        }
    }
}

const Footer = () => {
    return (
        <motion.footer 
            variants={ elementAppear }
            initial='hidden'
            animate='visible'
            className="mx-auto grid xxs:grid-flow-row xxs:auto-cols-fr xxs:grid-cols-1 xxs:grid-rows-1 xxs:gap-y-8 xxs:pl-6 xxs:pr-6 xxs:mt-16 xxs:mb-8 xs:mt-16 xs:mb-16 xs:pl-16 xs:pr-16 lg:mt-32 lg:mb-20 lg:pl-32 lg:pr-32 xxl:container">
            <ul id="social-links" className="inline-flex xxs:gap-4">
                <li><a href="mailto:emanuele.livi@gmail.com?subject=Request from mannylivi.com&body=" className="link xxs:text-bodySmall">Get in touch</a></li>
                <li><a href="https://twitter.com/emanuelelivi" className="link">Twitter</a></li>
                <li><a href="https://www.linkedin.com/in/liviemanuele/" className="link">Linkedin</a></li>
            </ul>
            <div id="credit" className="xxs:leading-9 xxs:tracking-7"><span className="row-start-1 text-secondary-l dark:text-secondary-d">2022 © manny livi.</span> This site was designed in figma, Next Js, tailwindcss & deployed via Vercel. </div>
        </motion.footer>
    );
}

    export default Footer;