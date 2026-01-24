"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

/**
 * Pixel-Perfect "How It Works" Section
 * * Logic:
 * 1. Parent Container: Dynamic height based on device to eliminate mobile gaps.
 * 2. Sticky Viewport: Keeps everything locked in view while cards animate.
 * 3. Desktop: Cards fly in to form a horizontal row (join the 1st card).
 * 4. Mobile: Cards fly in and stack directly on top of each other (cover the previous card).
 */

const CARDS_DESKTOP = [
    {
        id: 1,
        title: "Create Your Group",
        description: "Bring up to 5 friends. Your group becomes your identity.",
        image: "/assets/How to work Section/StickyWrapper_4.webp",
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
        image: "/assets/How to work Section/StickyWrapper_3.webp",
        left: "21.14vw",
        rotate: 5,
        textHeight: "13.12vw",
        textOffset: "0vw",
        scrollRange: [0.1, 0.35]
    },
    {
        id: 3,
        title: "Start the Conversation",
        description: "Chat, send photos, poke someone you like, or jump on voice/video calls when you're ready.",
        image: "/assets/How to work Section/StickyWrapper_2.webp",
        left: "42.29vw",
        rotate: -5,
        textHeight: "12.8vw",
        textOffset: "0.7vw",
        scrollRange: [0.35, 0.6]
    },
    {
        id: 4,
        title: "Meet IRL",
        description: "Take your connections from screen to real life—with the comfort of people you trust.",
        image: "/assets/How to work Section/StickyWrapper_1.webp",
        left: "63.43vw",
        rotate: 5,
        textHeight: "12.8vw",
        textOffset: "0vw",
        scrollRange: [0.6, 0.85]
    },
];

const CARDS_MOBILE = [
    {
        id: 1,
        title: "Create Your Group",
        description: "Bring up to 5 friends. Your group becomes your identity.",
        image: "/assets/How to work Section/StickyWrapper_4.webp",
        rotate: -3,
        textHeight: "39.31vw",
        textOffset: "2.41vw",
        isStatic: true,
        scrollRange: [0, 0.1]
    },
    {
        id: 2,
        title: "Match With Other Groups",
        description: "Swipe through groups that share your vibe, interests, and intentions.",
        image: "/assets/How to work Section/StickyWrapper_3.webp",
        rotate: 3,
        textHeight: "39.31vw",
        textOffset: "0vw",
        scrollRange: [0.1, 0.4]
    },
    {
        id: 3,
        title: "Start the Conversation",
        description: "Chat, send photos, poke someone you like, or jump on voice/video calls when you're ready.",
        image: "/assets/How to work Section/StickyWrapper_2.webp",
        rotate: -3,
        textHeight: "39.31vw",
        textOffset: "2.41vw",
        scrollRange: [0.4, 0.7]
    },
    {
        id: 4,
        title: "Meet IRL",
        description: "Take your connections from screen to real life—with the comfort of people you trust.",
        image: "/assets/How to work Section/StickyWrapper_1.webp",
        rotate: 3,
        textHeight: "39.31vw",
        textOffset: "0vw",
        scrollRange: [0.7, 1.0] // Final card finishes exactly at the bottom of the scroll
    }
];

