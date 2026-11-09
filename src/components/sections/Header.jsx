import { useState, useEffect } from 'react';
import HeaderLogo from "../../assets/header-logo.png"
import { navLinks } from "../../data/data"
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [activeSection, setActiveSection] = useState("home");
    const [mobileOpen, setMobileOpen] = useState(false)


    useEffect(() => {

        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                if (window.scrollY > lastScrollY && window.scrollY > 100) {
                    setShowNavbar(false);
                } else {
                    setShowNavbar(true);
                }
            }
            setLastScrollY(window.scrollY);
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-35% 0px -55% 0px",
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        setMobileOpen(false)
    }, []);

    return (
        <header className={`fixed top-0 w-full flex flex-col justify-center z-10 items-center pt-4 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>

            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className={` h-18 sm:h-20 flex items-center justify-between ${mobileOpen ? "rounded-t-2xl border-x border-t" : "rounded-2xl border"}  bg-white/10 backdrop-blur-xl border-white/10 px-6 py-4 w-[90%] sm:w-[80%] lg:w-[70%] min-[1300px]:mx-auto `}>

                <button type="button"
                    className="flex h-12 w-12 items-center justify-center rounded-full lg:hidden"
                    aria-label={mobileOpen ? "Close menu" : "Open menu"}
                    aria-expanded={mobileOpen}
                    onClick={() => setMobileOpen((v) => !v)}>
                    {mobileOpen ? <X className="h-7 w-7" aria-hidden="true" /> : <Menu className="h-7 w-7" aria-hidden="true" />}
                </button>

                <div className="logo w-18 h-18 sm:w-20 sm:h-20 lg:w-25 lg:h-25">
                    <a href="#">
                        <img src={HeaderLogo} alt="Logo" />
                    </a>
                </div>

                <nav className="hidden lg:flex items-center gap-4 text-text-heading font-display">
                    {navLinks.map((link) => (
                        <a
                            key={link.href} href={link.href}
                            className={`transition-all duration-300 ${activeSection === link.id
                                ? "after:content-[''] after:block after:w-full after:h-0.5 rounded-full after:bg-primary relative after:absolute after:-bottom-1.5 after:left-0 text-primary"
                                : "text-text-heading hover:text-primary"
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className="px-1.5 py-1.5 sm:px-3 lg:px4 text-text-heading rounded-xl hover:-translate-y-1.5 transition-all
                 bg-dark-gold-silver border border-gold">
                    <a href="#contact">Let's Talk</a>
                </div>
            </motion.div>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="menu-drawer flex flex-col p-6 overflow-hidden lg:hidden rounded-b-2xl border-x border-b border-white/10 bg-white/10 backdrop-blur-xl px-6 py-4 w-[90%] sm:w-[80%] lg:w-[70%] min-[1300px]:mx-auto"
                    >
                        <ul className='flex flex-col gap-0.5 text-text-heading font-display'>
                            {navLinks.map((link, index) => (
                                <li className='inline-flex' key={index}>
                                    <a
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className={` px-6 py-3 rounded-lg w-full hover:bg-body-bg/80 ${activeSection === link.id ? "bg-body-bg/80" : "bg-body-bg/60 backdrop-blur-sm"}`}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}