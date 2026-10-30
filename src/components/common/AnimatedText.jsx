
import { useEffect, useState } from "react";
import { easeIn,motion } from "framer-motion"

const words = [
    "Modern Web Experiences",
    "Responsive Websites",
    "User Interfaces",
    "Smooth Web Animations",
    "Pixel-Perfect Designs",
];

function AnimatedText() {
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];
        let delay = isDeleting ? 45 : 85;

        if (!isDeleting && charIndex === currentWord.length) {
            delay = 1600;
        }

        const timer = setTimeout(() => {
            if (!isDeleting) {
                if (charIndex < currentWord.length) {
                    setCharIndex((prev) => prev + 1);
                } else {
                    setIsDeleting(true);
                }
            } else {
                if (charIndex > 0) {
                    setCharIndex((prev) => prev - 1);
                } else {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, delay);

        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, wordIndex]);

    return (
        <span className="text-gold">
            {words[wordIndex].substring(0, charIndex)}
            <motion.span
                initial={{
                    opacity: 1,
                }}
                animate={{
                    opacity: 0,
                }}
                transition={{
                    duration: 1,
                    ease:easeIn,
                    repeat: Infinity,
                    delay:1
                }}
                className="ml-1 inline-block h-[0.9em] w-0.5 bg-gold align-middle" />
        </span>
    );
}

export default AnimatedText;
