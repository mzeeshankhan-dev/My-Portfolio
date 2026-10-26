import { useState, useEffect } from 'react';
import HeaderLogo from "../../assets/header-logo.png"
import { navLinks } from "../../data/data"
import { Menu, X } from "lucide-react";

export default function Header() {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

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

    return (
        <header className={`fixed top-0 w-full flex justify-center items-center pt-6 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>

            <div className="header-wraper h-25 flex items-center justify-between rounded-2xl bg-black/10 backdrop-blur-xl border-2 border-black/1 px-6 py-4 w-[90%] min-[1200px]:w-300 min-[1200px]:mx-auto ">

                <div className="header-drawer">
                    <button type="button" className="flex h-12 w-12 items-center justify-center rounded-full lg:hidden" aria-label="Open menu" aria-expanded="false">
                        <Menu size={28} />
                    </button>

                    <div className="menu-drawer flex flex-col gap-6 p-6 w-full absolute top-[80%] left-0 rounded-b-2xl border-x border-b border-black/1 border-2 bg-amber-200">
                        {/* <div className="menu-drawer-header flex justify-between">
                            <div><h2>Menu</h2></div>
                            <div>
                                <X size={28} />
                            </div>
                        </div> */}
                        <nav className='flex flex-col'>
                            {navLinks.map((link) => (
                                <a key={link.href} href={link.href}>{link.name}</a>
                            ))}
                        </nav>
                    </div>
                </div>

                <div className="logo w-30 h-30">
                    <a href="#">
                        <img src={HeaderLogo} alt="Logo" />
                    </a>
                </div>

                <nav className="flex items-center gap-4">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href}
                            className=''
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className="px-4 py-2 bg-gold rounded-xl">
                    <a href="#Contact">Let's Talk</a>
                </div>
            </div>
        </header>
    );
}