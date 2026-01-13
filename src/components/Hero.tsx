"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Slider colors - different colored divs as placeholders (extracted from images)
const SLIDER_COLORS = [
    { bg: "bg-gradient-to-br from-blue-600 to-blue-800", name: "Blue" },
    { bg: "bg-gradient-to-br from-purple-600 to-purple-800", name: "Purple" },
    { bg: "bg-gradient-to-br from-orange-500 to-red-600", name: "Orange" },
    { bg: "bg-gradient-to-br from-green-600 to-green-800", name: "Green" },
];

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % SLIDER_COLORS.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, []);

    // Get the 3 slides to display (current, previous, next)
    const getVisibleSlides = () => {
        const prevIndex = (currentIndex - 1 + SLIDER_COLORS.length) % SLIDER_COLORS.length;
        const nextIndex = (currentIndex + 1) % SLIDER_COLORS.length;
        return [
            { color: SLIDER_COLORS[prevIndex], index: prevIndex, position: "left" },
            { color: SLIDER_COLORS[currentIndex], index: currentIndex, position: "center" },
            { color: SLIDER_COLORS[nextIndex], index: nextIndex, position: "right" },
        ];
    };

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 overflow-hidden bg-[#1a1a1a]">
            {/* Vertical centered content layout */}
            <div className="container mx-auto px-4 md:px-8 flex flex-col items-center text-center relative z-10 mb-16">
                {/* Heading at center */}
                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white max-w-4xl">
                    Everything you need. <br />
                    <span className="text-orange-500">All in one place.</span>
                </h1>

                {/* Paragraph at center */}
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
                    Experience the future of digital management with Fenec. Simple, fast, and secure.
                </p>

                {/* CTA buttons at center */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 h-12 text-lg">
                        Get Started
                    </Button>
                    <Button variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-white/20 rounded-full px-8 h-12 text-lg backdrop-blur-sm">
                        Learn More <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            </div>

            {/* Horizontal Slider - Slider left/right margin is 4-5px and vertical size is 32px */}
            <div className="relative w-full">
                {/* Vertical spacing: 32px (py-8 = 32px) while keeping zero side padding */}
                <div className="py-8 relative">
                    {/* Desktop: 3-slide slider with blurred sides */}
                    <div className="hidden md:flex items-center justify-center h-[260px] relative mb-12 overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: direction > 0 ? 80 : -80 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: direction > 0 ? -80 : 80 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="flex items-center justify-center gap-4"
                            >
                                {getVisibleSlides().map((item, idx) => (
                                    <motion.div
                                        key={`${item.index}-${idx}`}
                                        initial={{ opacity: 0.5, scale: 0.85 }}
                                        animate={{
                                            opacity: item.position === "center" ? 1 : 0.5,
                                            scale: item.position === "center" ? 1.1 : 0.9,
                                            x: item.position === "left" ? -20 : item.position === "right" ? 20 : 0,
                                        }}
                                        transition={{ duration: 0.5, ease: "easeInOut" }}
                                        className={`relative ${
                                            item.position === "center"
                                                ? "w-[460px] h-[220px] z-20"
                                                : "w-[360px] h-[200px] z-10"
                                        } rounded-3xl overflow-hidden shadow-2xl`}
                                    >
                                        {/* Colored div placeholder instead of image */}
                                        <div
                                            className={`w-full h-full ${item.color.bg} flex items-center justify-center ${
                                                item.position === "center" ? "" : "blur-sm"
                                            } transition-all duration-500`}
                                        >
                                            <span className="text-white/20 text-2xl font-bold">
                                                {item.color.name}
                                            </span>
                                        </div>
                                        {item.position === "center" && (
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                                        )}
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Mobile: Single slide focus */}
                    <div className="md:hidden relative h-[350px] w-full max-w-md mx-auto mb-12 overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl"
                            >
                                {/* Colored div placeholder */}
                                <div className={`w-full h-full ${SLIDER_COLORS[currentIndex].bg} flex items-center justify-center`}>
                                    <span className="text-white/20 text-xl font-bold">
                                        {SLIDER_COLORS[currentIndex].name}
                                    </span>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Mobile navigation arrows */}
                        {/* Manual controls removed for auto-only slider */}
                    </div>

                    {/* Dots indicator - positioned below slider */}
                    {/* Indicators removed for minimalist automatic slider */}
                </div>
            </div>
        </section>
    );
}
