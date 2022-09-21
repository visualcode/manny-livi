//import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer class="lg:pt-16 xs:pt-8 flex flex-col gap-4">
      <div id="social" className="flex flex-row gap-4">
        <a className="link-block" href="">
          Get in touch
        </a>
        <a className="link-block" href="">
          Twitter
        </a>
        <a className="link-block" href="">
          Linkedin
        </a>
      </div>
      <div id="credit">
        <p className="type-small text-text-secondary dark:text-text-secondary-d">
          2022 © manny livi. This site was designed in Figma, Next Js,
          Tailwindcss & deployed via Vercel.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
