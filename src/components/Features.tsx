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
        image: "/assets/Page 3-1.JPG",
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
        image: "/assets/Page 3-1-1.JPG",
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
        image: "/assets/Page 3-1-2.JPG",
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
        image: "/assets/Page 3-1-3.JPG",
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
        <section id="features" className="bg-[#1a1a1a] py-10 px-10 md:px-10">
            {/* Main Features Container */}
            <div className="bg-[#2D1B69] rounded-[40px] mx-50 my-30 p-24 md:p-16 min-h-[600px] min-w-[200px] relative overflow-hidden">
                {/* Background Glow */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

                    {/* Left Column: Vertical Stacked Cards */}
                    <div className="flex flex-col gap-6">
                        {FEATURES.map((feature) => {
                            const isActive = activeId === feature.id;
                            return (
                                <button
                                    key={feature.id}
                                    onClick={() => setActiveId(feature.id)}
                                    className={cn(
                                        "text-left transition-all duration-500 rounded-3xl p-6 flex flex-col gap-3 group shrink-0",
                                        isActive
                                            ? "bg-[#6D28D9] shadow-2xl scale-105"
                                            : "hover:bg-purple-900/40 opacity-80 hover:opacity-100"
                                    )}
                                    style={{ width: '100%' }}
                                >
                                    <h3 className={cn(
                                        "text-xl md:text-2xl font-bold transition-colors duration-300",
                                        isActive ? "text-white" : "text-purple-200"
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
                                                className="text-purple-100/80 leading-relaxed text-sm md:text-base overflow-hidden"
                                            >
                                                {feature.description}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </button>
                            );
                        })}
                    </div>

                    {/* Middle Column: Dynamic Image (Phone Mockup) */}
                    <div className="flex justify-center items-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeId}
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="relative w-full max-w-[320px] aspect-[9/19] rounded-[3rem] border-8 border-[#1a1a11] shadow-2xl overflow-hidden bg-black"
                            >
                                <Image
                                    src={activeFeature.image}
                                    alt={activeFeature.title}
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Column: Dynamic Points */}
                    <div className="flex flex-col gap-8 justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeId}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col gap-6"
                            >
                                {activeFeature.points.map((point, index) => (
                                    <div key={index} className="flex items-start gap-4 group">
                                        <div className="mt-1 p-1 bg-green-500/20 rounded-full border border-green-500/50 group-hover:bg-green-500 transition-colors duration-300">
                                            <Check className="w-4 h-4 text-green-400 group-hover:text-white" />
                                        </div>
                                        <p className="text-purple-100 text-lg md:text-xl font-medium leading-tight">
                                            {point}
                                        </p>
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>

            {/* Subsection 2 */}
            <div className="mt-20 flex flex-col gap-12 max-w-[1550px] mx-auto">

                {/* Upper Div (Transparent with Highlighted Text) */}
                <div className="text-left space-y-6">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                        Traditional dating apps are <span className="inline-block bg-[#6D28D9] px-4 py-1 rounded-full">too individual.</span> <br />
                        Social networks are <span className="inline-block bg-[#6D28D9] px-4 py-1 rounded-full">too broad.</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-3xl leading-relaxed">
                        There's no space for small groups who want to meet new people—whether for friendships, hangouts, trips, or shared hobbies.
                    </p>
                </div>

                {/* Lower Div (Pictured Background) */}
                <div className="relative h-[600px] rounded-[40px] overflow-hidden group shadow-2xl">
                    <Image
                        src="/assets/Page 3.JPG"
                        alt="Group Connection"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    {/* Bottom Side (Basement) */}
                    <div className="absolute inset-x-0 bottom-0 p-12 flex justify-between items-end">
                        <h3 className="text-3xl md:text-5xl font-bold text-white max-w-3xl leading-[1.1]">
                            Fennec makes expanding your circle natural, effortless, and fun—together.
                        </h3>

                        {/* Logo / Icon */}
                        <div className="flex-shrink-0">
                            <svg width="80" height="80" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white drop-shadow-lg">
                                <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                                <path d="M20 12V28M12 20H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <circle cx="20" cy="20" r="4" fill="currentColor" />
                                <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                                <circle cx="28" cy="12" r="1.5" fill="currentColor" />
                                <circle cx="12" cy="28" r="1.5" fill="currentColor" />
                                <circle cx="28" cy="28" r="1.5" fill="currentColor" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subsection 3: Statistics Grid */}
            <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[1550px] mx-auto w-full">

                {/* Left Card: 94% Hero Stat */}
                <div className="bg-[#2D1B69] rounded-[40px] p-12 md:p-20 flex flex-col justify-center items-center text-center min-h-[600px] border border-white/5 relative overflow-hidden group">
                    {/* Subtle Internal Glow */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-purple-500/10 to-transparent pointer-events-none" />

                    <motion.h2
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-[120px] md:text-[180px] font-black text-white leading-none tracking-tight group-hover:scale-105 transition-transform duration-500"
                    >
                        94%
                    </motion.h2>
                    <p className="text-white/90 text-2xl md:text-4xl font-bold mt-8 max-w-md leading-tight">
                        People Feel More Comfortable Meeting New People via Group Matching
                    </p>
                </div>

                {/* Right Column Stack */}
                <div className="flex flex-col gap-8">

                    {/* Top Card: 78% Wide Stat */}
                    <div className="bg-[#6D28D9] rounded-[40px] p-12 flex flex-col justify-center items-center text-center flex-1 border border-white/5 shadow-xl hover:scale-[1.02] transition-transform duration-300">
                        <h2 className="text-8xl md:text-[120px] font-black text-white leading-none">78%</h2>
                        <p className="text-white/90 text-xl md:text-2xl font-bold mt-6">
                            of Users Report Better First Interactions in Groups
                        </p>
                    </div>

                    {/* Bottom Horizontal Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* 1.2M+ Stat */}
                        <div className="bg-[#6D28D9] rounded-[40px] p-10 flex flex-col justify-center items-center text-center border border-white/5 shadow-xl hover:scale-[1.02] transition-transform duration-300">
                            <h2 className="text-6xl md:text-7xl font-black text-white">1.2M+</h2>
                            <p className="text-white/90 text-lg md:text-xl font-bold mt-4 uppercase tracking-wider">
                                Conversation Started
                            </p>
                        </div>

                        {/* 350K+ Stat */}
                        <div className="bg-[#6D28D9] rounded-[40px] p-10 flex flex-col justify-center items-center text-center border border-white/5 shadow-xl hover:scale-[1.02] transition-transform duration-300">
                            <h2 className="text-6xl md:text-7xl font-black text-white">350K+</h2>
                            <p className="text-white/90 text-lg md:text-xl font-bold mt-4 uppercase tracking-wider">
                                Groups Connected
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            {/* Subsection 4: Testimonials Slider */}
            <div className="mt-40 max-w-[1550px] mx-auto w-full relative">
                <div className="bg-[#111111] rounded-[40px] p-12 md:p-24 min-h-[500px] relative overflow-hidden border border-white/5">

                    {/* Floating Quote Icon */}
                    <div className="absolute top-12 right-12 opacity-20 group">
                        <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-500 transition-transform duration-500 group-hover:rotate-12">
                            <path d="M45.5 45H25.5V65H38.8C37.5 73.3 31.2 78.8 25.5 80V85C35.5 83.3 45.5 73.3 45.5 58.3V45ZM85.5 45H65.5V65H78.8C77.5 73.3 71.2 78.8 65.5 80V85C75.5 83.3 85.5 73.3 85.5 58.3V45Z" fill="currentColor" />
                        </svg>
                    </div>

                    <TestimonialsSlider />
                </div>
            </div>
        </section>
    );
}

const TESTIMONIALS = [
    {
        id: 1,
        text: "Made new friends, expanded our circle, and now weekends actually feel exciting again.",
        author: "Ben & Friends",
        avatars: ["/assets/Page 3-1-1.JPG", "/assets/Page 3-1-2.JPG", "/assets/Page 3-1-3.JPG", "/assets/page 3-3.JPG"]
    },
    {
        id: 2,
        text: "The group matching is so seamless. We met three other groups during our trip to Bali and it was incredible!",
        author: "The Travel Squad",
        avatars: ["/assets/Page 3-1.JPG", "/assets/Page 3-2.JPG", "/assets/Page 3-1-1.JPG", "/assets/Page 3-1-2.JPG"]
    }
];

function TestimonialsSlider() {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    const prev = () => setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

    return (
        <div className="relative z-10 h-full flex flex-col justify-between gap-12">

            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-10"
                >
                    {/* Avatars Stack */}
                    <div className="flex -space-x-4">
                        {TESTIMONIALS[index].avatars.map((src, i) => (
                            <div key={i} className="relative w-16 h-16 rounded-full border-4 border-[#111111] overflow-hidden shadow-xl">
                                <Image src={src} alt="User" fill className="object-cover" />
                            </div>
                        ))}
                    </div>

                    {/* Content */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white max-w-5xl leading-tight">
                        "{TESTIMONIALS[index].text}"
                    </h2>
                </motion.div>
            </AnimatePresence>

            {/* Bottom Row: Author and Controls */}
            <div className="flex justify-between items-end mt-auto">
                <div className="flex flex-col gap-2">
                    <p className="text-2xl md:text-3xl font-bold text-white">— {TESTIMONIALS[index].author}</p>
                </div>

                <div className="flex gap-4">
                    <button
                        onClick={prev}
                        className="w-12 h-12 rounded-full bg-[#6D28D9]/20 hover:bg-[#6D28D9] border border-[#6D28D9]/40 flex items-center justify-center transition-all duration-300 group"
                    >
                        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                    </button>
                    <button
                        onClick={next}
                        className="w-12 h-12 rounded-full bg-[#6D28D9]/20 hover:bg-[#6D28D9] border border-[#6D28D9]/40 flex items-center justify-center transition-all duration-300 group"
                    >
                        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                    </button>
                </div>
            </div>
        </div>
    );
}

import { ChevronLeft, ChevronRight } from "lucide-react";
