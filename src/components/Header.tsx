import Hamburger from "./ui/Hamburger";
import ThemeToggle from "./ui/ThemeToggle";

export default function Header() {

    return (
        <header className="w-full h-16 fixed top-0 left-0 bg-header flex justify-between items-center px-6 backdrop-blur-xl shadow shadow-gray-300/25 dark:shadow-gray-700/30 z-50">
            <section>
                <button className="cursor-pointer">
                    <h1 className="montserrat-alternates text-2xl text-main-gradient">ProFile</h1>
                </button>
            </section>

            <section>
                <ThemeToggle />
                <Hamburger color="bg-[#364153] dark:bg-[#d1d5dc]" />
            </section>
        </header>
    );
}