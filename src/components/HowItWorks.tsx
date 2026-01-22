"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

/**
 * Pixel-Perfect "How It Works" Section
 * 
 * Logic:
 * 1. Parent Container: 500vh ensures smooth scrolling for 4 cards.
 * 2. Sticky Viewport: Keeps everything locked in view while cards animate.
 * 3. Desktop: Cards fly in to form a horizontal row (join the 1st card).
 * 4. Mobile: Cards fly in and stack directly on top of each other (cover the previous card).
 */

const CARDS_DESKTOP = [
    {
        id: 1,
        title: "Create Your Group",
        description: "Bring up to 5 friends. Your group becomes your identity.",
        image: "/assets/How to work Section/StickyWrapper_4.png",
        left: "0vw",
        rotate: -5,
        textHeight: "11.14vw",
        textOffset: "0.84vw",
        isStatic: true
    },
    {
        id: 2,
        title: "Match With Other Groups",
        description: "Swipe through groups that share your vibe, interests, and intentions.",
        image: "/assets/How to work Section/StickyWrapper_3.png",
        left: "21.14vw",
        rotate: 5,
        textHeight: "13.12vw",
        textOffset: "0vw",
        scrollRange: [0.1, 0.4]
    },
    {
        id: 3,
        title: "Start the Conversation",
        description: "Chat, send photos, poke someone you like, or jump on voice/video calls when you're ready.",
        image: "/assets/How to work Section/StickyWrapper_2.png",
        left: "42.29vw",
        rotate: -5,
        textHeight: "12.8vw",
        textOffset: "0.7vw",
        scrollRange: [0.4, 0.7]
    },
    {
        id: 4,
        title: "Meet IRL",
        description: "Take your connections from screen to real life—with the comfort of people you trust.",
        image: "/assets/How to work Section/StickyWrapper_1.png",
        left: "63.43vw",
        rotate: 5,
        textHeight: "12.8vw",
        textOffset: "0vw",
        scrollRange: [0.7, 1.0]
    },
];

const CARDS_MOBILE = [
    {
        id: 1,
        title: "Create Your Group",
        description: "Bring up to 5 friends. Your group becomes your identity.",
        image: "/assets/How to work Section/StickyWrapper_4.png",
        rotate: -3,
        textHeight: "173px",
        textOffset: "10.62px",
        isStatic: true,
        scrollRange: [0, 0.1]
    },
    {
        id: 2,
        title: "Match With Other Groups",
        description: "Swipe through groups that share your vibe, interests, and intentions.",
        image: "/assets/How to work Section/StickyWrapper_3.png",
        rotate: 3,
        textHeight: "173px",
        textOffset: "0px",
        scrollRange: [0.1, 0.4]
    },
    {
        id: 3,
        title: "Start the Conversation",
        description: "Chat, send photos, poke someone you like, or jump on voice/video calls when you're ready.",
        image: "/assets/How to work Section/StickyWrapper_2.png",
        rotate: -3,
        textHeight: "173px",
        textOffset: "10.62px",
        scrollRange: [0.4, 0.7]
    },
    {
        id: 4,
        title: "Meet IRL",
        description: "Take your connections from screen to real life—with the comfort of people you trust.",
        image: "/assets/How to work Section/StickyWrapper_1.png",
        rotate: 3,
        textHeight: "173px",
        textOffset: "0px",
        scrollRange: [0.7, 1.0]
    }
];

