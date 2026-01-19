"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";

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
        <section id="features" className="w-full bg-[#11011e] py-[5.5vw] flex flex-col items-center">
            {/* Main Features Container - 1083px wide */}
            <div className="w-full max-w-[75.2vw] h-[37.2vw] relative rounded-[1.8vw] overflow-hidden">
                {/* Background Gradient & Pattern */}
                <div
                    className="absolute inset-0 bg-[#16003F]"
                    style={{
                        background: 'linear-gradient(135deg, #16003F 0%, #080018 100%)'
                    }}
                >
                    {/* Subtle grid or noise could go here */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('/assets/noise.png')] mix-blend-overlay"></div>
                </div>

                {/* Content Layout: 3 Columns */}
                <div className="relative z-10 w-full h-full flex items-center px-[2vw] md:px-[1.87vw]">

                    {/* 1. Left Column: Stacked Cards (354px area, 300px cards) */}
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
                                            : "h-[5.7vw] bg-white/5 hover:bg-white/10"
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

                    {/* 2. Middle Column: Phone Mockup (354px width, 482px height) */}
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

                    {/* 3. Right Column: Points (354px area) */}
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
                                        <div className="w-[2.22vw] h-[2.22vw] flex items-center justify-center rounded-full bg-[#3ADC60]/10 border border-[#3ADC60]/20">
                                            <Check className="w-[1.1vw] h-[1.1vw] text-[#3ADC60]" />
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

            {/* Subsection 1: Problem Statement (formerly Subsection 2) */}
            <div className="w-full flex flex-col items-center py-[5.5vw] px-[3.5vw] md:px-[7.08vw]">
                <div className="w-full max-w-[75.2vw] flex flex-col items-start gap-[1.87vw]">

                    {/* Heading Section */}
                    <div className="w-full relative flex flex-col items-start">
                        <h2 className="text-white text-[6.4vw] md:text-[3vw] font-bold leading-[110%] tracking-[-0.04em] text-left">
                            Traditional dating apps are <br className="md:hidden" /><span className="inline-block bg-[#5F00DB] px-[0.97vw] py-[0.14vw] rounded-[0.76vw] my-[0.27vw] md:my-0">too individual.</span> <br />
                            Social networks are <br className="md:hidden" /><span className="inline-block bg-[#5F00DB] px-[0.97vw] py-[0.14vw] rounded-[0.76vw] my-[0.27vw] md:my-0">too broad.</span>
                        </h2>
                    </div>

                    {/* Description */}
                    <p className="text-[#CCCCCC] text-[3.2vw] md:text-[1.11vw] font-normal leading-[120%] tracking-[-0.04em] text-left max-w-[75.2vw]">
                        There&apos;s no space for small groups who want to meet new people—whether for friendships, hangouts, trips, or shared hobbies.
                    </p>

                    {/* Lower Image Card */}
                    <div className="relative w-full h-[71.5vw] md:h-[31.9vw] rounded-[1.8vw] overflow-hidden mt-[1.87vw] group shadow-2xl">
                        <Image
                            src="/assets/Feature Subsection-1/lottie_file.png"
                            alt="Group Connection"
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        {/* Overlay with Content */}
                        <div className="absolute inset-0 bg-[#16003F]/50 p-[5.3vw] md:p-[3.75vw] flex flex-col md:flex-row items-center md:items-end justify-between gap-[1.87vw] md:gap-[1.87vw]">
                            <h3 className="text-white text-[6.4vw] md:text-[3.33vw] font-normal leading-[110%] tracking-[-0.04em] flex-1 text-center md:text-left">
                                Fennec makes expanding your circle natural, effortless, and fun—together.
                            </h3>

                            {/* Logo / Pattern */}
                            <div className="w-[17vw] h-[17vw] md:w-[7.36vw] md:h-[7.36vw] relative flex-shrink-0">
                                <Image
                                    src="/assets/Feature Subsection-1/Vector_logo.png"
                                    alt="Fennec Pattern"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subsection 3: Statistics Grid */}
            <div className="mt-[5.5vw] grid grid-cols-1 lg:grid-cols-2 gap-[1.4vw] max-w-[72vw] mx-auto w-full">
                <div className="bg-[#2D1B69] rounded-[2.7vw] p-[3.75vw] flex flex-col justify-center items-center text-center min-h-[32.5vw] border border-white/5 relative overflow-hidden group">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[27.9vw] h-[27.9vw] bg-purple-500/10 blur-[5.5vw] rounded-full" />
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-[25vw] md:text-[10.2vw] font-black text-white leading-none tracking-tight group-hover:scale-105 transition-transform duration-700"
                    >
                        94%
                    </motion.h2>
                    <p className="text-white/90 text-[6.4vw] md:text-[2.08vw] font-bold mt-[2.2vw] max-w-[39.5vw] leading-tight">
                        People Feel More Comfortable Meeting New People via Group Matching
                    </p>
                </div>

                <div className="flex flex-col gap-[1.4vw]">
                    <div className="bg-[#5F00DB] rounded-[2.7vw] p-[3vw] flex flex-col justify-center items-center text-center flex-1 border border-white/5 shadow-2xl hover:scale-[1.02] transition-transform duration-500">
                        <h2 className="text-[16vw] md:text-[6.5vw] font-black text-white leading-none">78%</h2>
                        <p className="text-white/90 text-[5.3vw] md:text-[1.66vw] font-bold mt-[1.4vw]">
                            of Users Report Better First Interactions in Groups
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.4vw]">
                        <div className="bg-[#1a0035] rounded-[2.7vw] p-[2.2vw] flex flex-col justify-center items-center text-center border border-white/5 shadow-xl hover:scale-[1.02] transition-transform duration-500">
                            <h2 className="text-[10.6vw] md:text-[4.16vw] font-black text-white">1.2M+</h2>
                            <p className="text-white/70 text-[3.7vw] md:text-[0.97vw] font-bold mt-[1.1vw] uppercase tracking-wider">
                                Conversations Started
                            </p>
                        </div>
                        <div className="bg-[#1a0035] rounded-[2.7vw] p-[2.2vw] flex flex-col justify-center items-center text-center border border-white/5 shadow-xl hover:scale-[1.02] transition-transform duration-500">
                            <h2 className="text-[10.6vw] md:text-[4.16vw] font-black text-white">350K+</h2>
                            <p className="text-white/70 text-[3.7vw] md:text-[0.97vw] font-bold mt-[1.1vw] uppercase tracking-wider">
                                Groups Connected
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subsection 4: Testimonials Slider */}
            <TestimonialsSlider />
        </section>
    );
}

