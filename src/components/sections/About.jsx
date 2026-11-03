
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    RiArrowDownLine,
    RiArrowUpLine,
    RiGraduationCapLine,
    RiSparkling2Line,
} from "@remixicon/react";

import { aboutData } from "../../data/data";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.14,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 25,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const About = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <section
            id="about"
            className="sectionCtr"
        >
            {/* Background glow */}
            <div className="pointer-events-none absolute -left-40 top-20 -z-10 size-[450px] rounded-full bg-primary/[0.06] blur-[140px]" />

            <div className="container">

                {/* Section heading */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mb-14 text-center"
                >
                    <motion.div
                        variants={itemVariants}
                        className="mb-6 inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/[0.04] px-5 py-2"
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_#D6B477]" />

                        <span className="text-xs font-semibold tracking-[0.25em] text-primary">
                            {aboutData.eyebrow}
                        </span>
                    </motion.div>

                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
                    >
                        {aboutData.heading}{" "}
                        <span className="font-serif font-normal italic text-primary">
                            {aboutData.highlightedText}
                        </span>
                    </motion.h2>
                </motion.div>

                {/* Top: Image + Introduction */}
                <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

                    {/* Left image */}
                    <motion.div
                        initial={{ opacity: 0, x: -35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.9,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative mx-auto w-full max-w-[440px] lg:mx-0"
                    >
                        {/* Decorative frame */}
                        <div className="absolute -right-3 -top-3 h-full w-full rounded-2xl border border-primary/30 sm:-right-4 sm:-top-4" />

                        {/* Image */}
                        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface">
                            <img
                                src={aboutData.image}
                                alt={aboutData.imageAlt}
                                loading="lazy"
                                className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                            />

                            {/* Image overlay */}
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-body-bg/70 via-transparent to-transparent" />

                            {/* Image bottom label */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">
                                <span className="text-xs tracking-[0.2em] text-primary">
                                    THE PERSON BEHIND THE CODE
                                </span>

                                <h3 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                                    {aboutData.name}
                                </h3>

                                <p className="mt-1 text-sm text-white/70">
                                    {aboutData.role}
                                </p>
                            </div>
                        </div>

                        {/* Decorative corner */}
                        <div className="absolute -bottom-4 -left-4 -z-10 size-24 rounded-full border border-primary/20" />
                    </motion.div>

                    {/* Right introduction */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex flex-col"
                    >
                        <motion.div variants={itemVariants}>
                            <div className="mb-5 flex items-center gap-2">
                                <RiSparkling2Line size={19} className="text-primary" />

                                <span className="text-sm font-medium text-primary">
                                    Hello, I'm {aboutData.name}
                                </span>
                            </div>

                            <h3 className="max-w-2xl text-3xl font-semibold leading-[1.2] tracking-tight text-foreground sm:text-4xl xl:text-[46px]">
                                Creating digital experiences with{" "}
                                <span className="font-serif font-normal italic text-primary">
                                    creativity & code.
                                </span>
                            </h3>

                            <p className="mt-7 max-w-2xl text-base leading-8 text-muted">
                                {aboutData.introduction}
                            </p>

                            <p className="mt-4 max-w-2xl text-sm leading-8 text-muted sm:text-base">
                                {aboutData.description}
                            </p>
                        </motion.div>

                        {/* More about me */}
                        <motion.div variants={itemVariants} className="mt-7">
                            <button
                                type="button"
                                onClick={() => setShowMore((prev) => !prev)}
                                aria-expanded={showMore}
                                className="group inline-flex items-center gap-3 text-sm font-semibold text-primary transition-colors hover:text-foreground"
                            >
                                {showMore ? "Show Less" : "More About Me"}

                                <span className="flex size-9 items-center justify-center rounded-full border border-primary/30 transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-body-bg">
                                    {showMore ? (
                                        <RiArrowUpLine size={17} />
                                    ) : (
                                        <RiArrowDownLine size={17} />
                                    )}
                                </span>
                            </button>
                        </motion.div>

                        <AnimatePresence initial={false}>
                            {showMore && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0, y: 10 }}
                                    animate={{ opacity: 1, height: "auto", y: 0 }}
                                    exit={{ opacity: 0, height: 0, y: 10 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <p className="mt-6 max-w-2xl border-l-2 border-primary/50 pl-5 text-sm leading-8 text-muted sm:text-base">
                                        {aboutData.moreAbout}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>

                {/* Divider */}
                {showMore && (
                    <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent lg:my-15" />
                )}

                {/* Full width bottom content */}
                <AnimatePresence initial={false}>
                    {showMore && (
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                        >

                            {/* Education */}
                            <motion.div
                                variants={itemVariants}
                                className="mb-14 grid gap-8 rounded-2xl border border-border bg-surface/70 p-7 sm:grid-cols-[0.7fr_1.3fr] sm:items-center sm:p-9"
                            >
                                <div>
                                    <span className="text-xs font-semibold tracking-[0.2em] text-primary">
                                        MY ACADEMIC JOURNEY
                                    </span>

                                    <h3 className="mt-3 text-2xl font-semibold text-foreground">
                                        Education
                                    </h3>

                                    <p className="mt-2 text-sm leading-7 text-muted">
                                        Building a strong foundation in computer science and technology.
                                    </p>
                                </div>

                                <div className="flex items-center gap-5 border-t border-border pt-7 sm:border-l sm:border-t-0 sm:pl-9 sm:pt-0">
                                    <div className="flex size-14 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary">
                                        <RiGraduationCapLine size={28} />
                                    </div>

                                    <div>
                                        <span className="text-[10px] font-semibold tracking-[0.18em] text-primary">
                                            {aboutData.education.label}
                                        </span>

                                        <h4 className="mt-2 text-xl font-semibold text-foreground">
                                            {aboutData.education.degree}
                                        </h4>

                                        <p className="mt-1 text-sm text-muted">
                                            {aboutData.education.field}
                                        </p>

                                        <span className="mt-3 inline-flex items-center gap-2 text-xs text-muted">
                                            <span className="size-1.5 rounded-full bg-primary" />
                                            {aboutData.education.status}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Focus areas */}
                            <motion.div variants={itemVariants} className="mb-8">
                                <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
                                    <div>
                                        <span className="text-xs font-semibold tracking-[0.2em] text-primary">
                                            MY APPROACH
                                        </span>

                                        <h3 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
                                            What I Focus On
                                        </h3>
                                    </div>

                                    <p className="max-w-md text-sm leading-7 text-muted">
                                        The principles that guide the way I approach front-end development.
                                    </p>
                                </div>

                                <div className="grid gap-4 md:grid-cols-3">
                                    {aboutData.focusAreas.map((item, index) => {
                                        const Icon = item.icon;

                                        return (
                                            <motion.div
                                                key={item.title}
                                                variants={itemVariants}
                                                whileHover={{ y: -6 }}
                                                transition={{ duration: 0.3 }}
                                                className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-7 transition-colors duration-300 hover:border-primary/40"
                                            >
                                                <span className="absolute right-6 top-6 text-xs text-muted/50">
                                                    0{index + 1}
                                                </span>

                                                <div className="mb-7 flex size-12 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-body-bg">
                                                    <Icon size={24} />
                                                </div>

                                                <h4 className="text-lg font-semibold text-foreground">
                                                    {item.title}
                                                </h4>

                                                <p className="mt-3 text-sm leading-7 text-muted">
                                                    {item.description}
                                                </p>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </motion.div>

                            {/* Availability */}
                            <motion.div
                                variants={itemVariants}
                                className="mt-3 flex flex-col gap-4 rounded-xl border border-primary/15 bg-primary/[0.04] px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
                            >
                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-foreground"
                                >
                                    Let's Connect
                                    <span aria-hidden="true">↗</span>
                                </a>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default About;
