
import { motion } from "framer-motion";
import {
    RiArrowRightUpLine,
    RiSparkling2Line,
    RiCodeSSlashLine,
} from "@remixicon/react";

import { skillsData } from "../../data/data";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 24,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const Skills = () => {
    return (
        <section
            id="skills"
            className="sectionCtr bg-section-bg"
        >
            {/* Decorative top line */}
            <div className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="container">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="mb-14 text-center"
                >
                    <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/[0.04] px-5 py-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_#D6B477]" />

                        <span className="text-[11px] font-semibold tracking-[0.25em] text-primary">
                            {skillsData.eyebrow}
                        </span>
                    </div>

                    <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                        {skillsData.heading}{" "}
                        <span className="font-serif font-normal italic text-primary">
                            {skillsData.highlight}
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base">
                        {skillsData.description}
                    </p>
                </motion.div>

                {/* Main layout */}
                <div className="grid items-center gap-12 xl:grid-cols-[1fr_300px] xl:gap-14">

                    {/* Skills grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5"
                    >
                        {skillsData.skills.map((skill, index) => {
                            const Icon = skill.icon;

                            return (
                                <motion.div
                                    key={skill.name}
                                    variants={cardVariants}
                                    whileHover={{ y: -7 }}
                                    transition={{ duration: 0.25 }}
                                    className={`group relative flex min-h-[175px] flex-col items-center justify-center overflow-hidden rounded-2xl border bg-surface/70 p-4 text-center transition-all duration-500 hover:border-primary/60 hover:bg-surface sm:min-h-[190px] sm:p-5 ${index === 0
                                        ? "border-primary/50 shadow-[0_0_25px_rgba(214,180,119,0.08)]"
                                        : "border-border"
                                        }`}
                                >
                                    {/* Hover glow */}
                                    <div className="pointer-events-none absolute -right-10 -top-10 size-28 rounded-full bg-primary/0 blur-3xl transition-all duration-500 group-hover:bg-primary/15" />

                                    {/* Corner decoration */}
                                    <span className="absolute right-3 top-3 text-[10px] tracking-widest text-muted/40 transition-colors group-hover:text-primary">
                                        0{index + 1}
                                    </span>

                                    {/* Icon */}
                                    <div className="relative mb-5 flex size-14 items-center justify-center rounded-xl border border-border bg-body-bg text-primary transition-all duration-500 group-hover:scale-110 group-hover:border-primary/40 group-hover:shadow-[0_0_20px_rgba(214,180,119,0.12)]">
                                        <Icon size={31} />
                                    </div>

                                    {/* Name */}
                                    <h3 className="relative text-sm font-semibold text-foreground transition-colors duration-300 group-hover:text-primary sm:text-base">
                                        {skill.name}
                                    </h3>

                                    {/* Category */}
                                    <span className="relative mt-2 text-[10px] tracking-wide text-muted sm:text-xs">
                                        {skill.category}
                                    </span>

                                    {/* Bottom accent */}
                                    <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-primary transition-all duration-500 group-hover:w-1/2" />
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* Right summary */}
                    <motion.div
                        initial={{ opacity: 0, x: 35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="flex flex-col items-center text-center xl:pl-2"
                    >
                        {/* Circular indicator */}
                        <div className="relative flex size-60 items-center justify-center rounded-full border border-primary/15 bg-[radial-gradient(circle,rgba(214,180,119,0.09)_0%,rgba(8,13,18,0)_70%)] sm:size-64">
                            {/* Outer ring */}
                            <div className="absolute inset-2 rounded-full border border-border" />

                            {/* Gold ring */}
                            <div className="absolute inset-4 rounded-full border-[3px] border-primary/20 shadow-[0_0_25px_rgba(214,180,119,0.08)]" />

                            {/* Decorative ring segments */}
                            <div className="absolute inset-4 rounded-full border-[3px] border-transparent border-t-primary border-r-primary/70 rotate-[-35deg]" />

                            {/* Small orbit dot */}
                            <span className="absolute right-9 top-10 size-3 rounded-full border-2 border-body-bg bg-primary shadow-[0_0_15px_#D6B477]" />

                            <div className="relative flex flex-col items-center">
                                <RiCodeSSlashLine
                                    size={28}
                                    className="mb-3 text-primary"
                                />

                                <span className="font-serif text-6xl font-semibold tracking-tight text-foreground">
                                    {skillsData.summary.number}
                                </span>

                                <span className="mt-2 text-xs tracking-[0.15em] text-muted">
                                    {skillsData.summary.label}
                                </span>
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="my-8 flex w-full max-w-[250px] items-center gap-3">
                            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-border" />
                            <RiSparkling2Line className="text-primary" size={17} />
                            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-border" />
                        </div>

                        {/* Learning message */}
                        <h3 className="font-serif text-2xl italic text-foreground">
                            {skillsData.summary.heading}
                        </h3>

                        <p className="mt-3 max-w-xs text-sm leading-7 text-muted">
                            {skillsData.summary.description}
                        </p>

                        {/* CTA */}
                        <a
                            href={skillsData.cta.href}
                            className="group mt-7 inline-flex items-center gap-3 rounded-full border border-primary/50 px-6 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary hover:bg-primary hover:text-body-bg"
                        >
                            {skillsData.cta.label}

                            <RiArrowRightUpLine
                                size={19}
                                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                        </a>
                    </motion.div>
                </div>

                {/* Bottom decorative line */}
                <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

                {/* Bottom note */}
                <div className="mt-6 flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
                    <p className="text-xs tracking-wide text-muted">
                        Crafted with curiosity, creativity & continuous learning.
                    </p>

                    <span className="inline-flex items-center gap-2 text-xs text-primary">
                        <RiSparkling2Line size={15} />
                        Always improving
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Skills;
