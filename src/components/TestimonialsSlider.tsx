import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

export default function TestimonialsSlider() {
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
        <section className="w-full h-auto mobile:h-[36vw] flex flex-col items-center justify-center relative overflow-hidden bg-transparent py-[40px] mobile:py-[5.5vw] px-[7.0vw]">
            {/* Outer Container - 1083px for desktop, 408px for mobile */}
            <div className="w-full max-w-[408px] mobile:max-w-[75.2vw] h-[300px] mobile:h-[24.8vw] flex flex-col items-center gap-[40px] mobile:gap-[1.87vw] relative isolation-isolate">

                {/* Huge Quotation Mark Decor */}
                <div
                    className="absolute right-0 top-[13px] mobile:right-[-0.9vw] mobile:top-[-0.9vw] w-[75px] h-[54px] mobile:w-[8.75vw] mobile:h-[6.3vw] flex items-center justify-center select-none pointer-events-none z-0"
                    style={{ opacity: 0.2 }}
                >
                    <span className="text-[120px] mobile:text-[9.3vw] text-white font-serif leading-none">”</span>
                </div>

                {/* Slides Container */}
                <div className="w-full h-[268px] mobile:h-[17.4vw] flex flex-col items-start relative z-10">
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
                            className="absolute w-full h-full flex flex-col items-start gap-[24px] mobile:gap-[1.87vw]"
                        >
                            {/* Avatars Row */}
                            <div className="flex flex-row items-start gap-[8px] mobile:gap-[0.76vw] w-fit h-[48px] mobile:h-[4.4vw]">
                                {TESTIMONIALS[index].avatars.map((src, i) => (
                                    <div
                                        key={i}
                                        className="w-[48px] h-[48px] mobile:w-[4.4vw] mobile:h-[4.4vw] rounded-full overflow-hidden flex-shrink-0 bg-[#5F00DB]"
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
                                className="w-full h-[152px] mobile:h-[7.36vw] flex items-center text-white font-normal"
                                style={{
                                    fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif",
                                    fontSize: 'clamp(24px, 32px, 32px)', // Fixed 32px for mobile, fallback to 24 if too small but specs say 32
                                    lineHeight: '120%',
                                    letterSpacing: '-0.04em'
                                }}
                            >
                                <span className="block mobile:hidden text-[32px]">{TESTIMONIALS[index].text}</span>
                                <span className="hidden mobile:block text-[3.33vw] leading-[110%]">{TESTIMONIALS[index].text}</span>
                            </h2>

                            {/* Author Name */}
                            <p
                                className="w-full h-[20px] mobile:h-[1.87vw] flex items-center text-white font-normal"
                                style={{
                                    fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif",
                                    fontSize: 'clamp(16px, 18px, 18px)',
                                    lineHeight: '110%',
                                    letterSpacing: '-0.04em'
                                }}
                            >
                                <span className="block mobile:hidden text-[18px]">{TESTIMONIALS[index].author}</span>
                                <span className="hidden mobile:block text-[1.66vw]">{TESTIMONIALS[index].author}</span>
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigator / Controls */}
                <div
                    className="absolute right-0 bottom-0 flex flex-row items-center justify-end px-[16px] mobile:px-0 gap-[24px] mobile:gap-[1.1vw] w-full mobile:w-[5.5vw] h-[48px] mobile:h-[2.2vw]"
                >
                    <button
                        onClick={prev}
                        className="w-[48px] h-[48px] mobile:w-[2.2vw] mobile:h-[2.2vw] flex items-center justify-center bg-[#5F00DB] rounded-full mobile:rounded-[2.4vw] transition-all duration-300 hover:scale-110 active:scale-95 group shadow-[0px_0px_4px_rgba(95,0,219,0.25),0px_4px_12px_rgba(95,0,219,0.25)] mobile:shadow-[0px_0px_0.2vw_rgba(95,0,219,0.25),0px_0.2vw_0.5vw_rgba(95,0,219,0.25)]"
                    >
                        <ChevronLeft className="w-[24px] h-[24px] mobile:w-[1.1vw] mobile:h-[1.1vw] text-white" />
                    </button>
                    <button
                        onClick={next}
                        className="w-[48px] h-[48px] mobile:w-[2.2vw] mobile:h-[2.2vw] flex items-center justify-center bg-[#5F00DB] rounded-full mobile:rounded-[2.4vw] transition-all duration-300 hover:scale-110 active:scale-95 group shadow-[0px_0px_4px_rgba(95,0,219,0.25),0px_4px_12px_rgba(95,0,219,0.25)] mobile:shadow-[0px_0px_0.2vw_rgba(95,0,219,0.25),0px_0.2vw_0.5vw_rgba(95,0,219,0.25)]"
                    >
                        <ChevronRight className="w-[24px] h-[24px] mobile:w-[1.1vw] mobile:h-[1.1vw] text-white" />
                    </button>
                </div>
            </div>
        </section>
    );
}