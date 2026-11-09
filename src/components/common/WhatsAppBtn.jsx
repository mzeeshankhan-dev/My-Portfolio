import { RiWhatsappLine } from '@remixicon/react';
import { motion, useScroll, useTransform } from "framer-motion";


const WhatsAppBtn = () => {
    const phone = "923416895098";
    const { scrollYProgress } = useScroll();

    const background = useTransform(
        scrollYProgress,
        (value) =>
            `conic-gradient(#22c55e ${value * 360}deg, #d1d5db 0deg)`
    );

    return (
        <div className="fixed bottom-6 right-6 z-50">

            <motion.div
                className="w-14 h-14 rounded-full p-0.75"
                style={{ background }}
            >
                <a
                    href={`https://wa.me/${phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-full rounded-full bg-green-500 flex items-center justify-center text-white"
                >
                    <RiWhatsappLine className='w-8 h-8' />
                </a>
            </motion.div>

        </div>
    )
}

export default WhatsAppBtn
