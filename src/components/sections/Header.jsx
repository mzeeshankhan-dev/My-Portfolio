import { useState, useEffect } from 'react';
import HeaderLogo from "../../assets/header-logo.png"
import { navLinks } from "../../data/data"
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {

        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                if (window.scrollY > lastScrollY && window.scrollY > 100) {
                    setShowNavbar(false);
                } else {
                    setShowNavbar(true);
                }

                setLastScrollY(window.scrollY);
            }
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    useEffect(() => {
        setMobileOpen(false)
    }, [])

    return (
        <header className={`fixed top-0 w-full flex justify-center z-10 items-center pt-4 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>

            <div className={` h-18 sm:h-20 flex items-center justify-between ${mobileOpen ? "rounded-t-2xl border-x border-t" : "rounded-2xl border"}  bg-white/10 backdrop-blur-xl border-white/10 px-6 py-4 w-[90%] sm:w-[80%] lg:w-[70%] min-[1300px]:mx-auto `}>

                <button type="button"
                    className="flex h-12 w-12 items-center justify-center rounded-full lg:hidden"
                    aria-label={mobileOpen ? "Close menu" : "Open menu"}
                    aria-expanded={mobileOpen}
                    onClick={() => setMobileOpen((v) => !v)}>
                    {mobileOpen ? <X className="h-7 w-7" aria-hidden="true" /> : <Menu className="h-7 w-7" aria-hidden="true" />}
                </button>

                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.30 }}
                            className="menu-drawer flex flex-col p-6 lg:hidden w-full absolute top-full left-0 rounded-b-2xl border-x border-b border-white/10 border-2 bg-white/10 backdrop-blur-3xl">
                            <nav className='flex flex-col gap-1'>
                                {navLinks.map((link, index) => (
                                    <motion.a
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.15,
                                        }}
                                        className='bg-card-bg px-6 py-2 rounded-xl hover:bg-gray-800' key={index} href={link.href}>
                                        {link.name}
                                    </motion.a>
                                ))}
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="logo w-18 h-18 sm:w-20 sm:h-20 lg:w-25 lg:h-25">
                    <a href="#">
                        <img src={HeaderLogo} alt="Logo" />
                    </a>
                </div>

                <nav className="hidden lg:flex items-center gap-4">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href}
                            className=''
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className="px-2 py-2 sm:px-3 lg:px4 bg-gold rounded-xl hover:-translate-y-1.5 transition-all">
                    <a href="#contact">Let's Talk</a>
                </div>
            </div>
        </header>
    );
}