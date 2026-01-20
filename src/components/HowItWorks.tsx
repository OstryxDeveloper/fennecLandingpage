"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

/**
 * Pixel-Perfect "How It Works" Section
 * 
 * Logic:
 * 1. Desktop: Cards slide up to align horizontally in a row.
 * 2. Mobile: Cards stack on each other vertically at the horizontal center (no horizontal offset).
 * 3. 1st Card remains static as the base.
 */

const CARDS_DESKTOP = [
    {
        id: 1,
        title: "Create Your Group",
        description: "Bring up to 5 friends. Your group becomes your identity.",
        image: "/assets/How to work Section/StickyWrapper_4.png",
        left: "0vw",
        rotate: -5,
        textHeight: "9.93vw",
        textOffset: "0.75vw",
        isStatic: true
    },
    {
        id: 2,
        title: "Match With Other Groups",
        description: "Swipe through groups that share your vibe, interests, and intentions.",
        image: "/assets/How to work Section/StickyWrapper_3.png",
        left: "18.89vw",
        rotate: 5,
        textHeight: "11.74vw",
        textOffset: "0vw",
        triggerTop: '21.14vw'
    },
    {
        id: 3,
        title: "Start the Conversation",
        description: "Chat, send photos, poke someone you like, or jump on voice/video calls when you're ready.",
        image: "/assets/How to work Section/StickyWrapper_2.png",
        left: "37.78vw",
        rotate: -5,
        textHeight: "11.46vw",
        textOffset: "0.624vw",
        triggerTop: '42.28vw'
    },
    {
        id: 4,
        title: "Meet IRL",
        description: "Take your connections from screen to real life—with the comfort of people you trust.",
        image: "/assets/How to work Section/StickyWrapper_1.png",
        right: "-0.07vw",
        rotate: 5,
        textHeight: "11.46vw",
        textOffset: "0vw",
        triggerTop: '63.43vw'
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
        triggerTop: 0
    },
    {
        id: 2,
        title: "Match With Other Groups",
        description: "Swipe through groups that share your vibe, interests, and intentions.",
        image: "/assets/How to work Section/StickyWrapper_3.png",
        rotate: 3,
        textHeight: "173px",
        textOffset: "0px",
        triggerTop: 600
    },
    {
        id: 3,
        title: "Start the Conversation",
        description: "Chat, send photos, poke someone you like, or jump on voice/video calls when you're ready.",
        image: "/assets/How to work Section/StickyWrapper_2.png",
        rotate: -3,
        textHeight: "173px",
        textOffset: "10.62px",
        triggerTop: 1200
    },
    {
        id: 4,
        title: "Meet IRL",
        description: "Take your connections from screen to real life—with the comfort of people you trust.",
        image: "/assets/How to work Section/StickyWrapper_1.png",
        rotate: 3,
        textHeight: "173px",
        textOffset: "0px",
        triggerTop: 1800
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

    const cards = isMobile ? CARDS_MOBILE : CARDS_DESKTOP;

    return (
        <section
            id="how-it-works"
            ref={sectionRef}
            className={`relative w-full bg-[#111111] ${isMobile ? 'h-[3023px]' : 'h-[144vw]'}`}
        >
            {/* Sticky Viewport */}
            <div className="sticky top-0 h-screen w-full flex justify-center items-center overflow-hidden">

                {/* Main Container */}
                <div className={`relative w-full h-full flex items-center justify-center ${isMobile ? 'max-w-[408px]' : 'max-w-[75.2vw]'}`}>

                    {/* Background Heading */}
                    <div className={`absolute w-full text-center pointer-events-none z-0 ${isMobile ? 'top-[120px]' : 'top-[8.3vw]'}`}>
                        <h2 className={`${isMobile ? 'text-[60px]' : 'text-[5.5vw]'} font-bold leading-[110%] text-white opacity-10 uppercase tracking-[-0.04em] select-none whitespace-nowrap`}>
                            {isMobile ? (
                                <>Effortless Group <br /> Matching</>
                            ) : (
                                <>Effortless Group <br /> Matching Starts Here</>
                            )}
                        </h2>
                    </div>

                    {/* Cards Row Container */}
                    <div className={`relative w-full flex items-center justify-center ${isMobile ? 'h-[400px] mt-[100px]' : 'h-[18.6vw] mt-[22.2vw]'}`}>
                        {cards.map((card, index) => (
                            <CardItem
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

function CardItem({ card, index, scrollYProgress, isMobile }: { card: any; index: number; scrollYProgress: any, isMobile: boolean }) {
    // Animation Logic:
    // Card 1 is static (y=0).
    // Cards 2, 3, 4 start at their respective 'triggerTop' heights and move to 0.

    const start = index === 0 ? 0 : (index - 1) * 0.25 + 0.1;
    const end = index === 0 ? 0 : index * 0.25 + 0.1;

    let initialY: any = 0;
    if (!card.isStatic) {
        initialY = card.triggerTop;
    }

    const y = useTransform(
        scrollYProgress,
        [start === 0 ? 0 : start, end === 0 ? 0.01 : end],
        [initialY, isMobile ? "0px" : "0vw"]
    );

    const opacity = useTransform(
        scrollYProgress,
        [start === 0 ? 0 : start - 0.05, start === 0 ? 0.05 : start + 0.05],
        [0, 1]
    );

    const displayOpacity = card.isStatic ? 1 : opacity;
    const finalY = card.isStatic ? 0 : y;

    return (
        <motion.div
            style={{
                position: "absolute",
                // Mobile: centered. Desktop: offset left/right.
                left: isMobile ? "calc(50% - 200px + 1px)" : (card.left || "auto"),
                right: isMobile ? "auto" : (card.right || "auto"),
                top: 0,
                y: finalY,
                opacity: displayOpacity,
                width: isMobile ? "400px" : "18.6vw",
                height: isMobile ? "400px" : "18.6vw",
            }}
            className="z-10 flex items-center justify-center"
        >
            {/* Card Content (400x400 wrapper containing the actual card) */}
            <motion.div
                className={`relative bg-[#5F00DB] border-[#111111] overflow-hidden group shadow-2xl transition-all duration-300 ${isMobile
                    ? 'w-[376px] h-[376px] border-[5px] rounded-[16px]'
                    : 'w-[18.6vw] h-[18.6vw] border-[0.2vw] rounded-[1.1vw]'
                    }`}
                style={{
                    rotate: `${card.rotate}deg`,
                }}
                whileHover={{ scale: 1.05, rotate: card.rotate * 1.2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                {/* Image Layer */}
                <div className={`absolute z-0 ${isMobile
                    ? 'inset-x-[-73.9px] top-[-3.87px] bottom-[3.87px]'
                    : 'inset-x-[-3.4vw] top-[-0.3vw] bottom-[0.3vw]'
                    }`}>
                    <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-80"
                        sizes={isMobile ? "376px" : "18.6vw"}
                    />
                </div>

                {/* Text Layer (Bottom UI) */}
                <div
                    className={`absolute bottom-0 left-0 right-0 z-10 flex flex-col justify-end transition-all duration-500 transform ${isMobile ? 'translate-y-0' : 'translate-y-[0.8vw] group-hover:translate-y-0'
                        }`}
                    style={{
                        height: card.textHeight,
                        background: "linear-gradient(180deg, rgba(22, 0, 63, 0) 0%, rgba(22, 0, 63, 0.75) 100%)",
                        backdropFilter: isMobile ? "blur(4px)" : "blur(0.2vw)",
                        WebkitBackdropFilter: isMobile ? "blur(4px)" : "blur(0.2vw)"
                    }}
                >
                    <div
                        className={`flex flex-col ${isMobile ? 'gap-4 p-4' : 'gap-[0.76vw] p-[1.1vw]'}`}
                        style={{
                            paddingLeft: isMobile ? (card.textOffset !== "0px" ? "20px" : "16px") : (card.textOffset !== "0vw" ? card.textOffset : "1.1vw")
                        }}
                    >
                        <h3 className={`${isMobile ? 'text-[24px]' : 'text-[1.45vw]'} font-bold leading-[120%] tracking-[-0.04em] text-white`}>
                            {card.title}
                        </h3>
                        <p className={`${isMobile ? 'text-[16px]' : 'text-[0.83vw]'} font-normal leading-relaxed text-white/95`}>
                            {card.description}
                        </p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
