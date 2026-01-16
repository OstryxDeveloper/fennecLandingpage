"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Youtube } from "lucide-react";

const SOCIAL_LINKS = [
    { icon: <Facebook size={24} />, href: "#" },
    { icon: <Instagram size={24} />, href: "#" },
    { icon: <TikTokIcon />, href: "#" },
    { icon: <XIcon />, href: "#" },
    { icon: <Youtube size={24} />, href: "#" },
];

const QUICK_LINKS = [
    { label: "Home", href: "#home" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "About", href: "#about" },
    { label: "Download the App", href: "#download" },
];

const COMMUNITY_LINKS = [
    { label: "Safety Guidelines", href: "#" },
    { label: "Help Center", href: "#" },
    { label: "Report an Issue", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
];

export default function Footer() {
    return (
        <footer
            className="relative w-full flex flex-col items-center bg-[#111111]"
            style={{
                fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
            }}
        >
            <div
                className="relative w-full flex flex-col items-center px-[152px] py-[80px] gap-[80px] bg-[#5F00DB] rounded-t-[80px]"
                style={{
                    boxShadow: '0px 0px 100px #5F00DB'
                }}
            >
                {/* Content Wrapper */}
                <div className="flex flex-row items-center w-full max-w-[1616px] gap-[80px]">

                    {/* Left Column: Logo + Socials + Copyright */}
                    <div className="flex flex-col items-start gap-[40px] w-full max-w-[768px]">
                        {/* Logo */}
                        <div className="relative w-[768px] h-[164.57px]">
                            <Image
                                src="/assets/Footer section/Vector.png"
                                alt="Fennec Logo"
                                fill
                                className="object-contain object-left"
                            />
                        </div>

                        {/* Bottom Row: Socials and Copyright */}
                        <div className="flex flex-row items-end justify-between w-[768px] h-[69.43px]">
                            {/* Socials */}
                            <div className="flex flex-row items-end gap-[24px] w-[216px] h-[69.43px]">
                                {SOCIAL_LINKS.map((social, index) => (
                                    <Link
                                        key={index}
                                        href={social.href}
                                        className="text-white hover:opacity-80 transition-opacity flex items-center justify-center"
                                        style={{ width: '24px', height: '24px' }}
                                    >
                                        {social.icon}
                                    </Link>
                                ))}
                            </div>

                            {/* Copyright */}
                            <p className="text-white text-[18px] leading-[32px] font-normal text-right w-[512px] h-[32px] flex items-center justify-end">
                                © 2025 Fennec. All rights reserved.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Links Blocks */}
                    <div className="flex flex-row items-start gap-[40px] w-full max-w-[768px]">
                        {/* Quick Links */}
                        <div className="flex flex-col items-start gap-[16px] flex-1">
                            <h3 className="text-white text-[28px] h-[34px] leading-[120%] font-bold tracking-[-0.04em] flex items-center">
                                Quick Links
                            </h3>
                            <div className="flex flex-col items-start gap-[16px]">
                                {QUICK_LINKS.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className="text-white text-[18px] h-[32px] leading-[32px] font-normal hover:opacity-80 transition-opacity whitespace-nowrap flex items-center"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Community */}
                        <div className="flex flex-col items-start gap-[16px] flex-1">
                            <h3 className="text-white text-[28px] h-[34px] leading-[120%] font-bold tracking-[-0.04em] flex items-center">
                                Community
                            </h3>
                            <div className="flex flex-col items-start gap-[16px]">
                                {COMMUNITY_LINKS.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        className="text-white text-[18px] h-[32px] leading-[32px] font-normal hover:opacity-80 transition-opacity whitespace-nowrap flex items-center"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function TikTokIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.06-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.01 2.92.01 5.84-.02 8.75-.02 1.4-.35 2.81-1.1 4.02-1.39 2.27-4.14 3.44-6.73 2.96-2.58-.45-4.73-2.61-5.18-5.18-.48-2.6.68-5.33 2.95-6.72.63-.39 1.34-.66 2.07-.8.01 1.39.01 2.78.01 4.17-.18.06-.36.14-.52.24-.75.46-1.21 1.28-1.22 2.16.02 1.4.99 2.65 2.37 2.91 1.38.26 2.88-.61 3.25-1.95.1-.38.12-.77.12-1.16-.01-5.69-.01-11.39.01-17.08z" />
        </svg>
    );
}

function XIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.486 3.24H4.298l13.31 17.41z" />
        </svg>
    );
}