export default function HowItWorks() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 440);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    const cards = isMobile ? CARDS_MOBILE : CARDS_DESKTOP;

    return (
        <section
            id="how-it-works"
            ref={sectionRef}
            className="relative w-full bg-[#111111] h-[500vh]" // Sticky stacking needs vertical room
        >
            {/* Sticky Viewport Layer */}
            <div className="sticky top-20 h-screen w-full flex justify-center items-center overflow-hidden lg:px-[7.91vw]">

                {/* Visual Bounds Container */}
                <div className={`relative w-full h-full flex items-center justify-center ${isMobile ? 'max-w-[408px]' : 'max-w-[84.16vw] lg:w-full'}`}>

                    {/* Fixed Background Heading */}
                    <div className={`absolute w-full text-center pointer-events-none z-0 ${isMobile ? 'top-[12vh]' : 'top-[7.81vw]'}`}>
                        <h2 className={`${isMobile ? 'text-[60px]' : 'text-[7.29vw]'} font-bold leading-[110%] text-white opacity-10 tracking-[-0.04em] select-none whitespace-nowrap`}>
                            {isMobile ? (
                                <>Effortless Group <br /> Matching</>
                            ) : (
                                <>Effortless Group <br /> Matching Starts Here</>
                            )}
                        </h2>
                    </div>

                    {/* Cards Render Area */}
                    <div className={`relative w-full flex items-center justify-center ${isMobile ? 'h-[400px] mt-[15vh]' : 'h-[24.83vw] mt-[28.12vw]'}`}>
                        {cards.map((card, index) => (
                            <StickyCard
                                key={card.id}
                                card={card}
                                index={index}
                                scrollYProgress={scrollYProgress}
                                isMobile={isMobile}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function StickyCard({ card, index, scrollYProgress, isMobile }: { card: any; index: number; scrollYProgress: any, isMobile: boolean }) {
    // Stacking Strategy:
    // Only animate non-static cards. 
    // Start at y: "100vh" (bottom of screen) and transform to y: "0%" (final position).

    const [isHovered, setIsHovered] = useState(false);
    const range = card.scrollRange || [0, 0];

    // Y-Axis Fly-in using percentages for responsive accuracy
    const y = useTransform(
        scrollYProgress,
        [range[0], range[1]],
        ["100vh", "0%"]
    );

    // Fade-in as it approaches
    const opacity = useTransform(
        scrollYProgress,
        [range[0], range[0] + 0.1],
        [0, 1]
    );

    const finalY = card.isStatic ? "0%" : y;
    const finalOpacity = card.isStatic ? 1 : opacity;

    return (
        <motion.div
            style={{
                position: "absolute",
                // Mobile: Stacks vertically (same center). Desktop: Horizontal row offsets.
                left: isMobile ? "calc(50% - 200px + 1px)" : (card.left || "auto"),
                right: isMobile ? "auto" : (card.right || "auto"),
                top: 0,
                y: finalY,
                opacity: finalOpacity,
                width: isMobile ? "400px" : "20.83vw",
                height: isMobile ? "400px" : "20.83vw",
                zIndex: index + 10 // Ensure later cards stack on top
            }}
            className="flex items-center justify-center"
        >
            <motion.div
                className={`relative bg-[#5F00DB] border-[#111111] overflow-hidden group shadow-2xl ${isMobile
                    ? 'w-[376px] h-[376px] border-[5px]'
                    : 'w-[20.83vw] h-[20.83vw] border-[0.26vw]'
                    }`}
                style={{
                    rotate: `${card.rotate}deg`,
                    borderRadius: isMobile ? '16px' : '1.25vw',
                }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                // Removed scale on hover for the card container to keep text static
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
                {/* Image Background */}
                <div 
                    className={`absolute z-0 overflow-hidden ${isMobile
                        ? 'inset-x-[-73.9px] top-[-3.87px] bottom-[3.87px]'
                        : 'inset-x-[-3.4vw] top-[-0.3vw] bottom-[0.3vw]'
                        }`}
                    style={{
                        borderRadius: isMobile ? '16px' : '1.25vw',
                        willChange: 'transform'
                    }}
                >
                    <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover transition-transform transition-opacity duration-700 group-hover:scale-110 group-hover:opacity-60"
                        style={{
                            borderRadius: isMobile ? '16px' : '1.25vw'
                        }}
                        sizes={isMobile ? "376px" : "20.83vw"}
                    />
                </div>

                {/* Light Purple Shade Hover Overlay */}
                <motion.div 
                    className="absolute inset-0 bg-[#5F00DB]/40 pointer-events-none z-[5] overflow-hidden"
                    style={{
                        borderRadius: isMobile ? '16px' : '1.25vw'
                    }}
                    animate={{ opacity: isHovered ? 0.1 : 0 }}
                    transition={{ 
                        duration: 0.4,
                        ease: [0.4, 0, 0.2, 1]
                    }}
                />

                <div
                    className={`absolute bottom-0 left-0 right-0     flex flex-col justify-end ${isMobile ? 'p-4 pb-6' : 'p-[1.25vw] pb-[1.25vw] pt-[3.33vw]'}`}
                    style={{
                        height: isMobile ? `calc(${card.textHeight} / 2)` : `calc(${card.textHeight} / 2)`, // Reduced height by 50%
                        background: "linear-gradient(180deg, rgba(22, 0, 63, 0) 0%, rgba(22, 0, 61, 0.75) 90%)",
                        backdropFilter: isMobile ? "blur(2px)" : "blur(0.1625vw)", // Adjusted blur height proportionally
                        WebkitBackdropFilter: isMobile ? "blur(2px)" : "blur(0.1625vw)"
                    }}
                >
                    <div
                        className={`flex flex-col ${isMobile ? 'gap-3' : 'gap-[1.25vw]'}`}
                        style={{
                            paddingLeft: isMobile ? (card.textOffset !== "0px" ? "12px" : "0px") : (card.textOffset !== "0vw" ? card.textOffset : "0px")
                        }}
                    >
                        <h3 className={`${isMobile ? 'text-[24px]' : 'text-[1.66vw]'} font-bold leading-[120%] tracking-[-0.04em] text-white`}>
                            {card.title}
                        </h3>
                        <p className={`${isMobile ? 'text-[16px]' : 'text-[0.93vw]'} font-normal leading-relaxed text-white/95`}>
                            {card.description}
                        </p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
