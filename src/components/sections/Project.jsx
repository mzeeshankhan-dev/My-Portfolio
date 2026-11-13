import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
    RiArrowRightUpLine,
    RiCloseLine,
    RiGithubFill,
    RiExternalLinkFill,
    RiArrowRightLine,
    RiCodeSSlashLine,
    RiCalendarLine,
    RiBriefcaseLine,
} from "@remixicon/react";

import projects from "../../data/projectData";

const filters = [
    "All",
    "Websites",
    "Landing Pages",
    "Portfolio",
    "Dashboards",
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
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
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

function Projects() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [showAll, setShowAll] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = useMemo(() => {
        if (activeFilter === "All") return projects;

        return projects.filter(
            (project) => project.category === activeFilter
        );
    }, [activeFilter]);

    const visibleProjects = showAll
        ? filteredProjects
        : filteredProjects.slice(0, 6);

    // Reset See More when changing filters
    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
        setShowAll(false);
    };

    // Close modal with Escape key and prevent background scrolling
    useEffect(() => {
        if (!selectedProject) return;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setSelectedProject(null);
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [selectedProject]);

    return (
        <section
            id="projects"
            className="sectionCtr bg-section-bg"
        >
            {/* Background glow */}
            <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-primary/5 blur-[140px]" />

            <div className="container">

                {/* Section heading */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="mb-12 text-center md:mb-16"
                >
                    <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        My Selected Work
                    </span>

                    <h2 className="mb-5 text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                        Featured{" "}
                        <span className="font-display italic text-primary">
                            Projects
                        </span>
                    </h2>

                    <p className="mx-auto max-w-2xl text-sm leading-7 text-muted md:text-base">
                        A selection of projects showcasing my approach to front-end
                        development, modern interfaces, responsive layouts, and
                        interactive web experiences.
                    </p>
                </motion.div>

                {/* Filters */}
                <div className="mb-10 flex flex-wrap items-center justify-center gap-2 md:mb-14 ">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            type="button"
                            onClick={() => handleFilterChange(filter)}
                            className={`rounded-full border px-5 py-2.5 text-xs font-medium transition-all duration-300 md:text-sm ${activeFilter === filter
                                ? "border-primary bg-primary text-text-heading"
                                : "border-border bg-surface/60 text-muted hover:border-primary/50 hover:text-primary"
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Project grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeFilter}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
                    >
                        {visibleProjects.map((project) => {
                            const Icon = project.icon;

                            return (
                                <motion.div
                                    key={project.id}
                                    variants={cardVariants}
                                    layout
                                    className="group text-left [&:hover_#projectCard-overlay]:from-body-bg/90   [&:hover_#projectCard-overlay]:via-body-bg/60 [&:hover_#projectCard-overlay]:to-transparent"
                                    id="project-card"
                                >
                                    <article className="h-full overflow-hidden rounded-2xl bg-card-bg border border-border/70 bg-surface/70 transition-all duration-300 group-hover:-translate-y-2 group-hover:border-primary/40 group-hover:shadow-[0_18px_50px_rgba(0,0,0,0.2)]">

                                        {/* Image */}
                                        <div className="relative aspect-16/11 overflow-hidden bg-[#17212B]">
                                            <img
                                                src={project.image}
                                                alt={`${project.title} project preview`}
                                                loading="lazy"
                                                className="h-full w-full object-cover transition-transform duration-700"
                                                id="project-img"
                                            />

                                            {/* Action buttons */}
                                            <div id="projectCard-overlay" className="absolute inset-0 flex items-center justify-center gap-3 text-blue-950 transition duration-500  bg-linear-to-t from-body-bg/80 via-transparent to-transparent group-hover:from-body-bg/90  group-hover:via-body-bg/60 group-hover:to-transparent ">
                                                {project.liveUrl && (
                                                    <a
                                                        href={project.liveUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className=" inline-flex items-center rounded-full bg-text px-3 py-3 text-sm font-semibold hover:bg-gold hover:text-body-bg active:translate-0.8"
                                                        id="project-btn"
                                                    >
                                                        <RiExternalLinkFill color="currentColor" size={32} />
                                                    </a>
                                                )}

                                                {project.githubUrl && (
                                                    <a
                                                        id="project-btn"
                                                        href={project.githubUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className=" inline-flex items-center rounded-full bg-text px-3 py-3 text-sm font-semibold hover:bg-gold hover:text-body-bg active:translate-0.8"
                                                    >
                                                        <RiGithubFill size={32} />
                                                    </a>
                                                )}
                                            </div>

                                            {/* Category */}
                                            <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur-md">
                                                {project.category}
                                            </span>

                                            {/* View icon */}
                                            <button
                                                onClick={() => setSelectedProject(project)}
                                                className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur-md transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-body-bg">
                                                <RiArrowRightUpLine size={21} />
                                            </button>
                                        </div>

                                        {/* Content */}
                                        <div className="p-5 md:p-6">
                                            <div className="mb-3 flex items-center justify-between gap-3">
                                                <span className="text-[10px] uppercase tracking-[0.18em] text-primary">
                                                    {project.subtitle}
                                                </span>

                                                <span className="text-xs text-muted">
                                                    {project.year}
                                                </span>
                                            </div>

                                            <h3 className="mb-3 text-xl font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                                                {project.title}
                                            </h3>

                                            <p className="mb-5 line-clamp-2 text-sm leading-6 text-muted">
                                                {project.description}
                                            </p>

                                            {/* Technologies */}
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.slice(0, 3).map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="rounded-md border border-border bg-body-bg/70 px-2.5 py-1.5 text-[10px] text-muted"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}

                                                {project.technologies.length > 3 && (
                                                    <span className="rounded-md border border-border px-2.5 py-1.5 text-[10px] text-primary">
                                                        +{project.technologies.length - 3}
                                                    </span>
                                                )}
                                            </div>

                                            <div
                                                onClick={() => setSelectedProject(project)}
                                                className="mt-3 flex items-center justify-center gap-4 border-t border-border/70 pt-4 hover:cursor-pointer hover:text-primary">
                                                <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted">
                                                    Read More
                                                </span>

                                                <RiArrowRightLine
                                                    size={18}
                                                    className="text-primary transition-transform duration-300 group-hover:translate-x-1"
                                                />
                                            </div>

                                        </div>
                                    </article>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>

                {/* Empty state */}
                {visibleProjects.length === 0 && (
                    <div className="py-16 text-center text-muted">
                        No projects found in this category.
                    </div>
                )}

                {/* See More / Show Less */}
                {filteredProjects.length > 6 && (
                    <div className="mt-12 flex justify-center md:mt-16">
                        <button
                            type="button"
                            onClick={() => setShowAll((previous) => !previous)}
                            className="group inline-flex items-center gap-3 rounded-full border border-primary/40 px-7 py-3.5 text-sm font-medium text-primary transition-all duration-300 hover:bg-primary hover:text-body-bg"
                        >
                            {showAll ? "Show Less" : "See More Projects"}

                            <RiArrowRightUpLine
                                size={19}
                                className={`transition-transform duration-300 ${showAll
                                    ? "-rotate-45"
                                    : "group-hover:translate-x-1 group-hover:-translate-y-1"
                                    }`}
                            />
                        </button>
                    </div>
                )}

            </div>

            {/* Project detail modal */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}

function ProjectModal({ project, onClose }) {
    const Icon = project.icon;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 p-3 backdrop-blur-md md:p-6"
        >
            <motion.div
                initial={{ opacity: 0, y: 35, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 25, scale: 0.97 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                onClick={(event) => event.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-modal-title"
                className="relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-border bg-surface shadow-2xl scrollbar-thin scrollbar-track-transparent scrollbar-thumb-border/50 scrollbar-thumb-rounded-lg md:scrollbar-thumb-border/30"
            >
                {/* Close button */}
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close project details"
                    className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur-md transition-colors hover:border-primary hover:bg-primary hover:text-body-bg"
                >
                    <RiCloseLine size={22} />
                </button>

                {/* Project thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                    <img
                        src={project.image}
                        alt={`${project.title} full project preview`}
                        className="w-full object-cover object-center"
                    />
                    -
                    <div className="absolute bottom-5 left-5 right-5 md:bottom-8 md:left-8">
                        <span className="mb-3 inline-flex rounded-full border border-primary/30 bg-black/40 px-3 py-1.5 text-[10px] uppercase tracking-widest text-primary backdrop-blur-md">
                            {project.category}
                        </span>

                        <h2
                            id="project-modal-title"
                            className="text-3xl font-semibold text-white md:text-5xl"
                        >
                            {project.title}
                        </h2>

                        <p className="mt-2 text-sm text-white/75 md:text-base">
                            {project.subtitle}
                        </p>
                    </div>
                </div>

                {/* Modal content */}
                <div className="p-5 md:p-9">

                    {/* Project meta */}
                    <div className="mb-8 grid grid-cols-1 gap-4 border-b border-border pb-7 sm:grid-cols-3">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <Icon size={20} />
                            </div>

                            <div>
                                <p className="text-[10px] uppercase tracking-widest text-muted">
                                    Category
                                </p>
                                <p className="mt-1 text-sm font-medium text-foreground">
                                    {project.category}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <RiCalendarLine size={20} />
                            </div>

                            <div>
                                <p className="text-[10px] uppercase tracking-widest text-muted">
                                    Year
                                </p>
                                <p className="mt-1 text-sm font-medium text-foreground">
                                    {project.year}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                <RiBriefcaseLine size={20} />
                            </div>

                            <div>
                                <p className="text-[10px] uppercase tracking-widest text-muted">
                                    My Role
                                </p>
                                <p className="mt-1 text-sm font-medium text-foreground">
                                    {project.role}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Overview */}
                    <div className="mb-9">
                        <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                            Project Overview
                        </span>

                        <p className="text-sm leading-7 text-muted md:text-base">
                            {project.overview}
                        </p>
                    </div>

                    {/* Features */}
                    <div className="mb-9">
                        <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                            Key Features
                        </span>

                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                            {project.features.map((feature) => (
                                <div
                                    key={feature}
                                    className="flex items-center gap-3 rounded-lg border border-border bg-body-bg/50 p-3"
                                >
                                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />

                                    <span className="text-sm text-foreground/80">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-9">
                        <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                            Technologies Used
                        </span>

                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-lg border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-medium text-primary"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Action buttons */}
                    {(project.liveUrl || project.githubUrl) && (
                        <div className="flex flex-wrap gap-3 border-t border-border pt-7">
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-body-bg transition-all hover:-translate-y-1 hover:shadow-lg"
                                >
                                    Live Preview
                                    <RiExternalLinkFill size={17} />
                                </a>
                            )}

                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary hover:text-primary"
                                >
                                    <RiGithubFill size={18} />
                                    Source Code
                                </a>
                            )}
                        </div>
                    )}

                </div>
            </motion.div>
        </motion.div>
    );
}

export default Projects;