const TESTIMONIALS = [
    {
        id: 1,
        text: "Group matching helped us find people with the same vibe. It feels way more natural.",
        author: "— Erica & Friends",
        avatars: ["/assets/Testimonials/Avatar.png", "/assets/Testimonials/Avatar.png", "/assets/Testimonials/Avatar.png", "/assets/Testimonials/Avatar.png"]
    },
    {
        id: 2,
        text: "Finally, an app that understands social life happens in groups, not just one-on-one.",
        author: "— The Weekend Squad",
        avatars: ["/assets/Testimonials/Avatar.png", "/assets/Testimonials/Avatar.png", "/assets/Testimonials/Avatar.png", "/assets/Testimonials/Avatar.png"]
    },
    {
        id: 3,
        text: "We met our best adventure buddies here. The group dynamics are just spot on!",
        author: "— Adventure Seekers",
        avatars: ["/assets/Testimonials/Avatar.png", "/assets/Testimonials/Avatar.png", "/assets/Testimonials/Avatar.png", "/assets/Testimonials/Avatar.png"]
    },
    {
        id: 4,
        text: "No more awkward first dates. Meeting another group is so much more relaxed.",
        author: "— Local Crew",
        avatars: ["/assets/Testimonials/Avatar.png", "/assets/Testimonials/Avatar.png", "/assets/Testimonials/Avatar.png", "/assets/Testimonials/Avatar.png"]
    },
    {
        id: 5,
        text: "This transformed how we travel. We connect with locals and other travelers instantly.",
        author: "— Globetrotters",
        avatars: ["/assets/Testimonials/Avatar.png", "/assets/Testimonials/Avatar.png", "/assets/Testimonials/Avatar.png", "/assets/Testimonials/Avatar.png"]
    },
    {
        id: 6,
        text: "The easiest way to find people who actually want to do the same stuff as you.",
        author: "— Hobbies & Vibes",
        avatars: ["/assets/Testimonials/Avatar.png", "/assets/Testimonials/Avatar.png", "/assets/Testimonials/Avatar.png", "/assets/Testimonials/Avatar.png"]
    }
];

