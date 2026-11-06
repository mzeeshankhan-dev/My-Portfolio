import React from 'react'
import footerLogo from "../../assets/header-logo.png"
import { navLinks } from '../../data/data'
import { services } from '../../data/data'
import { contactData } from '../../data/data'
import footerImg from "../../assets/footer-bg.webp"

import { RiMailLine, RiMapPin2Line, RiCalendarLine } from "@remixicon/react"

const Footer = () => {
    return (
        <div
            style={{ backgroundImage: `linear-gradient(to left, rgba(0,0,0,0.8), transparent), url(${footerImg})` }}
            className=' bg-cover bg-center bg-no-repeat w-screen '>
            <div className="container pt-8 pb-4">
                <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
                    <div>
                        <div className='w-30 h-30 rounded-2xl'>
                            <img src={footerLogo} alt="footer-logo" />
                        </div>
                        <div className="footer-intro">
                            <p>Frontend Developer focused on building modern and responsive websites for clients worldwide.</p>
                        </div>
                    </div>
                    <div className="quick-links mt-8">
                        <h2 className='font-sans'>Quick Links</h2>
                        <div className="footer-links flex flex-col gap-2 mt-6 text-lightText text-sm">
                            {
                                navLinks.map((link) => (
                                    <a key={link.href} href={link.href}>{link.name}</a>
                                ))
                            }
                        </div>
                    </div>
                    <div className="footer-services mt-8">
                        <h2>Services</h2>
                        <div className="services flex flex-col gap-2 mt-6 text-lightText whitespace-nowrap text-sm">
                            {
                                services.map((service) => (
                                    <a key={service.number} href="#services">{service.title}</a>
                                ))
                            }
                        </div>
                    </div>
                    <div className="footer-contact mt-8">
                        <h2>Contact</h2>
                        <div className="contact flex flex-col gap-4 mt-6 text-lightText text-sm">
                            <a className='flex items-center gap-3' href={`mailto:${contactData.email.value}`}>
                                <RiMailLine />
                                {contactData.email.value}
                            </a>
                            <a className='flex items-center gap-3' href={`https://maps.google.com/?q=${encodeURIComponent(contactData.location.value)}`}>
                                <RiMapPin2Line />
                                {contactData.location.value}
                            </a>
                            <a className='flex items-center gap-3' href="#contact">
                                <RiCalendarLine />
                                {contactData.Availability.value}
                            </a>
                        </div>
                    </div>
                </div>
                <div className='border-t border-white/30 text-center pt-4 mt-8 text-lightText opacity-80'>
                    <p>© {new Date().getFullYear()} Muhammad Zeeshan Khan. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
