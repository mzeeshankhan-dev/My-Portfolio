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
        <header className={`fixed top-0 w-full flex justify-center z-10 items-center pt-6 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>

            <div className={`header-wraper h-20 sm:h-25 flex items-center justify-between ${mobileOpen ? "rounded-t-2xl" : " rounded-2xl"} ${mobileOpen ? "border-x" & "border-t" : "border"} bg-white/10 backdrop-blur-2xl border-black/1 px-6 py-4 w-[90%] min-[1200px]:w-300 min-[1200px]:mx-auto `}>

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
                            className="menu-drawer flex flex-col p-6 w-full absolute top-full left-0 rounded-b-2xl border-x border-b border-black/1 border-2 bg-white/10 backdrop-blur-lg">
                            <nav className='flex flex-col gap-1'>
                                {navLinks.map((link, index) => (
                                    <motion.a
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1}}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.15,
                                        }}
                                        className='bg-gray-700 px-6 py-2 rounded-xl hover:bg-gray-800' key={index} href={link.href}>
                                        {link.name}
                                    </motion.a>
                                ))}
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="logo w-20 h-20 sm:w-25 sm:h-25 lg:w-30 lg:h-30">
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

                <div className="px-2 py-2 sm:px-3 lg:px4 bg-gold rounded-xl">
                    <a href="#Contact">Let's Talk</a>
                </div>
            </div>
        </header>
    );
}