function TestimonialsSlider() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const next = () => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    };
    const prev = () => {
        setDirection(-1);
        setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? "50vw" : "-50vw",
            opacity: 0,
            scale: 0.5,
            filter: "blur(4px)",
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
        },
        exit: (direction: number) => ({
            x: direction > 0 ? "-50vw" : "50vw",
            opacity: 0,
            scale: 0.5,
            filter: "blur(4px)",
        }),
    };

    return (
        <section className="w-full h-[36vw] flex flex-col items-center justify-center relative overflow-hidden bg-transparent py-[5.5vw] px-[7vw]">
            {/* Outer Container - 1083px */}
            <div className="w-full max-w-[75.2vw] h-[24.8vw] flex flex-col items-center gap-[1.87vw] relative isolation-isolate">

                {/* Huge Quotation Mark Decor */}
                <div
                    className="absolute right-[-0.9vw] top-[-0.9vw] w-[8.75vw] h-[6.3vw] flex items-center justify-center select-none pointer-events-none z-0"
                    style={{ opacity: 0.2 }}
                >
                    <span className="text-[9.3vw] text-white font-serif leading-none">”</span>
                </div>

                {/* Slides Container */}
                <div className="w-full h-[17.4vw] flex flex-col items-start relative z-10">
                    <AnimatePresence initial={false} custom={direction} mode="popLayout">
                        <motion.div
                            key={index}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                duration: 0.8,
                                ease: [0.32, 0.72, 0, 1],
                                opacity: { duration: 0.4 }
                            }}
                            className="absolute w-full h-full flex flex-col items-start gap-[1.87vw]"
                        >
                            {/* Avatars Row */}
                            <div className="flex flex-row items-start gap-[0.76vw] w-[20vw] h-[4.4vw]">
                                {TESTIMONIALS[index].avatars.map((src, i) => (
                                    <div
                                        key={i}
                                        className="w-[4.4vw] h-[4.4vw] rounded-full overflow-hidden flex-shrink-0 bg-[#5F00DB]"
                                    >
                                        <Image
                                            src={src}
                                            alt="User"
                                            width={64}
                                            height={64}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <h2
                                className="w-full h-[7.36vw] flex items-center text-white font-normal"
                                style={{
                                    fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif",
                                    fontSize: '3.33vw',
                                    lineHeight: '110%',
                                    letterSpacing: '-0.04em'
                                }}
                            >
                                {TESTIMONIALS[index].text}
                            </h2>

                            {/* Author Name */}
                            <p
                                className="w-full h-[1.87vw] flex items-center text-white font-normal"
                                style={{
                                    fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif",
                                    fontSize: '1.66vw',
                                    lineHeight: '110%',
                                    letterSpacing: '-0.04em'
                                }}
                            >
                                {TESTIMONIALS[index].author}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigator / Controls */}
                <div
                    className="absolute right-0 bottom-0 flex flex-row items-center gap-[1.1vw] w-[5.5vw] h-[2.2vw]"
                >
                    <button
                        onClick={prev}
                        className="w-[2.2vw] h-[2.2vw] flex items-center justify-center bg-[#5F00DB] rounded-[2.4vw] transition-all duration-300 hover:scale-110 active:scale-95 group shadow-[0px_0px_0.2vw_rgba(95,0,219,0.25),0px_0.2vw_0.5vw_rgba(95,0,219,0.25)]"
                    >
                        <ChevronLeft className="w-[1.1vw] h-[1.1vw] text-white" />
                    </button>
                    <button
                        onClick={next}
                        className="w-[2.2vw] h-[2.2vw] flex items-center justify-center bg-[#5F00DB] rounded-[2.4vw] transition-all duration-300 hover:scale-110 active:scale-95 group shadow-[0px_0px_0.2vw_rgba(95,0,219,0.25),0px_0.2vw_0.5vw_rgba(95,0,219,0.25)]"
                    >
                        <ChevronRight className="w-[1.1vw] h-[1.1vw] text-white" />
                    </button>
                </div>
            </div>
        </section>
    );
}
