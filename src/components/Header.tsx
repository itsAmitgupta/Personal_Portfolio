import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="w-full pt-5 pb-10 relative z-50">
            <nav className="w-full flex items-center justify-between">
                <Link
                    className="font-bold hover:text-white uppercase text-light-gray text-lg tracking-widest"
                    to="/"
                >
                    Amit Gupta
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden max-md:hidden md:flex items-center gap-6 text-lg text-light-gray">
                    <a className="hover:text-white" href="/#work-experience">
                        Work Experience
                    </a>
                    <a className="hover:text-white" href="/#projects">
                        Projects
                    </a>
                    <a className="hover:text-white" href="/#contact">
                        Contact
                    </a>
                </div>

                {/* Hamburger Icon */}
                <button
                    className="md:hidden text-2xl text-white"
                    onClick={() => setMenuOpen(true)}
                >
                    <FiMenu />
                </button>
            </nav>

            {/* Overlay Menu */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-95 text-white flex flex-col items-start justify-start px-10 pt-24 gap-10 transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {/* Close Icon */}
                <button
                    className="absolute top-6 right-6 text-3xl"
                    onClick={() => setMenuOpen(false)}
                >
                    <FiX />
                </button>

                <a
                    href="/#work-experience"
                    className="text-2xl hover:text-gray-400"
                    onClick={() => setMenuOpen(false)}
                >
                    Work Experience
                </a>
                <a
                    href="/#projects"
                    className="text-2xl hover:text-gray-400"
                    onClick={() => setMenuOpen(false)}
                >
                    Projects
                </a>
                <a
                    href="/#contact"
                    className="text-2xl hover:text-gray-400"
                    onClick={() => setMenuOpen(false)}
                >
                    Contact
                </a>
            </div>
        </div>
    );
};

export default Header;
