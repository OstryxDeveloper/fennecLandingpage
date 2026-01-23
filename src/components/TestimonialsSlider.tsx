import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
    {
        id: 1,
        text: "Met a group that shares our love for hiking. Two weekends later, we’re planning a road trip together.",
        author: "— Samantha & Friends",
        avatars: [
            "/assets/Testimonials/Avatars/met_a_group_1.png",
            "/assets/Testimonials/Avatars/met_a_group_2.png",
            "/assets/Testimonials/Avatars/met_a_group_3.png",
            "/assets/Testimonials/Avatars/met_a_group_4.png"
        ]
    },
    {
        id: 2,
        text: "Made new friends, expanded our circle, and now weekends actually feel exciting again.",
        author: "— Ben & Friends",
        avatars: [
            "/assets/Testimonials/Avatars/made_new_friends_1.png",
            "/assets/Testimonials/Avatars/made_new_friends_2.png",
            "/assets/Testimonials/Avatars/made_new_friends_3.png",
            "/assets/Testimonials/Avatars/made_new_friends_4.png"
        ]
    },
    {
        id: 3,
        text: "Group matching helped us find people with the same vibe. It feels way more natural.",
        author: "— Erica & Friends",
        avatars: [
            "/assets/Testimonials/Avatars/group_matching_1.png",
            "/assets/Testimonials/Avatars/group_matching_2.png",
            "/assets/Testimonials/Avatars/group_matching_3.png",
            "/assets/Testimonials/Avatars/group_matching_4.png"
        ]
    },
    {
        id: 4,
        text: "We met another group within 24 hours, ended up planning a picnic together. Zero awkwardness.",
        author: "— Jamie & Friends",
        avatars: [
            "/assets/Testimonials/Avatars/met_another_1.png",
            "/assets/Testimonials/Avatars/met_another_2.png",
            "/assets/Testimonials/Avatars/met_another_3.png",
            "/assets/Testimonials/Avatars/met_another_4.png"
        ]
    },
    {
        id: 5,
        text: "We moved to a new city and had no idea how to meet people. This app solved that in one afternoon.",
        author: "— Jacob & Friends",
        avatars: [
            "/assets/Testimonials/Avatars/moved_new_city_1.png",
            "/assets/Testimonials/Avatars/moved_new_city_2.png",
            "/assets/Testimonials/Avatars/moved_new_city_3.png",
            "/assets/Testimonials/Avatars/moved_new_city_4.png"
        ]
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
        <section className="w-full bg-[#111111] h-auto mobile:h-[36vw] flex flex-col items-center justify-center relative overflow-hidden bg-transparent py-[9.09vw] mobile:py-[5.5vw] px-[3.63vw] mobile:px-[7.0vw]">
            {/* Outer Container - 1083px for desktop, 408px for mobile */}
            <div className="w-full bg-[#111111] max-w-full mobile:max-w-[75.2vw] h-[68.18vw] mobile:h-[24.8vw] flex flex-col items-center gap-[9.09vw] mobile:gap-[1.87vw] relative isolation-isolate">

                {/* Huge Quotation Mark Decor */}
                <div
                    className="absolute right-0 lg:top-[-55px] mobile:top-[0.9vw] mobile:right-[-0.9vw] mobile:top-[-0.9vw] w-[17.04vw] h-[12.27vw] mobile:w-[8.75vw] mobile:h-[6.3vw] flex items-center justify-center select-none pointer-events-none z-0"
                    style={{ opacity: 0.8 }}
                >
                    <Image
                        src="/assets/Testimonials/comma-1.png"
                        alt="Decorative Quotation Mark"
                        width={75}
                        height={54}
                        className="object-contain w-full h-full"
                    />
                </div>

                {/* Slides Container */}
                <div className="w-full h-[60.9vw] mobile:h-[17.4vw] flex flex-col items-start relative z-10">
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
                            className="absolute w-full h-full flex flex-col items-start gap-[5.45vw] mobile:gap-[1.87vw]"
                        >
                            {/* Avatars Row */}
                            <div className="flex flex-row items-start gap-[1.81vw] mobile:gap-[0.76vw] w-fit h-[10.9vw] mobile:h-[4.4vw]">
                                {TESTIMONIALS[index].avatars.map((src, i) => (
                                    <div
                                        key={i}
                                        className="w-[10.9vw] h-[10.9vw] mobile:w-[4.4vw] mobile:h-[4.4vw] rounded-full overflow-hidden flex-shrink-0 bg-[#5F00DB]"
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
                                className="w-full h-[34.54vw] mobile:h-[7.36vw] flex items-center text-white font-normal"
                                style={{
                                    fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif",
                                    fontSize: 'clamp(24px, 32px, 32px)', // Fixed 32px for mobile, fallback to 24 if too small but specs say 32
                                    lineHeight: '120%',
                                    letterSpacing: '-0.04em'
                                }}
                            >
                                <span className="block mobile:hidden text-[7.27vw]">{TESTIMONIALS[index].text}</span>
                                <span className="hidden mobile:block text-[3.33vw] leading-[110%]">{TESTIMONIALS[index].text}</span>
                            </h2>

                            {/* Author Name */}
                            <p
                                className="w-full h-[4.54vw] mobile:h-[1.87vw] flex items-center text-white font-normal"
                                style={{
                                    fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif",
                                    fontSize: 'clamp(16px, 18px, 18px)',
                                    lineHeight: '110%',
                                    letterSpacing: '-0.04em'
                                }}
                            >
                                <span className="block mobile:hidden text-[4.09vw]">{TESTIMONIALS[index].author}</span>
                                <span className="hidden mobile:block text-[1.66vw]">{TESTIMONIALS[index].author}</span>
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigator / Controls */}
                <div
                    className="absolute right-0 bottom-0 flex flex-row items-center justify-end px-[3.63vw] mobile:px-0 gap-[5.45vw] mobile:gap-[1.1vw] w-full mobile:w-[5.5vw] h-[10.9vw] mobile:h-[2.2vw]"
                >
                    <button
                        onClick={prev}
                        className="w-[10.9vw] h-[10.9vw] mobile:w-[2.2vw] mobile:h-[2.2vw] flex items-center justify-center bg-[#5F00DB] rounded-full mobile:rounded-[2.4vw] transition-all duration-300 hover:scale-110 active:scale-95 group shadow-[0px_0px_4px_rgba(95,0,219,0.25),0px_4px_12px_rgba(95,0,219,0.25)] mobile:shadow-[0px_0px_0.2vw_rgba(95,0,219,0.25),0px_0.2vw_0.5vw_rgba(95,0,219,0.25)]"
                    >
                        <ChevronLeft className="w-[5.45vw] h-[5.45vw] mobile:w-[1.1vw] mobile:h-[1.1vw] text-white" />
                    </button>
                    <button
                        onClick={next}
                        className="w-[10.9vw] h-[10.9vw] mobile:w-[2.2vw] mobile:h-[2.2vw] flex items-center justify-center bg-[#5F00DB] rounded-full mobile:rounded-[2.4vw] transition-all duration-300 hover:scale-110 active:scale-95 group shadow-[0px_0px_4px_rgba(95,0,219,0.25),0px_4px_12px_rgba(95,0,219,0.25)] mobile:shadow-[0px_0px_0.2vw_rgba(95,0,219,0.25),0px_0.2vw_0.5vw_rgba(95,0,219,0.25)]"
                    >
                        <ChevronRight className="w-[5.45vw] h-[5.45vw] mobile:w-[1.1vw] mobile:h-[1.1vw] text-white" />
                    </button>
                </div>
            </div>
        </section>
    );
}