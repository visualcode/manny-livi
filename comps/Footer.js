const Footer = () => {
    return (
        <footer className="container mx-auto  grid xs:grid-cols-[14rem_minmax(14rem,_1fr)] gap-x-32 gap-y-5 lg:mt-32 lg:mb-20 lg:pl-32 lg:pr-32 md:mt-16 md:mb-16 md:pl-16 md:pr-16 xxs:mb-8 xxs:mt-16 xxs:pl-6 xxs:pr-6">
            <ul id="social-links" className="row-start-2 col-start-2 inline-flex space-x-5">
                <li><a href="" className="link">Get in touch</a></li>
                <li><a href="https://twitter.com/emanuelelivi" className="link">Twitter</a></li>
                <li><a href="https://www.linkedin.com/in/liviemanuele/" className="link">Linkedin</a></li>
            </ul>
            <div id="credit" className="row-start-1 col-start-2"><span className="row-start-1 text-secondary-l dark:text-secondary-d">2022 © manny livi.</span> This site was designed in figma, Next Js, tailwindcss & deployed via Vercel. </div>
            
        </footer>
    );
}

    export default Footer;