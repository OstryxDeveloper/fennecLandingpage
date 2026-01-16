"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { AppStoreButton, GooglePlayButton } from "@/components/ui/StoreButtons";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const SLIDES = [
    "/assets/hero/Slide=1.png",
    "/assets/hero/Slide=2.png",
    "/assets/hero/Slide=3.png",
];

const ICONS = {
    eyes: {
        desktop: "/assets/hero/Mobile/Image_eye.png",
        mobile: "/assets/hero/Mobile/Image_eye.png",
    },
    handshake: {
        desktop: "/assets/hero/Mobile/Image_handshake.png",
        mobile: "/assets/hero/Mobile/Image_handshake.png",
    },
    tick: {
        desktop: "/assets/hero/Mobile/Image_tick.png",
        mobile: "/assets/hero/Mobile/Image_tick.png",
    },
    human: {
        desktop: "/assets/hero/Mobile/Image_people.png",
        mobile: "/assets/hero/Mobile/Image_people.png",
    },
};

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const getPrevIndex = () => (currentIndex - 1 + SLIDES.length) % SLIDES.length;
    const getNextIndex = () => (currentIndex + 1) % SLIDES.length;

    return (
        <section className="relative w-full h-[956px] md:h-[1194px] flex flex-col items-center overflow-hidden bg-[#111111] select-none">
            {/* Background Image Layer */}
            <div
                className="absolute inset-x-[-2.08%] inset-y-[-3.7%] z-0"
                style={{
                    background: `linear-gradient(180deg, rgba(17, 17, 17, 0.5) 0%, #111111 70%), url('/assets/hero/BG.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            />

            {/* Scaling 3D Icons */}

            {/* Icon 3: Eyes (Top Left) */}
            <motion.div
                className="absolute z-10 w-[120px] h-[120px] flex items-center justify-center cursor-pointer transition-all duration-300"
                style={{
                    left: isMobile ? 'calc(50% - 60px - 130px)' : '152px',
                    top: isMobile ? '120px' : '240px'
                }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="absolute w-[100px] h-[100px] opacity-50 blur-[25px]">
                    <Image src={isMobile ? ICONS.eyes.mobile : ICONS.eyes.desktop} alt="" fill className="object-contain" />
                </div>
                <div className="absolute w-[100px] h-[100px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                    <Image src={isMobile ? ICONS.eyes.mobile : ICONS.eyes.desktop} alt="Eyes Icon" fill className="object-contain" />
                </div>
            </motion.div>

            {/* Icon 4: Handshake (Bottom Left on Mobile, Middle Left on Desktop) */}
            <motion.div
                className="absolute z-10 w-[120px] h-[120px] flex items-center justify-center cursor-pointer transition-all duration-300"
                style={{
                    left: isMobile ? 'calc(50% - 60px - 130px)' : '472px',
                    top: isMobile ? '590px' : '536px'
                }}
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
                <div className="absolute w-[100px] h-[100px] opacity-50 blur-[25px]">
                    <Image src={isMobile ? ICONS.handshake.mobile : ICONS.handshake.desktop} alt="" fill className="object-contain" />
                </div>
                <div className="absolute w-[100px] h-[100px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                    <Image src={isMobile ? ICONS.handshake.mobile : ICONS.handshake.desktop} alt="Handshake Icon" fill className="object-contain" />
                </div>
            </motion.div>

            {/* Icon 1: Tick (Top Right) */}
            <motion.div
                className="absolute z-10 w-[120px] h-[120px] flex items-center justify-center cursor-pointer transition-all duration-300"
                style={{
                    right: isMobile ? 'calc(50% - 60px - 130px)' : '272px',
                    top: isMobile ? '120px' : '240px'
                }}
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
                <div className="absolute w-[100px] h-[100px] opacity-50 blur-[25px]">
                    <Image src={isMobile ? ICONS.tick.mobile : ICONS.tick.desktop} alt="" fill className="object-contain" />
                </div>
                <div className="absolute w-[100px] h-[100px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                    <Image src={isMobile ? ICONS.tick.mobile : ICONS.tick.desktop} alt="Tick Icon" fill className="object-contain" />
                </div>
            </motion.div>

            {/* Icon 2: Human (Bottom Right on Mobile, Middle Right on Desktop) */}
            <motion.div
                className="absolute z-10 w-[120px] h-[120px] flex items-center justify-center cursor-pointer transition-all duration-300"
                style={{
                    right: isMobile ? 'calc(50% - 60px - 130px)' : '352px',
                    top: isMobile ? '590px' : '536px'
                }}
                animate={{ scale: [1, 1.07, 1] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            >
                <div className="absolute w-[100px] h-[100px] opacity-50 blur-[25px]">
                    <Image src={isMobile ? ICONS.human.mobile : ICONS.human.desktop} alt="" fill className="object-contain" />
                </div>
                <div className="absolute w-[100px] h-[100px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
                    <Image src={isMobile ? ICONS.human.mobile : ICONS.human.desktop} alt="Human Icon" fill className="object-contain" />
                </div>
            </motion.div>

            {/* Content Layer */}
            <div
                className="absolute z-20 flex flex-col items-center w-full px-4"
                style={{
                    top: isMobile ? '120px' : '240px',
                    gap: isMobile ? '24px' : '40px'
                }}
            >
                {/* Heading */}
                <div className="flex flex-col items-center gap-[12px] md:gap-[24px] w-full text-center max-w-[360px] md:max-w-none">
                    <h1
                        className="text-white font-bold text-[60px] md:text-[100px] leading-[110%] tracking-[-0.04em]"
                        style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}
                    >
                        Meet New People,<br />
                        Together.
                    </h1>
                </div>

                {/* Text */}
                <p
                    className="text-white font-normal text-[18px] md:text-[24px] leading-[22px] md:leading-[32px] text-center w-full max-w-[360px] md:max-w-none"
                    style={{ fontFamily: "'SF Pro Text', sans-serif" }}
                >
                    Groups connect with groups. Real conversations. Real chemistry.
                </p>

                {/* Links / Download Buttons */}
                <div className="flex flex-row justify-center items-start gap-[16px] md:gap-[24px] w-full mt-2 md:mt-0">
                    <AppStoreButton />
                    <GooglePlayButton />
                </div>
            </div>

            {/* Carousel Layer */}
            <div
                className="absolute z-20 flex flex-row justify-center items-center gap-[6px] md:gap-[16px] w-full h-[180px] md:h-[480px]"
                style={{ top: isMobile ? '736px' : '714px' }}
            >
                <AnimatePresence mode="popLayout">
                    {/* Left Image (Previous) */}
                    <motion.div
                        key={`prev-${currentIndex}`}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 0.5, x: 0, filter: isMobile ? 'blur(1.5px)' : 'blur(4px)' }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.8 }}
                        className="relative w-[225px] h-[135px] md:w-[600px] md:h-[360px] rounded-[9px] md:rounded-[24px] overflow-hidden flex-shrink-0"
                    >
                        <Image
                            src={SLIDES[getPrevIndex()]}
                            alt="Previous slide"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    {/* Center Image (Current) */}
                    <motion.div
                        key={`curr-${currentIndex}`}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative w-[300px] h-[180px] md:w-[800px] md:h-[480px] rounded-[9px] md:rounded-[24px] overflow-hidden z-30 shadow-2xl flex-shrink-0"
                    >
                        <Image
                            src={SLIDES[currentIndex]}
                            alt="Current slide"
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                    {/* Right Image (Next) */}
                    <motion.div
                        key={`next-${currentIndex}`}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 0.5, x: 0, filter: isMobile ? 'blur(1.5px)' : 'blur(4px)' }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.8 }}
                        className="relative w-[225px] h-[135px] md:w-[600px] md:h-[360px] rounded-[9px] md:rounded-[24px] overflow-hidden flex-shrink-0"
                    >
                        <Image
                            src={SLIDES[getNextIndex()]}
                            alt="Next slide"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
