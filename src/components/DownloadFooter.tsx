"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Youtube, ArrowUpRight } from "lucide-react";

export function Download() {
    return (
        <section id="download" className="bg-[#1a1a1a] pt-20">
            {/* Circular Hero Download Section */}
            <div className="relative min-h-[900px] flex flex-col items-center">
                {/* Thin white circular border */}
                <div className="absolute top-0 w-[1400px] h-[1400px] border border-white/20 rounded-full z-0" />

                {/* Phone Mockups Overlay */}
                <div className="relative z-10 flex justify-center items-center mt-20 gap-x-[-100px]">
                    <div className="relative w-[300px] h-[600px] rounded-[3rem] border-8 border-[#333] overflow-hidden translate-x-12 translate-y-20 opacity-80 scale-90">
                        <Image src="/assets/Page 5-1.JPG" alt="App Screen 1" fill className="object-cover" />
                    </div>
                    <div className="relative w-[340px] h-[680px] rounded-[3.5rem] border-8 border-black overflow-hidden z-20 shadow-2xl">
                        <Image src="/assets/Page 5.JPG" alt="App Screen 2" fill className="object-cover" />
                    </div>
                </div>

                {/* Purple CTA Card */}
                <div className="relative z-30 mt-[-150px] w-full max-w-[1200px] bg-[#6D28D9] rounded-[40px] p-12 md:p-20 text-center shadow-2xl mx-4">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Ready to Meet Your Next Circle?
                    </h2>
                    <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-12">
                        Jump into a world of groups that get you. Swipe, match, and meet your next favorite people.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
                        <button className="bg-black hover:bg-black/90 text-white flex items-center gap-3 px-8 py-4 rounded-xl transition-all hover:scale-105 border border-white/10 group">
                            <div className="w-8 h-8 relative">
                                <Image src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Apple_logo_black.svg" alt="Apple" fill className="invert" />
                            </div>
                            <div className="text-left">
                                <div className="text-[10px] opacity-60 uppercase">Download on the</div>
                                <div className="text-xl font-bold leading-none">App Store</div>
                            </div>
                        </button>
                        <button className="bg-black hover:bg-black/90 text-white flex items-center gap-3 px-8 py-4 rounded-xl transition-all hover:scale-105 border border-white/10 group">
                            <div className="w-8 h-8 relative">
                                <Image src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Google_Play_Store_badge_EN.svg" alt="Play Store" fill />
                            </div>
                            <div className="text-left">
                                <div className="text-[10px] opacity-60 uppercase">GET IT ON</div>
                                <div className="text-xl font-bold leading-none">Google Play</div>
                            </div>
                        </button>
                    </div>
                    <p className="text-white/60 font-medium">Download Fennec on iOS and Android.</p>
                </div>
            </div>

            {/* QR Code Section */}
            <div className="bg-[#1a1a1a] py-32 flex flex-col items-center justify-center text-center">
                <h3 className="text-white text-2xl font-bold mb-12">Scan the QR Code to get the app</h3>
                <div className="relative w-64 h-64 p-4 bg-white rounded-3xl shadow-[0_0_50px_rgba(109,40,217,0.3)] group hover:scale-105 transition-transform">
                    <div className="w-full h-full bg-[#6D28D9] rounded-2xl flex items-center justify-center relative overflow-hidden">
                        <div className="grid grid-cols-4 gap-2 opacity-20">
                            {[...Array(16)].map((_, i) => (
                                <div key={i} className="w-8 h-8 bg-white rounded-sm" />
                            ))}
                        </div>
                        <div className="absolute inset-4 border-[6px] border-white rounded-lg flex items-center justify-center font-bold text-white text-4xl">
                            QR
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function Footer() {
    return (
        <footer className="bg-[#1a1a1a] pb-10 px-4 md:px-10">
            <div className="bg-[#6D28D9] rounded-[40px] p-12 md:p-24 flex flex-col gap-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Brand Section */}
                    <div className="flex flex-col gap-12">
                        <div className="flex items-center gap-6">
                            <div className="flex gap-2">
                                <div className="flex flex-col gap-1">
                                    <div className="flex gap-1"><div className="w-2 h-2 bg-white rounded-full" /><div className="w-2 h-2 bg-white rounded-full" /><div className="w-2 h-2 bg-white rounded-full" /></div>
                                    <div className="flex gap-1"><div className="w-2 h-2 bg-white rounded-full" /><div className="w-2 h-2 bg-white/40 rounded-full" /><div className="w-2 h-2 bg-white rounded-full" /></div>
                                    <div className="flex gap-1"><div className="w-2 h-2 bg-white rounded-full" /><div className="w-2 h-2 bg-white rounded-full" /><div className="w-2 h-2 bg-white rounded-full" /></div>
                                </div>
                            </div>
                            <h2 className="text-white text-7xl md:text-9xl font-bold tracking-tighter">Fennec</h2>
                        </div>

                        <div className="flex gap-6 mt-4">
                            <SocialIcon icon={<Facebook className="w-6 h-6" />} />
                            <SocialIcon icon={<Instagram className="w-6 h-6" />} />
                            <SocialIcon icon={<XIcon />} />
                            <SocialIcon icon={<Youtube className="w-6 h-6" />} />
                        </div>
                    </div>

                    {/* Links Section */}
                    <div className="grid grid-cols-2 gap-10">
                        <div className="flex flex-col gap-6">
                            <h4 className="text-white text-2xl font-bold">Quick Links</h4>
                            <ul className="flex flex-col gap-4 text-white/70 text-lg">
                                <FooterLink label="Home" />
                                <FooterLink label="How it Works" />
                                <FooterLink label="Features" />
                                <FooterLink label="About" />
                                <FooterLink label="Download the App" />
                            </ul>
                        </div>
                        <div className="flex flex-col gap-6">
                            <h4 className="text-white text-2xl font-bold">Community</h4>
                            <ul className="flex flex-col gap-4 text-white/70 text-lg">
                                <FooterLink label="Safety Guidelines" />
                                <FooterLink label="Help Center" />
                                <FooterLink label="Report an Issue" />
                                <FooterLink label="Terms of Service" />
                                <FooterLink label="Privacy Policy" />
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-white/50 border-t border-white/10 pt-10">
                    <p>© 2025 Fennec. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

function FooterLink({ label }: { label: string }) {
    return (
        <li>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-1 group">
                {label} <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
        </li>
    );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
    return (
        <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
            {icon}
        </a>
    );
}

function XIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.486 3.24H4.298l13.31 17.41z" />
        </svg>
    )
}
