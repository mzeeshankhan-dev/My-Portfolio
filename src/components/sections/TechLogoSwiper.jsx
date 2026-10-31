import React from 'react'
import { motion } from "framer-motion";
import { skills } from '../../data/data';

const TechLogoSwiper = () => {
  return (
    <section className='relative w-full overflow-hidden flex justify-center items-center border-y border-border'>
      <div className="container [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          initial={{
            x: 0
          }}
          animate={{
            x: "-50%"
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex items-center gap-12 sm:gap-16 w-max overflow-x-auto">
          <div className="flex whitespace-nowrap items-center gap-12 ">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <span className='w-max flex items-center text-sm sm:text-xl gap-2 sm:gap-4 text-[#6b7390] hover:text-text' key={skill.name}>
                  <Icon className='w-8 sm:w-10' size={48} />
                  {skill.name}
                </span>
              );
            })}
          </div>
          <div className="flex whitespace-nowrap items-center gap-12">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <span className='w-max flex items-center text-sm sm:text-xl gap-2 sm:gap-4 text-[#6b7390] hover:text-text' key={skill.name}>
                  <Icon className='w-8 sm:w-10' size={48} />
                  {skill.name}
                </span>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechLogoSwiper
