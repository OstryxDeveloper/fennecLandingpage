"use client";

import Image from "next/image";

export default function About() {
    return (
        <section
            id="about"
            className="flex flex-col items-center py-[9.09vw] mobile:py-[5.5vw] px-[3.63vw] mobile:px-[7.08vw] lg:px-[152px] gap-[18.18vw] mobile:gap-[5.5vw] w-full h-auto"
            style={{
                background: "linear-gradient(180deg, #111111 10%, rgba(95, 0, 219, 0.25) 50%, #111111 90%)",
            }}
        >
            {/* Row 1: About Us */}
            <div className="flex flex-col mobile:flex-row justify-center items-start p-0 gap-[5.45vw] mobile:gap-[3.75vw] w-full max-w-full mobile:max-w-full lg:max-w-none lg:w-full">
                {/* Image */}
                <div className="relative w-full mobile:w-[35.7vw] h-[92.72vw] mobile:h-[28.4vw] flex-none order-0 self-stretch shrink-0">
                    <Image
                        src="/assets/About/Image_Line_1.png"
                        alt="About Us"
                        fill
                        className="object-cover rounded-[3.63vw] mobile:rounded-[1.87vw]"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col items-start p-0 gap-[5.45vw] mobile:gap-[1.87vw] w-full mobile:w-[35.7vw] mobile:h-auto flex-none order-1">
                    <h2
                        className="w-full text-white text-[4.54vw] font-bold flex items-center tracking-[-0.04em]"
                        style={{
                            fontFamily: "'SF Pro Text', sans-serif",
                            lineHeight: '120%'
                        }}
                    >
                        <span className="block mobile:hidden">About Us</span>
                        <span className="hidden mobile:block mobile:text-[1.45vw]">About Us</span>
                    </h2>
                    <h1
                        className="w-full text-white text-[6.36vw] font-bold flex items-center tracking-[-0.04em]"
                        style={{
                            fontFamily: "'SF Pro Text', sans-serif",
                            lineHeight: '120%'
                        }}
                    >
                        <span className="block mobile:hidden">We&apos;re redefining how people connect — together.</span>
                        <span className="hidden mobile:block mobile:text-[3vw] mobile:leading-[110%]">We&apos;re redefining how people connect — together.</span>
                    </h1>
                    <div className="flex flex-col gap-[5.45vw] mobile:gap-[0.9vw]">
                        <p
                            className="w-full text-[#CCCCCC] text-[4.09vw] font-normal flex items-center"
                            style={{
                                fontFamily: "'SF Pro Text', sans-serif",
                                lineHeight: '177%' // 32px/18px approx 1.77 or 32px is 7.27vw
                            }}
                        >
                            <span className="block mobile:hidden">Most social apps focus on individuals. But in the real world, friendships, adventures, and unforgettable memories often start with a group.</span>
                            <span className="hidden mobile:block mobile:text-[1.11vw] mobile:line-height-[120%] mobile:tracking-[-0.04em]">Most social apps focus on individuals. But in the real world, friendships, adventures, and unforgettable memories often start with a group.</span>
                        </p>
                        <p
                            className="w-full text-[#CCCCCC] text-[4.09vw] font-normal flex items-center"
                            style={{
                                fontFamily: "'SF Pro Text', sans-serif",
                                lineHeight: '177%'
                            }}
                        >
                            <span className="block mobile:hidden">Fennec makes it effortless for groups to find their people, match with the right vibes, and create experiences that actually feel real.</span>
                            <span className="hidden mobile:block mobile:text-[1.11vw] mobile:line-height-[120%] mobile:tracking-[-0.04em]">Fennec makes it effortless for groups to find their people, match with the right vibes, and create experiences that actually feel real.</span>
                        </p>
                        <p
                            className="w-full text-[#CCCCCC] text-[4.09vw] font-normal flex items-center"
                            style={{
                                fontFamily: "'SF Pro Text', sans-serif",
                                lineHeight: '177%'
                            }}
                        >
                            <span className="block mobile:hidden">Whether you&apos;re new in town, building your circle, or simply looking to meet like-minded friends, we&apos;re here to make connecting easier, safer, and more fun.</span>
                            <span className="hidden mobile:block mobile:text-[1.11vw] mobile:line-height-[120%] mobile:tracking-[-0.04em]">Whether you&apos;re new in town, building your circle, or simply looking to meet like-minded friends, we&apos;re here to make connecting easier, safer, and more fun.</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Row 2: Our Mission */}
            <div className="flex flex-col mobile:flex-row justify-center items-start p-0 gap-[5.45vw] mobile:gap-[3.75vw] w-full max-w-full mobile:max-w-[75.2vw] lg:max-w-none lg:w-full">
                {/* Image - Order 0 on Mobile */}
                <div className="relative w-full mobile:w-[35.7vw] h-[92.72vw] mobile:h-[32.8vw] flex-none order-0 mobile:order-1 self-stretch shrink-0">
                    <Image
                        src="/assets/About/Image_Line_2.png"
                        alt="Our Mission"
                        fill
                        className="object-cover rounded-[3.63vw] mobile:rounded-[1.87vw]"
                    />
                </div>

                {/* Content Box - Order 1 on Mobile */}
                <div className="flex flex-col items-start p-[5.45vw] mobile:p-[1.87vw] gap-[5.45vw] mobile:gap-[1.87vw] w-full mobile:w-[35.7vw] mobile:h-auto bg-[#5F00DB] rounded-[3.63vw] mobile:rounded-[1.87vw] flex-none order-1 mobile:order-0">
                    <h2
                        className="w-full text-white text-[4.54vw] font-bold flex items-center tracking-[-0.04em]"
                        style={{
                            fontFamily: "'SF Pro Text', sans-serif",
                            lineHeight: '120%'
                        }}
                    >
                        <span className="block mobile:hidden">Our Mission</span>
                        <span className="hidden mobile:block mobile:text-[1.45vw]">Our Mission</span>
                    </h2>
                    <h3
                        className="w-full text-white text-[6.36vw] font-bold flex items-center tracking-[-0.04em]"
                        style={{
                            fontFamily: "'SF Pro Text', sans-serif",
                            lineHeight: '120%'
                        }}
                    >
                        <span className="block mobile:hidden">To create a seamless way for people to form and discover groups that truly align with their interests, identities, and shared goals.</span>
                        <span className="hidden mobile:block mobile:text-[2.22vw] mobile:leading-[110%]">To create a seamless way for people to form and discover groups that truly align with their interests, identities, and shared goals.</span>
                    </h3>
                    <div className="flex flex-col gap-[5.45vw] mobile:gap-[0.9vw]">
                        <p
                            className="w-full text-[#CCCCCC] text-[4.09vw] font-normal flex items-center"
                            style={{
                                fontFamily: "'SF Pro Text', sans-serif",
                                lineHeight: '177%'
                            }}
                        >
                            <span className="block mobile:hidden">We believe friendship shouldn&apos;t feel like work. Fennec removes the pressure, awkwardness, and randomness from meeting new people — and instead make it a natural extension of your everyday social life.</span>
                            <span className="hidden mobile:block mobile:text-[1.11vw] mobile:line-height-[120%] mobile:tracking-[-0.04em]">We believe friendship shouldn&apos;t feel like work. Fennec removes the pressure, awkwardness, and randomness from meeting new people — and instead make it a natural extension of your everyday social life.</span>
                        </p>
                        <p
                            className="w-full text-[#CCCCCC] text-[4.09vw] font-normal flex items-center"
                            style={{
                                fontFamily: "'SF Pro Text', sans-serif",
                                lineHeight: '177%'
                            }}
                        >
                            <span className="block mobile:hidden">We&apos;re here to build a space where groups discover groups, where vibes match effortlessly, and where connections evolve into real-life stories.</span>
                            <span className="hidden mobile:block mobile:text-[1.11vw] mobile:line-height-[120%] mobile:tracking-[-0.04em]">We&apos;re here to build a space where groups discover groups, where vibes match effortlessly, and where connections evolve into real-life stories.</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Row 3: Our Vision */}
            <div className="flex flex-col mobile:flex-row justify-center items-start p-0 gap-[5.45vw] mobile:gap-[3.75vw] w-full max-w-full mobile:max-w-[75.2vw] lg:max-w-none lg:w-full">
                {/* Image */}
                <div className="relative w-full mobile:w-[35.7vw] h-[92.72vw] mobile:h-[31.5vw] flex-none order-0 self-stretch shrink-0">
                    <Image
                        src="/assets/About/Image_Line_3.png"
                        alt="Our Vision"
                        fill
                        className="object-cover rounded-[3.63vw] mobile:rounded-[1.87vw]"
                    />
                </div>

                {/* Content Box */}
                <div className="flex flex-col items-start p-[5.45vw] mobile:p-[1.87vw] gap-[5.45vw] mobile:gap-[1.87vw] w-full mobile:w-[35.7vw] mobile:h-auto bg-[#16003F] rounded-[3.63vw] mobile:rounded-[1.87vw] flex-none order-1">
                    <h2
                        className="w-full text-white text-[4.54vw] font-bold flex items-center tracking-[-0.04em]"
                        style={{
                            fontFamily: "'SF Pro Text', sans-serif",
                            lineHeight: '120%'
                        }}
                    >
                        <span className="block mobile:hidden">Our Vision</span>
                        <span className="hidden mobile:block mobile:text-[1.45vw]">Our Vision</span>
                    </h2>
                    <h3
                        className="w-full text-white text-[6.36vw] font-bold flex items-center tracking-[-0.04em]"
                        style={{
                            fontFamily: "'SF Pro Text', sans-serif",
                            lineHeight: '120%'
                        }}
                    >
                        <span className="block mobile:hidden">To be the leading platform where meaningful group connections spark new friendships, communities, and experiences around the world.</span>
                        <span className="hidden mobile:block mobile:text-[2.22vw] mobile:leading-[110%]">To be the leading platform where meaningful group connections spark new friendships, communities, and experiences around the world.</span>
                    </h3>
                    <div className="flex flex-col gap-[5.45vw] mobile:gap-[0.9vw]">
                        <p
                            className="w-full text-[#CCCCCC] text-[4.09vw] font-normal flex items-center"
                            style={{
                                fontFamily: "'SF Pro Text', sans-serif",
                                lineHeight: '177%'
                            }}
                        >
                            <span className="block mobile:hidden">We envision a future where nobody feels isolated in a new city, where social circles expand seamlessly, and where meeting new people happens with confidence, trust, and genuine compatibility.</span>
                            <span className="hidden mobile:block mobile:text-[1.11vw] mobile:line-height-[120%] mobile:tracking-[-0.04em]">We envision a future where nobody feels isolated in a new city, where social circles expand seamlessly, and where meeting new people happens with confidence, trust, and genuine compatibility.</span>
                        </p>
                        <p
                            className="w-full text-[#CCCCCC] text-[4.09vw] font-normal flex items-center"
                            style={{
                                fontFamily: "'SF Pro Text', sans-serif",
                                lineHeight: '177%'
                            }}
                        >
                            <span className="block mobile:hidden">Our vision is to become the global platform that powers real-world group connections — for friendships, events, adventures, creativity, and everything in between.</span>
                            <span className="hidden mobile:block mobile:text-[1.11vw] mobile:line-height-[120%] mobile:tracking-[-0.04em]">Our vision is to become the global platform that powers real-world group connections — for friendships, events, adventures, creativity, and everything in between.</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
