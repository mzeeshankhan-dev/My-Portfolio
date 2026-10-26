import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Preloader({ onComplete }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onComplete, 200);
                    return 100;
                }
                return Math.min(prev + 1, 100);
            });
        }, 18);

        return () => clearInterval(interval);

    }, [onComplete]);

    return (
        <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 0.50, ease: "easeInOut" }}
            className="absolute w-full h-screen flex justify-center z-100 items-center bg-card-bg text-white">
            <div className="relative">
                <motion.div
                    animate={{
                        rotate: [0, 180, 360],
                        boxShadow: [
                            "0 4px 1px #e65c00",
                            "0 4px 1px #18b201",
                            "0 4px 1px #e65c00",
                        ],
                    }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="w-40 h-40 relative rounded-full flex justify-center items-center
                before:absolute before:w-full before:h-full before:rounded-full before:-z-10
                "
                />
                <div className="absolute inset-0 w-40 h-40 rounded-full flex justify-center items-center overflow-hidden p-4">
                    <img src="/images/my-logo.webp" alt="Logo" className="w-full h-full object-center scale-140" />
                </div>

                <div className="pt-4 text-center">
                    <h1 className="text-2xl font-semibold bg-linear-to-r from-green-500 to-pink-500 bg-clip-text text-transparent">{progress} %</h1>
                </div>
            </div>
        </motion.div>
    );
}
