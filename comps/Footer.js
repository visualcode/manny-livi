const Footer = () => {
    return (
        <footer className="container mx-auto pl-32 pr-32 mb-20 mt-32 grid xs:grid-cols-[14rem_minmax(14rem,_1fr)] gap-x-32 gap-y-12">
            <div id="credit"><span className="row-start-1 col-start-2 text-secondary-l dark:text-secondary-d">2022 © manny livi.</span> This site was designed in figma, Next Js, tailwindcss & deployed via Vercel. </div>
            <ul id="social-links" className="inline-flex space-x-5">
                <li><a href="" className="link">Get in touch</a></li>
                <li><a href="https://twitter.com/emanuelelivi" className="link">Twitter</a></li>
                <li><a href="https://www.linkedin.com/in/liviemanuele/" className="link">Linkedin</a></li>
            </ul>
        </footer>
    );
}

    export default Footer;