import React from 'react'
import { motion } from "framer-motion";
import DesktopHero from "../../assets/hero.webp";
import MobileHero from "../../assets/mobile-hero.webp";
import HeroImg from "../../assets/heroImg.webp";
import { heroData } from "../../data/data"
import AnimatedText from '../common/AnimatedText';



const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const textReveal = {
  hidden: {
    clipPath: "inset(100% 0 0 0)",
    y: 20,
  },
  show: {
    clipPath: "inset(0% 0 0 0)",
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Hero = () => {
  return (
    <section id='home' className="relative w-full min-h-screen overflow-hidden flex justify-center items-center">
      <div className="container grid min-[700px]:grid-cols-[2fr_1fr] gap-6 mt-30 sm:mt-20 max-[700px]:text-center">
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
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="right">

          <motion.span variants={textReveal} initial="hidden" animate="show" className="items-center gap-3 bg-gold/30 border border-gold/60 inline-flex px-3 py-2 rounded-2xl mb-8">
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
          </motion.span>


          <motion.p
            variants={textReveal}
            className="text-text/90 text-sm mb-2">
            {heroData.eyebrow}
          </motion.p>

          <motion.h1
            variants={textReveal}
            className="font-bold leading-tight text-[clamp(2rem,4vw,3rem)]">
            I'm {heroData.name}
            <span className="block mt-1 bg-clip-text text-transparent bg-dark-gold-silver-text text-[clamp(1.7rem,3.5vw,2.8rem)] whitespace-nowrap">
              {heroData.role}
            </span>
          </motion.h1>

          <motion.h2
            variants={textReveal}
            className="mt-2 text-[clamp(1.2rem,2.4vw,2rem)] font-semibold">
            {heroData.heading}
            <span className='block mt-1 text-gold'>
              <AnimatedText />
            </span>
          </motion.h2>


          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y:0
            }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-4 max-[700px]:justify-center">
            {heroData.buttons.map((button, index) => (
              <motion.a
                key={button.href}
                href={button.href}
                className={`rounded-full border text-text-heading border-gold ${index == 0 ? "bg-dark-gold-silver shadow-lg shadow-gold/60 hover:text-black" : "bg-clip-text text-transparent bg-dark-gold-silver"}  hover:-translate-y-1.5 px-6 py-3 text-sm transition`}
              >
                {button.text}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* left content for mobile screen */}
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="min-[700px]:hidden max-w-125 mt-8 overflow-hidden rounded-2xl">
            <img className='' src={HeroImg} alt="hero image" />
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Hero
