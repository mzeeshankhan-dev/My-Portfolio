import React from 'react'
import { motion } from "framer-motion";
import DesktopHero from "../../assets/hero.webp";
import MobileHero from "../../assets/mobile-hero.webp";
import HeroImg from "../../assets/heroImg.webp";
import { heroData } from "../../data/data"
import AnimatedText from '../common/AnimatedText';

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex justify-center items-center">
      <div className="container grid min-[700px]:grid-cols-[2fr_1fr] gap-6 mt-20 max-[700px]:text-center">
        <picture className="absolute inset-0 -z-10 bg-body-bg">
          <source
            media="(max-width: 700px)"
            srcSet={MobileHero}
          />
          <img
            src={DesktopHero}
            alt="Hero background image"
            className=" absolute h-full w-full object-cover min-[1100px]:object-center sm:object-[60%_center]"
          />
          <div className='w-full h-full inset-0 absolute sm:bg-[linear-gradient(to_right,black_0%,transparent_30%)]' />
        </picture>

        {/* right content */}
        <div className="right">

          <span className="items-center gap-3 bg-gold/30 border border-gold/60 inline-flex px-3 py-2 rounded-2xl mb-8">
            {/* animated dot */}
            <span className="relative flex h-2.5 w-2.5 items-center justify-center">
              <motion.span
                animate={{
                  scale: [1, 1.8, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute h-full w-full rounded-full bg-[#D6B477]"
              />

              <motion.span
                animate={{
                  opacity: [0.75, 1, 0.75],
                  boxShadow: [
                    "0 0 4px rgba(214,180,119,0.25)",
                    "0 0 10px rgba(214,180,119,0.7)",
                    "0 0 4px rgba(214,180,119,0.25)",
                  ],
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative h-2 w-2 rounded-full bg-[#D6B477]"
              />
            </span>
            <p className='text-xs'>{heroData.availability}</p>
          </span>


          <p className="text-text/90 text-sm mb-2">
            {heroData.eyebrow}
          </p>

          <h1 className="font-bold leading-tight text-[clamp(2rem,4vw,3rem)]">
            I'm {heroData.name}
            <span className="block mt-1 text-gold">
              {heroData.role}
            </span>
          </h1>

          <h2 className="mt-2 text-[clamp(1.5rem,3vw,2.5rem)] font-semibold">
            {heroData.heading}
            <span className='block mt-1 text-gold'>
              <AnimatedText />
            </span>
          </h2>


          <div className="mt-8 flex flex-wrap gap-4 max-[700px]:justify-center">
            {heroData.buttons.map((button, index) => (
              <a
                key={button.href}
                href={button.href}
                className={`rounded-full border border-gold ${index == 0 ? "bg-gold shadow-lg shadow-gold/60" : "bg-transparent hover:border-gold "}  hover:-translate-y-1.5 px-6 py-3 text-sm transition hover:text-black`}
              >
                {button.text}
              </a>
            ))}
          </div>
        </div>

        {/* left content for mobile screen */}
        <div className="flex justify-center items-center">
          <div className="min-[700px]:hidden max-w-125 mt-8 overflow-hidden rounded-2xl">
            <img className='' src={HeroImg} alt="hero image" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
