"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

/**
 * Pixel-Perfect "How It Works" Section
 * 
 * Logic:
 * 1. 1st Card is static at the row position.
 * 2. Cards 2, 3, and 4 slide up vertically (Y-axis) from their staggered positions 
 *    to align perfectly in a horizontal row with the 1st card as the user scrolls.
 * 3. Final state: 4 cards side-by-side with tilts and backdrop blurs.
 */

const CARDS = [
    {
        id: 1,
        title: "Create Your Group",
        description: "Bring up to 5 friends. Your group becomes your identity.",
        image: "/assets/How to work Section/StickyWrapper_4.png",
        left: "0px",
        rotate: -5,
        textHeight: "214px",
        textOffset: "16.21px",
        isStatic: true
    },
    {
        id: 2,
        title: "Match With Other Groups",
        description: "Swipe through groups that share your vibe, interests, and intentions.",
        image: "/assets/How to work Section/StickyWrapper_3.png",
        left: "406px",
        rotate: 5,
        textHeight: "252px",
        textOffset: "0px",
        triggerTop: 600
    },
    {
        id: 3,
        title: "Start the Conversation",
        description: "Chat, send photos, poke someone you like, or jump on voice/video calls when you're ready.",
        image: "/assets/How to work Section/StickyWrapper_2.png",
        left: "812px",
        rotate: -5,
        textHeight: "246px",
        textOffset: "13.42px",
        triggerTop: 1200
    },
    {
        id: 4,
        title: "Meet IRL",
        description: "Take your connections from screen to real life—with the comfort of people you trust.",
        image: "/assets/How to work Section/StickyWrapper_1.png",
        right: "-2px",
        rotate: 5,
        textHeight: "246px",
        textOffset: "0px",
        triggerTop: 1800
    },
];

export default function HowItWorks() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    return (
        <section
            id="how-it-works"
            ref={sectionRef}
            className="relative w-full bg-[#111111] h-[3103px]" // Total height from CSS
        >
            {/* Sticky Viewport */}
            <div className="sticky top-0 h-screen w-full flex justify-center items-center overflow-hidden">

                {/* Main 1616px Container */}
                <div className="relative w-full max-w-[1616px] h-full flex items-center justify-center">

                    {/* Background Heading: Effortless Group Matching Starts Here */}
                    <div className="absolute top-[150px] w-full text-center pointer-events-none z-0">
                        <h2 className="text-[140px] font-bold leading-[110%] text-white opacity-10 uppercase tracking-[-0.04em] select-none whitespace-nowrap">
                            Effortless Group <br /> Matching Starts Here
                        </h2>
                    </div>

                    {/* Cards Row Container */}
                    <div className="relative w-full h-[400px] mt-[450px]">
                        {CARDS.map((card, index) => (
                            <CardItem
                                key={card.id}
                                card={card}
                                index={index}
                                scrollYProgress={scrollYProgress}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function CardItem({ card, index, scrollYProgress }: { card: any; index: number; scrollYProgress: any }) {
    // Animation Logic:
    // Card 1 is static (y=0).
    // Cards 2, 3, 4 start at their respective 'triggerTop' heights and move to 0.

    // Define progress ranges for each card's movement
    // Total scroll 0.0 to 1.0
    // Card 2: 0.1 -> 0.4
    // Card 3: 0.4 -> 0.7
    // Card 4: 0.7 -> 1.0

    const start = index === 0 ? 0 : (index - 1) * 0.25 + 0.1;
    const end = index === 0 ? 0 : index * 0.25 + 0.1;

    // Initial Y comes from CSS (600, 1200, 1800 etc)
    // We want it to "catch up" to the horizontal row (y=0)
    const initialY = card.triggerTop || 0;

    const y = useTransform(
        scrollYProgress,
        [start === 0 ? 0 : start, end === 0 ? 0.01 : end],
        [initialY, 0]
    );

    const opacity = useTransform(
        scrollYProgress,
        [start === 0 ? 0 : start - 0.05, start === 0 ? 0.05 : start + 0.05],
        [0, 1]
    );

    // If card 1, it's always y=0 and opacity=1
    const finalY = card.isStatic ? 0 : y;
    const finalOpacity = card.isStatic ? 0.3 : opacity; // Slightly dim background cards until they come in? No, user says static.
    // Actually, let's keep it fully visible if it's the "base" one.
    const displayOpacity = card.isStatic ? 1 : opacity;

    return (
        <motion.div
            style={{
                position: "absolute",
                left: card.left || "auto",
                right: card.right || "auto",
                top: 0,
                y: finalY,
                opacity: displayOpacity,
                width: "400px",
                height: "400px",
            }}
            className="z-10"
        >
            {/* Card Wrapper (400x400) */}
            <motion.div
                className="relative w-[400px] h-[400px] bg-[#5F00DB] border-[5px] border-[#111111] rounded-[24px] overflow-hidden group shadow-2xl"
                style={{
                    rotate: `${card.rotate}deg`,
                }}
                whileHover={{ scale: 1.05, rotate: card.rotate * 1.2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                {/* Image Layer */}
                <div className="absolute inset-x-[-73.72px] top-[-6.45px] bottom-[6.45px] z-0">
                    <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="400px"
                    />
                </div>

                {/* Logo background asset (based on user hint) */}
                <div className="absolute top-[40px] right-[40px] w-[50px] h-[50px] z-1 opacity-40 pointer-events-none group-hover:scale-110 transition-transform duration-500">
                    <Image
                        src="/assets/Header_Section/Vector_logo.png"
                        alt=""
                        fill
                        className="object-contain"
                    />
                </div>

                {/* Text Layer (Bottom UI) */}
                <div
                    className="absolute bottom-0 left-0 right-0 p-[24px] pb-[32px] z-10 flex flex-col justify-end transition-all duration-500 transform translate-y-4 group-hover:translate-y-0"
                    style={{
                        height: card.textHeight,
                        background: "linear-gradient(180deg, rgba(22, 0, 63, 0) 0%, rgba(22, 0, 63, 0.75) 100%)",
                        backdropFilter: "blur(4px)",
                        WebkitBackdropFilter: "blur(4px)"
                    }}
                >
                    <div
                        className="flex flex-col gap-[16px]"
                        style={{
                            paddingLeft: card.textOffset !== "0px" ? card.textOffset : "0px"
                        }}
                    >
                        <h3 className="text-[32px] font-bold leading-[120%] tracking-[-0.04em] text-white">
                            {card.title}
                        </h3>
                        <p className="text-[18px] font-normal leading-relaxed text-white/95">
                            {card.description}
                        </p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
