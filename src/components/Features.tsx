"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

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
        <section id="features" className="w-full bg-[#11011e] py-[120px] flex flex-col items-center">
            {/* Main Features Container - 1616px wide */}
            <div className="w-full max-w-[1616px] h-[800px] relative rounded-[40px] overflow-hidden">
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
                <div className="relative z-10 w-full h-full flex items-center px-10 md:px-[40px]">

                    {/* 1. Left Column: Stacked Cards (528px area, 448px cards) */}
                    <div className="w-[528px] flex flex-col gap-6 items-start">
                        {FEATURES.map((feature) => {
                            const isActive = activeId === feature.id;
                            return (
                                <button
                                    key={feature.id}
                                    onClick={() => setActiveId(feature.id)}
                                    className={cn(
                                        "w-[448px] text-left transition-all duration-500 rounded-[24px] p-6 flex flex-col justify-start gap-6 overflow-hidden",
                                        isActive
                                            ? "bg-[#5F00DB] h-[276px]"
                                            : "h-[124px] bg-white/5 hover:bg-white/10"
                                    )}
                                >
                                    <h3 className={cn(
                                        "text-[32px] font-bold leading-[120%] tracking-[-0.04em] transition-colors duration-300",
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
                                                className="text-white text-[18px] leading-[32px] font-normal"
                                            >
                                                {feature.description}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </button>
                            );
                        })}
                    </div>

                    {/* 2. Middle Column: Phone Mockup (528px width, 720px height) */}
                    <div className="flex-1 flex justify-center items-center h-full">
                        <div className="relative w-[528px] h-[720px]">
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

                    {/* 3. Right Column: Points (528px area) */}
                    <div className="w-[528px] flex flex-col gap-[24px] pl-[60px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeId}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col gap-[24px]"
                            >
                                {activeFeature.points.map((point, index) => (
                                    <div key={index} className="flex items-center gap-4 h-[72px]">
                                        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#3ADC60]/10 border border-[#3ADC60]/20">
                                            <Check className="w-6 h-6 text-[#3ADC60]" />
                                        </div>
                                        <p className="text-white text-[24px] font-normal leading-[150%] flex-1">
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
            <div className="w-full flex flex-col items-center py-[120px] px-[20px] md:px-[152px]">
                <div className="w-full max-w-[1616px] flex flex-col items-start gap-[40px]">

                    {/* Heading Section */}
                    <div className="w-full relative flex flex-col items-start">
                        <h2 className="text-white text-4xl md:text-[64px] font-bold leading-[110%] tracking-[-0.04em] text-left">
                            Traditional dating apps are <br className="md:hidden" /><span className="inline-block bg-[#5F00DB] px-5 py-1 rounded-[16px] my-1 md:my-0">too individual.</span> <br />
                            Social networks are <br className="md:hidden" /><span className="inline-block bg-[#5F00DB] px-5 py-1 rounded-[16px] my-1 md:my-0">too broad.</span>
                        </h2>
                    </div>

                    {/* Description */}
                    <p className="text-[#CCCCCC] text-lg md:text-[24px] font-normal leading-[120%] tracking-[-0.04em] text-left max-w-[1616px]">
                        There's no space for small groups who want to meet new people—whether for friendships, hangouts, trips, or shared hobbies.
                    </p>

                    {/* Lower Image Card */}
                    <div className="relative w-full h-[400px] md:h-[686px] rounded-[40px] overflow-hidden mt-[40px] group shadow-2xl">
                        <Image
                            src="/assets/Feature Subsection-1/lottie_file.png"
                            alt="Group Connection"
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        {/* Overlay with Content */}
                        <div className="absolute inset-0 bg-[#16003F]/50 p-8 md:p-[80px] flex flex-col md:flex-row items-center md:items-end justify-between gap-10 md:gap-[40px]">
                            <h3 className="text-white text-3xl md:text-[72px] font-normal leading-[110%] tracking-[-0.04em] flex-1 text-center md:text-left">
                                Fennec makes expanding your circle natural, effortless, and fun—together.
                            </h3>

                            {/* Logo / Pattern */}
                            <div className="w-24 h-24 md:w-[158px] md:h-[158px] relative flex-shrink-0">
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
            <div className="mt-[120px] grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1550px] mx-auto w-full">
                <div className="bg-[#2D1B69] rounded-[60px] p-20 flex flex-col justify-center items-center text-center min-h-[700px] border border-white/5 relative overflow-hidden group">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 blur-[120px] rounded-full" />
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-[140px] md:text-[220px] font-black text-white leading-none tracking-tight group-hover:scale-105 transition-transform duration-700"
                    >
                        94%
                    </motion.h2>
                    <p className="text-white/90 text-3xl md:text-5xl font-bold mt-12 max-w-xl leading-tight">
                        People Feel More Comfortable Meeting New People via Group Matching
                    </p>
                </div>

                <div className="flex flex-col gap-8">
                    <div className="bg-[#5F00DB] rounded-[60px] p-16 flex flex-col justify-center items-center text-center flex-1 border border-white/5 shadow-2xl hover:scale-[1.02] transition-transform duration-500">
                        <h2 className="text-8xl md:text-[140px] font-black text-white leading-none">78%</h2>
                        <p className="text-white/90 text-2xl md:text-3xl font-bold mt-8">
                            of Users Report Better First Interactions in Groups
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-[#1a0035] rounded-[60px] p-12 flex flex-col justify-center items-center text-center border border-white/5 shadow-xl hover:scale-[1.02] transition-transform duration-500">
                            <h2 className="text-6xl md:text-8xl font-black text-white">1.2M+</h2>
                            <p className="text-white/70 text-xl font-bold mt-6 uppercase tracking-wider">
                                Conversations Started
                            </p>
                        </div>
                        <div className="bg-[#1a0035] rounded-[60px] p-12 flex flex-col justify-center items-center text-center border border-white/5 shadow-xl hover:scale-[1.02] transition-transform duration-500">
                            <h2 className="text-6xl md:text-8xl font-black text-white">350K+</h2>
                            <p className="text-white/70 text-xl font-bold mt-6 uppercase tracking-wider">
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

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const next = () => setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    const prev = () => setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

    return (
        <section className="w-full h-[774px] flex flex-col items-center justify-center relative overflow-hidden bg-transparent py-[120px] px-[152px]">
            {/* Outer Container - 1616px */}
            <div className="w-full max-w-[1616px] h-[534px] flex flex-col items-center gap-[40px] relative isolation-isolate">

                {/* Huge Quotation Mark Decor */}
                <div
                    className="absolute right-[-20px] top-[-20px] w-[188px] h-[136px] flex items-center justify-center select-none pointer-events-none z-0"
                    style={{ opacity: 0.2 }}
                >
                    <span className="text-[200px] text-white font-serif leading-none">”</span>
                </div>

                {/* Slides Container */}
                <div className="w-full h-[374px] flex flex-col items-start overflow-hidden relative z-10">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="w-full h-full flex flex-col items-start gap-[40px]"
                        >
                            {/* Avatars Row */}
                            <div className="flex flex-row items-start gap-[16px] w-[432px] h-[96px]">
                                {TESTIMONIALS[index].avatars.map((src, i) => (
                                    <div
                                        key={i}
                                        className="w-[96px] h-[96px] rounded-full overflow-hidden flex-shrink-0 bg-[#5F00DB]"
                                    >
                                        <Image
                                            src={src}
                                            alt="User"
                                            width={96}
                                            height={96}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <h2
                                className="w-full h-[158px] flex items-center text-white font-normal"
                                style={{
                                    fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif",
                                    fontSize: '72px',
                                    lineHeight: '110%',
                                    letterSpacing: '-0.04em'
                                }}
                            >
                                {TESTIMONIALS[index].text}
                            </h2>

                            {/* Author Name */}
                            <p
                                className="w-full h-[40px] flex items-center text-white font-normal"
                                style={{
                                    fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif",
                                    fontSize: '36px',
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
                    className="absolute right-0 bottom-0 flex flex-row items-center gap-[24px] w-[120px] h-[48px]"
                >
                    <button
                        onClick={prev}
                        className="w-[48px] h-[48px] flex items-center justify-center bg-[#5F00DB] rounded-[52px] transition-all duration-300 hover:scale-110 active:scale-95 group shadow-[0px_0px_4px_rgba(95,0,219,0.25),0px_4px_12px_rgba(95,0,219,0.25)]"
                    >
                        <ChevronLeft className="w-6 h-6 text-white" />
                    </button>
                    <button
                        onClick={next}
                        className="w-[48px] h-[48px] flex items-center justify-center bg-[#5F00DB] rounded-[52px] transition-all duration-300 hover:scale-110 active:scale-95 group shadow-[0px_0px_4px_rgba(95,0,219,0.25),0px_4px_12px_rgba(95,0,219,0.25)]"
                    >
                        <ChevronRight className="w-6 h-6 text-white" />
                    </button>
                </div>
            </div>
        </section>
    );
}

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";
