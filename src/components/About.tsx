"use client";

import Image from "next/image";

export default function About() {
    return (
        <section
            id="about"
            className="flex flex-col items-center py-[5.5vw] px-[7.08vw] gap-[5.5vw] w-full"
            style={{
                background: "linear-gradient(180deg, #111111 10%, rgba(95, 0, 219, 0.25) 50%, #111111 90%)",
            }}
        >
            {/* Row 1: About Us */}
            <div className="flex flex-col md:flex-row justify-center items-start p-0 gap-[3.75vw] w-full max-w-[75.2vw]">
                {/* Image */}
                <div className="relative w-full md:w-[35.7vw] h-[60vw] md:h-[28.4vw] flex-none order-0 self-stretch flex-grow shrink-0">
                    <Image
                        src="/assets/About/Image_Line_1.png"
                        alt="About Us"
                        fill
                        className="object-cover rounded-[1.87vw]"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col items-start p-0 gap-[1.87vw] w-full md:w-[35.7vw] md:h-[28.4vw] flex-none order-1 flex-grow">
                    <h2 className="w-full text-white font-bold text-[5.6vw] md:text-[1.45vw] leading-[120%] tracking-[-0.04em] flex items-center">
                        About Us
                    </h2>
                    <h1 className="w-full text-white font-bold text-[11.4vw] md:text-[3vw] leading-[110%] tracking-[-0.04em] flex items-center">
                        We&apos;re redefining how people connect — together.
                    </h1>
                    <div className="flex flex-col gap-[0.9vw]">
                        <p className="w-full text-[#CCCCCC] font-normal text-[3.2vw] md:text-[1.11vw] leading-[120%] tracking-[-0.04em] flex items-center">
                            Most social apps focus on individuals. But in the real world, friendships, adventures, and unforgettable memories often start with a group.
                        </p>
                        <p className="w-full text-[#CCCCCC] font-normal text-[3.2vw] md:text-[1.11vw] leading-[120%] tracking-[-0.04em] flex items-center">
                            Fennec makes it effortless for groups to find their people, match with the right vibes, and create experiences that actually feel real.
                        </p>
                        <p className="w-full text-[#CCCCCC] font-normal text-[3.2vw] md:text-[1.11vw] leading-[120%] tracking-[-0.04em] flex items-center">
                            Whether you&apos;re new in town, building your circle, or simply looking to meet like-minded friends, we&apos;re here to make connecting easier, safer, and more fun.
                        </p>
                    </div>
                </div>
            </div>

            {/* Row 2: Our Mission */}
            <div className="flex flex-col md:flex-row justify-center items-start p-0 gap-[3.75vw] w-full max-w-[75.2vw]">
                {/* Content Box */}
                <div className="flex flex-col items-start p-[3.75vw] md:p-[1.87vw] gap-[1.87vw] w-full md:w-[35.7vw] md:h-[32.8vw] bg-[#5F00DB] rounded-[1.87vw] flex-none order-1 md:order-0 flex-grow">
                    <h2 className="w-full text-white font-bold text-[5.6vw] md:text-[1.45vw] leading-[120%] tracking-[-0.04em] flex items-center">
                        Our Mission
                    </h2>
                    <h3 className="w-full text-white font-bold text-[8.5vw] md:text-[2.22vw] leading-[110%] tracking-[-0.04em] flex items-center">
                        To create a seamless way for people to form and discover groups that truly align with their interests, identities, and shared goals.
                    </h3>
                    <div className="flex flex-col gap-[0.9vw]">
                        <p className="w-full text-[#CCCCCC] font-normal text-[3.2vw] md:text-[1.11vw] leading-[120%] tracking-[-0.04em] flex items-center">
                            We believe friendship shouldn&apos;t feel like work. Fennec removes the pressure, awkwardness, and randomness from meeting new people — and instead make it a natural extension of your everyday social life.
                        </p>
                        <p className="w-full text-[#CCCCCC] font-normal text-[3.2vw] md:text-[1.11vw] leading-[120%] tracking-[-0.04em] flex items-center">
                            We&apos;re here to build a space where groups discover groups, where vibes match effortlessly, and where connections evolve into real-life stories.
                        </p>
                    </div>
                </div>

                {/* Image */}
                <div className="relative w-full md:w-[35.7vw] h-[60vw] md:h-[32.8vw] flex-none order-0 md:order-1 self-stretch flex-grow shrink-0">
                    <Image
                        src="/assets/About/Image_Line_2.png"
                        alt="Our Mission"
                        fill
                        className="object-cover rounded-[1.87vw]"
                    />
                </div>
            </div>

            {/* Row 3: Our Vision */}
            <div className="flex flex-col md:flex-row justify-center items-start p-0 gap-[3.75vw] w-full max-w-[75.2vw]">
                {/* Image */}
                <div className="relative w-full md:w-[35.7vw] h-[60vw] md:h-[31.5vw] flex-none order-0 self-stretch shrink-0">
                    <Image
                        src="/assets/About/Image_Line_3.png"
                        alt="Our Vision"
                        fill
                        className="object-cover rounded-[1.87vw]"
                    />
                </div>

                {/* Content Box */}
                <div className="flex flex-col items-start p-[3.75vw] md:p-[1.87vw] gap-[1.87vw] w-full md:w-[35.7vw] md:h-[31.5vw] bg-[#16003F] rounded-[1.87vw] flex-none order-1 flex-grow">
                    <h2 className="w-full text-white font-bold text-[5.6vw] md:text-[1.45vw] leading-[120%] tracking-[-0.04em] flex items-center">
                        Our Vision
                    </h2>
                    <h3 className="w-full text-white font-bold text-[8.5vw] md:text-[2.22vw] leading-[110%] tracking-[-0.04em] flex items-center">
                        To be the leading platform where meaningful group connections spark new friendships, communities, and experiences around the world.
                    </h3>
                    <div className="flex flex-col gap-[0.9vw]">
                        <p className="w-full text-[#CCCCCC] font-normal text-[3.2vw] md:text-[1.11vw] leading-[120%] tracking-[-0.04em] flex items-center">
                            We envision a future where nobody feels isolated in a new city, where social circles expand seamlessly, and where meeting new people happens with confidence, trust, and genuine compatibility.
                        </p>
                        <p className="w-full text-[#CCCCCC] font-normal text-[3.2vw] md:text-[1.11vw] leading-[120%] tracking-[-0.04em] flex items-center">
                            Our vision is to become the global platform that powers real-world group connections — for friendships, events, adventures, creativity, and everything in between.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
