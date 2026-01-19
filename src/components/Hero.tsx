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
        desktop: "/assets/hero/Mobile/Image_peoplee.png",
        mobile: "/assets/hero/Mobile/Image_peoplee.png",
    },
};

export default function Hero() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [activeIconIndex, setActiveIconIndex] = useState(0);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Icon sequence animation
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIconIndex((prev) => (prev + 1) % 4);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1);
            setIndex((prev) => prev + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const currentIndex = ((index % SLIDES.length) + SLIDES.length) % SLIDES.length;

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? (isMobile ? '100vw' : '70vw') : (isMobile ? '-100vw' : '-70vw'),
            opacity: 0,
            scale: 0.5,
            filter: 'blur(10px)',
            zIndex: 10
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            zIndex: 30,
            filter: 'blur(0px)',
        },
        left: {
            x: isMobile ? '-77.1vw' : '-37.9vw',
            opacity: 0.5,
            scale: 0.75,
            zIndex: 20,
            filter: isMobile ? 'blur(1px)' : 'blur(4px)',
        },
        right: {
            x: isMobile ? '77.1vw' : '37.9vw',
            opacity: 0.5,
            scale: 0.75,
            zIndex: 20,
            filter: isMobile ? 'blur(1px)' : 'blur(4px)',
        },
        exit: (direction: number) => ({
            x: direction > 0 ? (isMobile ? '-100vw' : '-70vw') : (isMobile ? '100vw' : '70vw'),
            opacity: 0,
            scale: 0.5,
            filter: 'blur(10px)',
            zIndex: 10
        }),
    };

    const iconAnimation = (idx: number): any => ({
        scale: activeIconIndex === idx ? [1, 1.1, 1.1, 1] : 1,
        transition: {
            duration: 2,
            times: [0, 0.125, 0.25, 0.5], // 0.5s in, 1s static, 0.5s out
            ease: "easeInOut"
        }
    });

    return (
        <section className="relative w-full h-[170.6vw] md:h-[60vw] flex flex-col items-center overflow-hidden bg-[#111111] select-none">
            {/* Background Image Layer */}
            <div
                className="absolute inset-x-[-2.08%] inset-y-[-3.7%] z-0"
                style={{
                    background: `linear-gradient(180deg, rgba(17, 17, 17, 0.5) 0%, #111111 70%), url('/assets/Hero_Background.PNG')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            />

            {/* Scaling 3D Icons */}

            {/* Icon 3: Eyes (Top Left) */}
            <motion.div
                className="absolute z-10 w-[21.3vw] h-[21.3vw] md:w-[5.5vw] md:h-[5.5vw] flex items-center justify-center cursor-pointer transition-all duration-300"
                style={{
                    left: isMobile ? 'calc(50% - 10.65vw - 23.2vw)' : '7.08vw',
                    top: isMobile ? '21.3vw' : '11.18vw'
                }}
                animate={iconAnimation(0)}
            >
                <div className="absolute w-[17.8vw] h-[17.8vw] md:w-[4.65vw] md:h-[4.65vw] opacity-50 blur-[4.5vw] md:blur-[1.18vw]">
                    <Image src={isMobile ? ICONS.eyes.mobile : ICONS.eyes.desktop} alt="" fill className="object-contain" />
                </div>
                <div className="absolute w-[17.8vw] h-[17.8vw] md:w-[4.65vw] md:h-[4.65vw] drop-shadow-[0_0.8vw_0.8vw_rgba(0,0,0,0.25)] md:drop-shadow-[0_0.2vw_0.2vw_rgba(0,0,0,0.25)]">
                    <Image src={isMobile ? ICONS.eyes.mobile : ICONS.eyes.desktop} alt="Eyes Icon" fill className="object-contain" />
                </div>
            </motion.div>

            {/* Icon 4: Handshake (Bottom Left on Mobile, Middle Left on Desktop) */}
            <motion.div
                className="absolute z-10 w-[21.3vw] h-[21.3vw] md:w-[5.5vw] md:h-[5.5vw] flex items-center justify-center cursor-pointer transition-all duration-300"
                style={{
                    left: isMobile ? 'calc(50% - 10.65vw - 23.2vw)' : '21.9vw',
                    top: isMobile ? '105.3vw' : '24.9vw'
                }}
                animate={iconAnimation(1)}
            >
                <div className="absolute w-[17.8vw] h-[17.8vw] md:w-[4.65vw] md:h-[4.65vw] opacity-50 blur-[4.5vw] md:blur-[1.18vw]">
                    <Image src={isMobile ? ICONS.handshake.mobile : ICONS.handshake.desktop} alt="" fill className="object-contain" />
                </div>
                <div className="absolute w-[17.8vw] h-[17.8vw] md:w-[4.65vw] md:h-[4.65vw] drop-shadow-[0_0.8vw_0.8vw_rgba(0,0,0,0.25)] md:drop-shadow-[0_0.2vw_0.2vw_rgba(0,0,0,0.25)]">
                    <Image src={isMobile ? ICONS.handshake.mobile : ICONS.handshake.desktop} alt="Handshake Icon" fill className="object-contain" />
                </div>
            </motion.div>

            {/* Icon 1: Tick (Top Right) */}
            <motion.div
                className="absolute z-10 w-[21.3vw] h-[21.3vw] md:w-[5.5vw] md:h-[5.5vw] flex items-center justify-center cursor-pointer transition-all duration-300"
                style={{
                    right: isMobile ? 'calc(50% - 10.65vw - 23.2vw)' : '12.6vw',
                    top: isMobile ? '21.3vw' : '11.18vw'
                }}
                animate={iconAnimation(2)}
            >
                <div className="absolute w-[17.8vw] h-[17.8vw] md:w-[4.65vw] md:h-[4.65vw] opacity-50 blur-[4.5vw] md:blur-[1.18vw]">
                    <Image src={isMobile ? ICONS.tick.mobile : ICONS.tick.desktop} alt="" fill className="object-contain" />
                </div>
                <div className="absolute w-[17.8vw] h-[17.8vw] md:w-[4.65vw] md:h-[4.65vw] drop-shadow-[0_0.8vw_0.8vw_rgba(0,0,0,0.25)] md:drop-shadow-[0_0.2vw_0.2vw_rgba(0,0,0,0.25)]">
                    <Image src={isMobile ? ICONS.tick.mobile : ICONS.tick.desktop} alt="Tick Icon" fill className="object-contain" />
                </div>
            </motion.div>

            {/* Icon 2: Human (Bottom Right on Mobile, Middle Right on Desktop) */}
            <motion.div
                className="absolute z-10 w-[21.3vw] h-[21.3vw] md:w-[5.5vw] md:h-[5.5vw] flex items-center justify-center cursor-pointer transition-all duration-300"
                style={{
                    right: isMobile ? 'calc(50% - 10.65vw - 23.2vw)' : '16.3vw',
                    top: isMobile ? '105.3vw' : '24.9vw'
                }}
                animate={iconAnimation(3)}
            >
                <div className="absolute w-[17.8vw] h-[17.8vw] md:w-[4.65vw] md:h-[4.65vw] opacity-50 blur-[4.5vw] md:blur-[1.18vw]">
                    <Image src={isMobile ? ICONS.human.mobile : ICONS.human.desktop} alt="" fill className="object-contain" />
                </div>
                <div className="absolute w-[17.8vw] h-[17.8vw] md:w-[4.65vw] md:h-[4.65vw] drop-shadow-[0_0.8vw_0.8vw_rgba(0,0,0,0.25)] md:drop-shadow-[0_0.2vw_0.2vw_rgba(0,0,0,0.25)]">
                    <Image src={isMobile ? ICONS.human.mobile : ICONS.human.desktop} alt="Human Icon" fill className="object-contain" />
                </div>
            </motion.div>

            {/* Content Layer */}
            <div
                className="absolute z-20 flex flex-col items-center w-full px-[3.2vw]"
                style={{
                    top: isMobile ? '21.3vw' : '11.18vw',
                    gap: isMobile ? '4.2vw' : '1.87vw'
                }}
            >
                {/* Heading */}
                <div className="flex flex-col items-center gap-[2.1vw] md:gap-[1.1vw] w-full text-center max-w-[64vw] md:max-w-none">
                    <h1
                        className="text-white font-bold text-[10.6vw] md:text-[4.65vw] leading-[110%] tracking-[-0.04em]"
                        style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}
                    >
                        Meet New People,<br />
                        Together.
                    </h1>
                </div>

                {/* Text */}
                <p
                    className="text-white font-normal text-[3.2vw] md:text-[1.11vw] leading-[4vw] md:leading-[1.45vw] text-center w-full max-w-[64vw] md:max-w-none"
                    style={{ fontFamily: "'SF Pro Text', sans-serif" }}
                >
                    Groups connect with groups. Real conversations. Real chemistry.
                </p>

                {/* Links / Download Buttons */}
                <div className="flex flex-row justify-center items-start gap-[2.9vw] md:gap-[1.1vw] w-full mt-[1vw] md:mt-0">
                    <AppStoreButton />
                    <GooglePlayButton />
                </div>
            </div>

            {/* Carousel Layer */}
            <div
                className="absolute z-20 flex flex-row justify-center items-center w-[150vw] h-[53vw] md:h-[26.5vw]"
                style={{ top: isMobile ? '110vw' : '31vw' }}
            >
                <div className="relative w-[150vw] h-full flex items-center justify-center">
                    <AnimatePresence initial={false} custom={direction} mode="popLayout">
                        {[-1, 0, 1].map((offset) => {
                            const slideIndex = ((index + offset) % SLIDES.length + SLIDES.length) % SLIDES.length;
                            const status = offset === -1 ? 'left' : offset === 0 ? 'center' : 'right';

                            return (
                                <motion.div
                                    key={index + offset}
                                    custom={direction}
                                    variants={variants}
                                    initial="enter"
                                    animate={status}
                                    exit="exit"
                                    transition={{
                                        duration: 0.8,
                                        ease: [0.32, 0.72, 0, 1], // Smooth custom easing
                                        opacity: { duration: 0.4 }
                                    }}
                                    className={cn(
                                        "absolute overflow-hidden rounded-[1.6vw] md:rounded-[1.1vw] flex-shrink-0 shadow-2xl",
                                        status === 'center' ? "w-[85vw] h-[53vw] md:w-[42.5vw] md:h-[26.5vw]" : "w-[85vw] h-[53vw] md:w-[42.5vw] md:h-[26.5vw]"
                                    )}
                                    style={{
                                        // Use the same width/height and let scale handle the sizing for smooth transitions
                                        transformOrigin: 'center center'
                                    }}
                                >
                                    <Image
                                        src={SLIDES[slideIndex]}
                                        alt={`Slide ${slideIndex}`}
                                        fill
                                        className="object-cover"
                                        priority={status === 'center'}
                                    />
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