export default function HowItWorks() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    const finalStackLift = useTransform(scrollYProgress, [0.85, 1], ["0%", isMobile ? "-35%" : "-15%"]);

    const cards = isMobile ? CARDS_MOBILE : CARDS_DESKTOP;

    return (
        <section
            id="how-it-works"
            ref={sectionRef}
            // Height adjusted to 200vh on mobile as requested
            className={`relative w-full bg-[#111111] ${isMobile ? 'h-[200vh]' : 'h-[500vh]'}`}
        >
            <div className="sticky top-0 h-screen w-full flex flex-col items-center overflow-hidden px-[3.63vw] lg:px-[7.91vw]">

                <div className={`relative w-full h-full flex ${isMobile ? 'flex-col justify-start pt-[15vw] gap-[4vw]' : 'items-center justify-center'}`}>

                    <motion.div
                        className={`${isMobile ? 'relative w-full text-center z-0' : 'absolute w-full text-center z-0 top-[7.81vw]'}`}
                    >
                        <h2 className={`${isMobile ? 'text-[9vw]' : 'text-[7.29vw]'} font-bold leading-[110%] text-white opacity-10 tracking-[-0.04em] select-none whitespace-nowrap`}>
                            {isMobile ? (
                                <>Effortless <br />Group <br /> Matching <br /> Starts Here</>
                            ) : (
                                <>Effortless Group <br /> Matching Starts Here</>
                            )}
                        </h2>
                    </motion.div>

                    <motion.div
                        style={{ y: finalStackLift }}
                        className={`relative w-full flex items-center justify-center ${isMobile ? 'h-[80vw] mt-0 z-10' : 'h-[24.83vw] mt-[28.12vw] z-10'}`}
                    >
                        {cards.map((card, index) => (
                            <StickyCard
                                key={card.id}
                                card={card}
                                index={index}
                                scrollYProgress={scrollYProgress}
                                isMobile={isMobile}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function StickyCard({ card, index, scrollYProgress, isMobile }: { card: any; index: number; scrollYProgress: any, isMobile: boolean }) {
    const [isHovered, setIsHovered] = useState(false);
    const range = card.scrollRange || [0, 0];

    const y = useTransform(
        scrollYProgress,
        [range[0], range[1]],
        ["100vh", "0%"]
    );

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
                left: isMobile ? "calc(50% - 40vw + 1px)" : (card.left || "auto"),
                right: isMobile ? "auto" : (card.right || "auto"),
                top: 0,
                y: finalY,
                opacity: finalOpacity,
                width: isMobile ? "80vw" : "20.83vw",
                height: isMobile ? "80vw" : "20.83vw",
                zIndex: index + 10
            }}
            className="flex items-center justify-center"
        >
            <motion.div
                className={`relative bg-[#5F00DB] border-[#111111] overflow-hidden group shadow-2xl ${isMobile
                    ? 'w-[75vw] h-[75vw] border-[1.13vw]'
                    : 'w-[20.83vw] h-[20.83vw] border-[0.26vw]'
                    }`}
                style={{
                    rotate: `${card.rotate}deg`,
                    borderRadius: isMobile ? '4.5vw' : '1.25vw',
                }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
                <div
                    className={`absolute z-0 overflow-hidden ${isMobile
                        ? 'inset-x-[-14vw] top-[-0.7vw] bottom-[0.7vw]'
                        : 'inset-x-[-3.4vw] top-[-0.3vw] bottom-[0.3vw]'
                        }`}
                    style={{
                        borderRadius: isMobile ? '4.5vw' : '1.25vw',
                        willChange: 'transform'
                    }}
                >
                    <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover transition-transform transition-opacity duration-700 group-hover:scale-110 group-hover:opacity-60"
                        style={{
                            borderRadius: isMobile ? '4.5vw' : '1.25vw'
                        }}
                        sizes={isMobile ? "75vw" : "20.83vw"}
                    />
                </div>

                <motion.div
                    className="absolute inset-0 bg-[#5F00DB]/40 pointer-events-none z-[5] overflow-hidden"
                    style={{
                        borderRadius: isMobile ? '4.5vw' : '1.25vw'
                    }}
                    animate={{ opacity: isHovered ? 0.1 : 0 }}
                    transition={{
                        duration: 0.4,
                        ease: [0.4, 0, 0.2, 1]
                    }}
                />

                <div
                    className={`absolute bottom-0 left-0 right-0 flex flex-col justify-end ${isMobile ? 'p-[3.63vw] pb-[5.45vw]' : 'p-[1.25vw] pb-[1.25vw] pt-[3.33vw]'}`}
                    style={{
                        height: isMobile ? `calc(${card.textHeight} / 2)` : `calc(${card.textHeight} / 2)`,
                        background: "linear-gradient(180deg, rgba(22, 0, 63, 0) 0%, rgba(22, 0, 61, 0.75) 90%)",
                        backdropFilter: isMobile ? "blur(2px)" : "blur(0.1625vw)",
                        WebkitBackdropFilter: isMobile ? "blur(2px)" : "blur(0.1625vw)"
                    }}
                >
                    <div
                        className={`flex flex-col ${isMobile ? 'gap-[2.72vw]' : 'gap-[1.25vw]'}`}
                        style={{
                            paddingLeft: isMobile ? (card.textOffset !== "0vw" ? "2.72vw" : "0vw") : (card.textOffset !== "0vw" ? card.textOffset : "0vw")
                        }}
                    >
                        <h3 className={`${isMobile ? 'text-[5.45vw]' : 'text-[1.66vw]'} font-bold leading-[120%] tracking-[-0.04em] text-white`}>
                            {card.title}
                        </h3>
                        <p className={`${isMobile ? 'text-[3.63vw]' : 'text-[0.93vw]'} font-normal leading-relaxed text-white/95`}>
                            {card.description}
                        </p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}