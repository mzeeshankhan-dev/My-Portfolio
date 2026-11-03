
import { useState } from "react";
import { motion } from "framer-motion";
import {
    RiArrowRightUpLine,
    RiSendPlaneLine,
    RiSparkling2Line,
    RiMailLine,
    RiMapPinLine,
    RiCalendarCheckLine,
} from "@remixicon/react";

import { contactData } from "../../data/data";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
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

const Contact = () => {
    const [notice, setNotice] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const name = formData.get("name");
        const email = formData.get("email");
        const subject = formData.get("subject");
        const message = formData.get("message");

        const mailSubject = encodeURIComponent(subject);
        const mailBody = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        );

        const mailtoLink = `mailto:${contactData.email.value}?subject=${mailSubject}&body=${mailBody}`;

        window.location.href = mailtoLink;

        setNotice(
            "Your email app should open with your message. If it doesn't, contact me directly using the email address."
        );
    };

    return (
        <section
            id="contact"
            className="sectionCtr"
        >
            {/* Background glow */}
            <div className="pointer-events-none absolute -left-40 top-20 -z-10 size-[420px] rounded-full bg-primary/[0.06] blur-[140px]" />

            <div className="pointer-events-none absolute -bottom-40 -right-40 -z-10 size-[450px] rounded-full bg-primary/[0.05] blur-[140px]" />

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
                        <span className="size-1.5 rounded-full bg-primary shadow-[0_0_10px_#D6B477]" />

                        <span className="text-[11px] font-semibold tracking-[0.25em] text-primary">
                            {contactData.eyebrow}
                        </span>
                    </motion.div>

                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-6xl"
                    >
                        {contactData.heading}
                        <br className="hidden sm:block" />

                        <span className="font-serif font-normal italic text-primary">
                            {" "}{contactData.highlight}
                        </span>
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-muted sm:text-base"
                    >
                        {contactData.description}
                    </motion.p>
                </motion.div>

                {/* Main contact layout */}
                <div className="grid overflow-hidden rounded-3xl border border-border bg-surface/60 lg:grid-cols-[0.85fr_1.15fr]">

                    {/* Left information panel */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        className="relative flex flex-col overflow-hidden p-7 sm:p-10 lg:p-12"
                    >
                        {/* Decorative glow */}
                        <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-primary/[0.07] blur-[90px]" />

                        <motion.div variants={itemVariants} className="relative">

                            <h3 className="mt-4 max-w-sm text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
                                {contactData.contactTitle}
                            </h3>

                            <p className="mt-5 max-w-md text-sm leading-8 text-muted">
                                {contactData.contactDescription}
                            </p>
                        </motion.div>

                        {/* Contact details */}
                        <motion.div
                            variants={itemVariants}
                            className="relative mt-10 space-y-4"
                        >
                            <a
                                href={contactData.email.href}
                                className="group flex items-center gap-4 rounded-xl border border-border bg-body-bg/60 p-4 transition-all duration-300 hover:border-primary/40"
                            >
                                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <RiMailLine size={21} />
                                </span>

                                <span className="min-w-0 flex-1">
                                    <span className="block text-[10px] font-semibold tracking-[0.17em] text-primary">
                                        {contactData.email.label}
                                    </span>

                                    <span className="mt-1 block break-all text-sm text-foreground transition-colors group-hover:text-primary">
                                        {contactData.email.value}
                                    </span>
                                </span>

                                <RiArrowRightUpLine
                                    size={19}
                                    className="shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary"
                                />
                            </a>

                            <div className="flex items-center gap-4 rounded-xl border border-border bg-body-bg/60 p-4">
                                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <RiMapPinLine size={21} />
                                </span>

                                <span>
                                    <span className="block text-[10px] font-semibold tracking-[0.17em] text-primary">
                                        {contactData.location.label}
                                    </span>

                                    <span className="mt-1 block text-sm text-foreground">
                                        {contactData.location.value}
                                    </span>
                                </span>
                            </div>

                            <div className="flex items-center gap-4 rounded-xl border border-border bg-body-bg/60 p-4">
                                <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <RiCalendarCheckLine size={21} />
                                </span>

                                <span>
                                    <span className="block text-[10px] font-semibold tracking-[0.17em] text-primary">
                                        {contactData.Availability.label}
                                    </span>

                                    <span className="mt-1 block text-sm text-foreground">
                                        {contactData.Availability.value}
                                    </span>
                                </span>
                            </div>
                        </motion.div>

                        {/* Social links */}
                        <motion.div
                            variants={itemVariants}
                            className="relative  pt-8"
                        >
                            <p className="mb-4 text-[10px] font-semibold tracking-[0.2em] text-muted">
                                {contactData.socialTitle}
                            </p>

                            <div className="flex flex-wrap gap-3">
                                {contactData.socials.map((social) => {
                                    const Icon = social.icon;

                                    return (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.name}
                                            className="group flex size-11 items-center justify-center rounded-xl border border-border bg-body-bg text-muted transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-body-bg"
                                        >
                                            <Icon size={21} />
                                        </a>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right form panel */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="border-t border-border bg-[#0B1118] p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12"
                    >
                        <div className="mb-9">

                            <h3 className="mt-3 text-2xl font-semibold text-foreground sm:text-3xl">
                                {contactData.form.title}
                            </h3>

                            <p className="mt-3 text-sm leading-7 text-muted">
                                {contactData.form.description}
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">

                            {/* Name and email */}
                            <div className="grid gap-6 sm:grid-cols-2">
                                {contactData.form.fields
                                    .filter((field) =>
                                        ["name", "email"].includes(field.name)
                                    )
                                    .map((field) => (
                                        <div key={field.name}>
                                            <label
                                                htmlFor={`contact-${field.name}`}
                                                className="mb-3 block text-[10px] font-semibold tracking-[0.17em] text-muted"
                                            >
                                                {field.label}
                                            </label>

                                            <input
                                                id={`contact-${field.name}`}
                                                type={field.type}
                                                name={field.name}
                                                placeholder={field.placeholder}
                                                required
                                                autoComplete={
                                                    field.name === "name"
                                                        ? "name"
                                                        : "email"
                                                }
                                                className="w-full rounded-xl border border-border bg-body-bg px-4 py-4 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted/50 hover:border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/10"
                                            />
                                        </div>
                                    ))}
                            </div>

                            {/* Subject */}
                            {contactData.form.fields
                                .filter((field) => field.name === "subject")
                                .map((field) => (
                                    <div key={field.name}>
                                        <label
                                            htmlFor="contact-subject"
                                            className="mb-3 block text-[10px] font-semibold tracking-[0.17em] text-muted"
                                        >
                                            {field.label}
                                        </label>

                                        <input
                                            id="contact-subject"
                                            type={field.type}
                                            name={field.name}
                                            placeholder={field.placeholder}
                                            required
                                            className="w-full rounded-xl border border-border bg-body-bg px-4 py-4 text-sm text-foreground outline-none transition-all duration-300 placeholder:text-muted/50 hover:border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/10"
                                        />
                                    </div>
                                ))}

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="contact-message"
                                    className="mb-3 block text-[10px] font-semibold tracking-[0.17em] text-muted"
                                >
                                    {contactData.form.message.label}
                                </label>

                                <textarea
                                    id="contact-message"
                                    name="message"
                                    rows={5}
                                    placeholder={contactData.form.message.placeholder}
                                    required
                                    className="w-full resize-y rounded-xl border border-border bg-body-bg px-4 py-4 text-sm leading-7 text-foreground outline-none transition-all duration-300 placeholder:text-muted/50 hover:border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/10"
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-primary px-6 py-4 text-sm font-semibold text-body-bg transition-all duration-300 hover:-translate-y-1 hover:bg-[#E4C58F] hover:shadow-[0_10px_35px_rgba(214,180,119,0.15)] sm:w-auto"
                            >
                                <RiSendPlaneLine
                                    size={19}
                                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                />

                                {contactData.form.button}

                                <RiArrowRightUpLine
                                    size={18}
                                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </button>

                            {notice && (
                                <p
                                    role="status"
                                    aria-live="polite"
                                    className="text-xs leading-6 text-primary"
                                >
                                    {notice}
                                </p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
