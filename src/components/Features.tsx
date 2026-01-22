"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const FEATURES = [
    {
        id: 1,
        title: "Group Matching That Actually Feels Natural",
        description: "Meeting new people doesn't have to be awkward. Our group-first approach creates an easy, comfortable way to connect with others who share your energy.",
        image: "/assets/Feature section/Mobile_mockup/Mockup Wrapper.png",
        points: [
            "Match as a group for effortless chemistry",
            "Smart recommendations based on interests and vibe",
            "Safer, more relaxed conversations from the start"
        ]
    },
    {
        id: 2,
        title: "Stand Out Instantly by Sending Pokes",
        description: "Get noticed without the pressure. Use Pokes to show interest and start interactions in a lighthearted way.",
        image: "/assets/Feature section/standout_instantly.png",
        points: [
            "Quick interaction starters",
            "Low-pressure social signals",
            "Fun and engaging way to connect"
        ]
    },
    {
        id: 3,
        title: "Chat Your Way—Text, Voice, or Video",
        description: "Choose the communication style that fits your mood. From quick texts to face-to-face video calls.",
        image: "/assets/Feature section/chat_your_way.png",
        points: [
            "Versatile messaging options",
            "High-quality voice and video",
            "Secure and private conversations"
        ]
    },
    {
        id: 4,
        title: "Join Groups Instantly With QR Code or Invite Link",
        description: "Joining a community is just a scan or click away. Easy access for you and your friends.",
        image: "/assets/Feature section/join_groups_instantly.png",
        points: [
            "Seamless onboarding",
            "Shareable invite links",
            "Instant community access"
        ]
    }
];

export default function Features() {
    const [activeId, setActiveId] = useState(1);
    const activeFeature = FEATURES.find(f => f.id === activeId) || FEATURES[0];

    return (
        <section id="features" className="w-full bg-[#111111] py-[40px] mobile:py-[5.5vw] flex flex-col items-center lg:px-[7.0vw]">
            {/* Desktop Features Container - 1083px wide (Hidden on Mobile) */}
            <div className="hidden lg:flex w-full max-w-[75.2vw] lg:max-w-none lg:w-full h-[37.2vw] relative rounded-[1.8vw] overflow-hidden">
                {/* Background Gradient & Pattern */}
                <div
                    className="absolute inset-0 bg-[#111111]"
                    style={{
                        background: 'linear-gradient(135deg, rgba(22, 0, 63, 0.9) 0%, rgba(8, 0, 24, 0.9) 100%), url("/assets/Feature section/mobile_version/Phone_BGG.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('/assets/noise.png')] mix-blend-overlay"></div>
                </div>

                {/* Content Layout: 3 Columns */}
                <div className="relative z-10 w-full h-full flex items-center px-[2vw] mobile:px-[1.87vw]">

                    {/* 1. Left Column: Stacked Cards */}
                    <div className="w-[24.5vw] flex flex-col gap-[1.1vw] items-start">
                        {FEATURES.map((feature) => {
                            const isActive = activeId === feature.id;
                            return (
                                <button
                                    key={feature.id}
                                    onClick={() => setActiveId(feature.id)}
                                    className={cn(
                                        "w-[20.8vw] text-left transition-all duration-500 rounded-[1.1vw] p-[1.1vw] flex flex-col justify-start gap-[1.1vw] overflow-hidden",
                                        isActive
                                            ? "bg-[#5F00DB] h-[12.8vw]"
                                            : "h-[5.7vw] bg-transparent hover:bg-[#030226]"
                                    )}
                                >
                                    <h3 className={cn(
                                        "text-[1.45vw] font-bold leading-[120%] tracking-[-0.04em] transition-colors duration-300",
                                        "text-white"
                                    )}>
                                        {feature.title}
                                    </h3>

                                    <AnimatePresence initial={false}>
                                        {isActive && (
                                            <motion.p
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                                className="text-white text-[0.83vw] leading-[1.45vw] font-normal"
                                            >
                                                {feature.description}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </button>
                            );
                        })}
                    </div>

                    {/* 2. Middle Column: Phone Mockup */}
                    <div className="flex-1 flex justify-center items-center h-full">
                        <div className="relative w-[24.5vw] h-[33.4vw]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeId}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    className="w-full h-full relative"
                                >
                                    <Image
                                        src={activeFeature.image}
                                        alt={activeFeature.title}
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* 3. Right Column: Points */}
                    <div className="w-[24.5vw] flex flex-col gap-[1.1vw] pl-[2.7vw]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeId}
                                initial={{ opacity: 0, x: '1.4vw' }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: '-1.4vw' }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col gap-[1.66vw]"
                            >
                                {activeFeature.points.map((point, index) => (
                                    <div key={index} className="flex items-center gap-[0.76vw] h-[3.33vw]">
                                        <div className="relative w-[1.33vw] h-[1.33vw]">
                                            <Image
                                                src="/check-circle.svg"
                                                alt=""
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                        <p className="text-white text-[1.11vw] font-normal leading-[150%] flex-1">
                                            {point}
                                        </p>
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>

            {/* Mobile Features Container (Visible on Mobile) */}
            <div className="flex lg:hidden flex-col w-full px-[20px] gap-6">
                {FEATURES.map((feature) => {
                    const isActive = activeId === feature.id;
                    return (
                        <div key={feature.id} className="flex flex-col gap-4">
                            {/* Dynamic Part: Image (Only shown for active feature) */}
                            <AnimatePresence>
                                {isActive && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                        className="overflow-hidden"
                                    >
                                        <div
                                            className="relative w-full aspect-square rounded-[32px] overflow-hidden"
                                            style={{
                                                background: 'linear-gradient(135deg, rgba(22, 0, 63, 0.9) 0%, rgba(8, 0, 24, 0.9) 100%), url("/assets/Hero_Background.PNG")',
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center'
                                            }}
                                        >
                                            <Image
                                                src={feature.image}
                                                alt={feature.title}
                                                fill
                                                className="object-contain p-8"
                                            />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Feature Card */}
                            <button
                                onClick={() => setActiveId(feature.id)}
                                className={cn(
                                    "w-full text-left transition-all duration-500 rounded-[24px] p-6 flex flex-col gap-4",
                                    isActive ? "bg-[#5F00DB]" : "bg-[#0a001a] border border-white/5"
                                )}
                            >
                                <h3 className="text-[24px] font-bold leading-tight text-white">
                                    {feature.title}
                                </h3>

                                {isActive && (
                                    <motion.p
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        className="text-white/90 text-[16px] leading-relaxed"
                                    >
                                        {feature.description}
                                    </motion.p>
                                )}
                            </button>

                            {/* Points Part (Only shown for active feature) */}
                            <AnimatePresence>
                                {isActive && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="flex flex-col gap-4 pl-2"
                                    >
                                        {feature.points.map((point, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <div className="relative w-5 h-5 flex-shrink-0">
                                                    <Image
                                                        src="/check-circle.svg"
                                                        alt=""
                                                        fill
                                                        className="object-contain"
                                                    />
                                                </div>
                                                <p className="text-white text-[16px]">{point}</p>
                                            </div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>


           
        </section>
    );
}



