import Navbar from "./Navbar"

const Header = () => {
    return (
        <header className="flex mx-auto max-w-7xl lg:pt-20 lg:pb-20 md:pt-16 md:pb-16 xxl:px-0 md:px-16 sm:px-8 xxs:px-4 xxs:pt-8 xxs:pb-8">
            <div>
                {
                    <div title="back to the homepage" className="inline-block no-underline font-bold">
                        <span className="text-headingXSmall leading-10 text-primary-l dark:text-primary-d">Manny <span className='text-secondary-l dark:text-secondary-d'>Livi</span></span>
                    </div>
                }
                {
                    <span className="block text-secondary-l dark:text-secondary-d text-paragraphSmall leading-5">London, UK / Remote</span>
                }
            </div>
        </header>
    );
}

export default Header;