import React from 'react'
import footerLogo from "../../assets/header-logo.png"
import { navLinks } from '../../data/data'

const Footer = () => {
    return (
        <div className='bg-muted-gray w-screen '>
            <div className="container">
                <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                    <div>
                        <div className='w-30 h-30 rounded-2xl'>
                            <img src={footerLogo} alt="footer-logo" />
                        </div>
                        <div className="footer-intro">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, perspiciatis.</p>
                        </div>
                        <div className="footer-social-icon">
                            <span>icon</span>
                        </div>
                    </div>
                    <div className="quick-links">
                        <h2 className='font-sans'>Quick Links</h2>
                        <div className="footer-links">
                            {
                                navLinks.map((link) => (
                                    <a key={link.href} href={link.href}>{link.name}</a>
                                ))
                            }
                        </div>
                    </div>
                    <div className="footer-services">
                        <h2>Servises</h2>
                        <div className="services">
                            {/* {
                            Services.map((service)=>(
                                <a href="#Services">{service.name}</a>
                            ))
                        } */}
                            <h4>frontend development</h4>
                            <h4>frontend development</h4>
                            <h4>frontend development</h4>
                            <h4>frontend development</h4>
                            <h4>frontend development</h4>
                        </div>
                    </div>
                    <div className="footer-contact">
                        <h2>Footer Contact</h2>
                        <div className="contact">
                            <h4>absaj</h4>
                            <h4>absaj</h4>
                            <h4>absaj</h4>
                            <h4>absaj</h4>
                        </div>
                    </div>
                </div>
                <div className='border-t border-white/30 text-center pt-4 mt-8'>
                    <p>© {new Date().getFullYear()} Zeeshan Khan. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
