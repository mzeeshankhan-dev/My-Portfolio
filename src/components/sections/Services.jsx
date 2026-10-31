import { motion } from "framer-motion";
// import { RiArrowUpRightLine } from "@remixicon/react";
import { services } from '../../data/data';

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 35,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65,
            ease: "easeOut",
        },
    },
};

function Services() {
    return (
        <section
            id="services"
            className="sectionCtr "
        >
            {/* Background glow */}
            <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />

            <div className="container relative">

                {/* Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="mb-14 text-center md:mb-20"
                >
                    <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        What I Offer
                    </span>
                    <h2 className="mb-5 text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                        Services I <span className="font-display italic text-primary">Provide</span>
                    </h2>

                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
                >
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <motion.article
                                key={service.number}
                                variants={cardVariants}
                                whileHover={{ y: -7 }}
                                transition={{ duration: 0.3 }}
                                className="group relative text-center flex flex-col rounded-2xl mt-10 border border-border/70 bg-surface/70 p-7 transition-colors duration-300 hover:border-primary/40 md:p-8"
                            >
                                {/* Card glow */}
                                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/0 blur-3xl transition-all duration-500 group-hover:bg-primary/10" />

                                {/* Top row */}
                                <div className="absolute top-[-10%] w-full left-0  mb-9 flex items-center justify-center">
                                    <div className=" flex justify-center items-center size-24 rotate-90 bg-primary [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)] group-hover:bg-primary/10 transition-all">
                                        <Icon size={27} />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="relative flex flex-1 flex-col mt-8">
                                    <h3 className="mb-4 text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-primary md:text-2xl">
                                        {service.title}
                                    </h3>

                                    <p className="mb-7 text-sm leading-7 text-text">
                                        {service.description}
                                    </p>

                                    {/* Features */}
                                    <ul className="mb-8 space-y-3">
                                        {service.features.map((feature) => (
                                            <li
                                                key={feature}
                                                className="flex items-center gap-3 text-sm text-foreground/75"
                                            >
                                                <span className="h-1 w-1 rounded-full bg-primary" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.article>
                        );
                    })}
                </motion.div>
            </div>
        </section >
    );
}

export default Services;