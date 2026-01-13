"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// 4 cards for horizontal alignment (colors as placeholders instead of images)
const CARDS = [
    {
        id: 1,
        title: "Create Your Group",
        description: "Set up a group in seconds and invite your people.",
        color: "bg-gradient-to-br from-blue-500 to-blue-700",
    },
    {
        id: 2,
        title: "Match With Others",
        description: "Find and connect with relevant members instantly.",
        color: "bg-gradient-to-br from-purple-500 to-purple-700",
    },
    {
        id: 3,
        title: "Start the Conversation",
        description: "Kick off discussions and keep engagement high.",
        color: "bg-gradient-to-br from-orange-500 to-orange-700",
    },
    {
        id: 4,
        title: "Meet IRL",
        description: "Turn online interactions into real-world connections.",
        color: "bg-gradient-to-br from-green-500 to-green-700",
    },
];

export default function HowItWorks() {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
    });

    return (
        <section
            id="how-it-works"
            ref={targetRef}
            className="relative h-[400vh] bg-[#1a1a1a]"
        >
            {/* Sticky viewport for stacked card animation */}
            <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
                {/* Heading/content overlay */}
                <div className="absolute top-20 left-0 right-0 z-30 text-center px-4">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        How It Works
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                        Scroll to reveal each step. The journey unfolds as you move.
                    </p>
                </div>

                {/* Cards Container - Stacked animation with individual offsets */}
                <div className="flex gap-4 md:gap-8 px-4 md:px-10 items-center">
                    {CARDS.map((card, index) => {
                        // Card 0 is static, others have progressive offsets
                        // Card 1: static (always visible at y: 0)
                        // Card 2: starts at 0%, finishes at 33% (0 to 0.33)
                        // Card 3: starts at 33%, finishes at 66% (0.33 to 0.66)
                        // Card 4: starts at 66%, finishes at 100% (0.66 to 1.0)
                        const start = index === 0 ? 0 : (index - 1) / CARDS.length;
                        const end = index === 0 ? 0 : index / CARDS.length;

                        // Card 1 stays at y: 0, others fly in from bottom (1000px)
                        const y = useTransform(
                            scrollYProgress,
                            index === 0 
                                ? [0, 1]
                                : [0, start, end],
                            index === 0 
                                ? [0, 0]
                                : [1000, 800, 0]
                        );

                        return (
                            <HowItWorksCard
                                key={card.id}
                                card={card}
                                index={index}
                                y={y}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function HowItWorksCard({ 
    card, 
    index,
    y 
}: { 
    card: (typeof CARDS)[number];
    index: number;
    y: any;
}) {
    // Alternate tilt direction for visual interest
    const tilt = index % 2 === 0 ? -4 : 4;

    return (
        <motion.div
            style={{ 
                y,
                rotate: tilt,
            }}
            whileHover={{
                rotate: tilt + (tilt > 0 ? 2 : -2),
                scale: 1.05,
            }}
            transition={{ 
                type: "spring", 
                stiffness: 50,
                damping: 15,
            }}
            className="group relative h-[450px] w-[300px] md:w-[350px] overflow-hidden rounded-2xl bg-neutral-900 shadow-2xl cursor-pointer"
        >
            {/* Background (color placeholder instead of image) */}
            <motion.div
                className="absolute inset-0 z-0"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 50 }}
            >
                <div className={`h-full w-full ${card.color} opacity-90`} />
                <div className="bg-gradient-to-t from-black/80 via-black/40 to-transparent h-full w-full absolute z-10" />
            </motion.div>

            {/* Text content at bottom-left */}
            <div className="absolute bottom-8 left-8 z-20 max-w-[260px] transform transition-all duration-300 group-hover:translate-y-[-8px]">
                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-2 transform transition-all duration-300 group-hover:scale-105">
                    {card.title}
                </h3>
                <p className="text-sm md:text-base text-white/90 transform transition-all duration-300 group-hover:text-white">
                    {card.description}
                </p>
            </div>

            {/* Hover glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-white rounded-2xl z-15" />
        </motion.div>
    );
}
