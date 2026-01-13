"use client";

import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-24 bg-zinc-900 text-white">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    {/* Left Column: Image */}
                    <div className="w-full md:w-1/2 relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
                        <Image
                            src="/assets/Page 4.JPG"
                            alt="About Fenec"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Right Column: Text Content */}
                    <div className="w-full md:w-1/2 space-y-6">
                        <span className="text-orange-500 font-semibold tracking-wider uppercase">Our Story</span>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Building the future, <br /> one block at a time.
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Fenec started with a simple idea: make digital management accessible to everyone.
                            Today, we help thousands of businesses and individuals take control of their digital assets with unparalleled security and ease.
                        </p>
                        <div className="grid grid-cols-2 gap-6 pt-4">
                            <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                                <h4 className="text-3xl font-bold text-orange-500 mb-1">5M+</h4>
                                <p className="text-sm text-gray-400">Active Users</p>
                            </div>
                            <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                                <h4 className="text-3xl font-bold text-orange-500 mb-1">99.9%</h4>
                                <p className="text-sm text-gray-400">Uptime</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional collage or related content (page 4-1, 4-2) */}
                <div className="mt-20 grid md:grid-cols-2 gap-8">
                    <div className="relative h-64 rounded-2xl overflow-hidden">
                        <Image src="/assets/page 4-1.JPG" alt="Team Work" fill className="object-cover group-hover:scale-105 transition-transform" />
                    </div>
                    <div className="relative h-64 rounded-2xl overflow-hidden">
                        <Image src="/assets/page 4-2.JPG" alt="Office Life" fill className="object-cover group-hover:scale-105 transition-transform" />
                    </div>
                </div>
            </div>
        </section>
    );
}
