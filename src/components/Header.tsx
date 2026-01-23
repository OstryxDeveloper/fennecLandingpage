"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
    { label: "How It Works", href: "#how-it-works", width: "7.5vw", mobileWidth: "51.4vw" },
    { label: "Features", href: "#features", width: "5.52vw", mobileWidth: "37.8vw" },
    { label: "About", href: "#about", width: "4.32vw", mobileWidth: "29.6vw" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMobileMenuOpen]);

    const scrollToDownload = () => {
        setIsMobileMenuOpen(false);
        const element = document.getElementById("download");
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <>
            <header className="fixed top-[3.2vw] mobile:top-[1.38vw] left-0 right-0 z-50 flex justify-center px-[3.2vw] mobile:px-4">
                <nav className={cn(
                    "w-full transition-all duration-300 relative flex items-center justify-between",
                    // Desktop Styles
                    "mobile:max-w-[84.16vw] mobile:h-auto mobile:p-[0.83vw] mobile:bg-[#5F00DB]/25 mobile:backdrop-blur-[0.625vw] mobile:rounded-[3.33vw] mobile:gap-[1.25vw] border-none shadow-none",
                    // Mobile Styles
                    "h-[12.2vw] px-[2.9vw] bg-[#5F00DB]/25 backdrop-blur-[2.1vw] rounded-[11.4vw] border border-white/5 max-w-[93.6vw]",
                    isScrolled && "mobile:bg-[#5F00DB]/40"
                )}>
                    {/* Logo - Center on Desktop, Left on Mobile */}
                    <Link
                        href="/"
                        className="flex items-center gap-[2.1vw] mobile:gap-[0.55vw] h-[8.5vw] mobile:h-[2.22vw] order-1 mobile:absolute mobile:left-1/2 mobile:-translate-x-1/2"
                    >
                        <div className="relative w-[8.5vw] mobile:w-[1.875vw] h-[8.5vw] mobile:h-[1.875vw]">
                            <Image
                                src="/assets/Header_Section/Vector_logo.png"
                                alt="Fennec Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="font-michroma text-[4.2vw] mobile:text-[1.25vw] leading-[140%] text-white">
                            Fennec
                        </span>
                    </Link>

                    {/* Nav Links - Desktop Only */}
                    <div className="hidden mobile:flex items-center h-full order-1">
                        <div className="flex items-center">
                            {NAV_LINKS.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className="group relative flex flex-col items-center justify-center h-[2.22vw] px-[0.83vw] transition-colors"
                                    style={{ width: link.width }}
                                >
                                    <span className="text-[0.94vw] leading-[1.66vw] text-white font-['SF_Pro_Text',sans-serif] flex items-center font-normal">
                                        {link.label}
                                    </span>
                                    {/* Hover Indicator (Rectangle 3) */}
                                    <div className="absolute bottom-[0.34vw] left-[1.5vw] right-[1.5vw] h-[0.06vw] bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[0.06vw]" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Desktop Download Button / Mobile Menu Toggle */}
                    <div className="flex items-center order-2">
                        {/* Desktop Button */}
                        <Button
                            className={cn(
                                "hidden mobile:flex w-[10.21vw] h-[2.92vw] bg-[#5F00DB] hover:bg-[#4D00B3] text-white rounded-[2.71vw] px-[1.25vw] py-[0.83vw] items-center justify-center gap-[0.625vw] transition-all",
                                "shadow-[0px_0.2vw_0.625vw_rgba(95,0,219,0.25)]"
                                // shadow-[0px_3px_8px] -> 3/1440 = 0.2vw
                            )}
                            onClick={scrollToDownload}
                        >
                            <span className="font-['SF_Pro_Text',sans-serif] font-medium text-[0.83vw] leading-[1.25vw]">
                                Download App
                            </span>
                            <Download className="w-[1.25vw] h-[1.25vw]" />
                        </Button>

                        {/* Mobile Menu Icon Button */}
                        <button
                            className="mobile:hidden w-[6.4vw] h-[6.4vw] flex items-center justify-center text-white rounded-full transition-colors"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <Menu className="w-[6.4vw] h-[6.4vw]" />
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[60] bg-[#16003F] flex flex-col items-center"
                    >
                        {/* Menu Header Area */}
                        <div className="w-full flex justify-center  mt-[3.2vw]">
                            <div className="w-full max-w-[93.6vw] h-[12.2vw] flex items-center justify-between  bg-[#5F00DB]/25 backdrop-blur-[2.1vw] rounded-[11.4vw] border border-white/5">
                                <div className="flex items-center gap-[2.1vw] h-[8.5vw]">
                                    <div className="relative w-[8.5vw] h-[8.5vw]">
                                        <Image
                                            src="/assets/Header_Section/mobile_version/mobile_icon_button.png"
                                            alt="Fennec Logo"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <span className="font-michroma text-[4.2vw] leading-[140%] text-white">
                                        Fennec
                                    </span>
                                </div>
                                <button
                                    className="w-[6.4vw] h-[6.4vw] flex items-center justify-center text-white"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <X className="w-[6.4vw] h-[6.4vw]" />
                                </button>
                            </div>
                        </div>

                        {/* Menu Content */}
                        <div className="flex-1 flex flex-col items-center justify-center gap-[14.4vw] w-full">
                            {/* Nav Links */}
                            <nav className="flex flex-col items-center gap-[4.2vw] w-full">
                                {NAV_LINKS.map((link) => (
                                    <motion.div
                                        key={link.label}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.1 }}
                                        className="w-full flex justify-center"
                                    >
                                        <Link
                                            href={link.href}
                                            className="group relative flex flex-col items-center justify-center h-[17vw] transition-all hover:scale-105"
                                            style={{ width: link.mobileWidth }}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            <span className="text-[6.4vw] leading-[11.4vw] text-white font-['SF_Pro_Text',sans-serif] whitespace-nowrap">
                                                {link.label}
                                            </span>
                                            {/* Rectangle 3 line 94+ */}
                                            <div className="absolute bottom-[2.9vw] left-[15%] right-[15%] h-[0.8vw] bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-active:opacity-100 transition-opacity rounded-[0.8vw]" />
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            {/* Download Button */}
                            <motion.div
                                initial={{ opacity: 0, y: '3.4vw' }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <Button
                                    className={cn(
                                        "w-[35vw] h-[10.1vw] bg-[#5F00DB] hover:bg-[#4D00B3] text-white rounded-[9.3vw] px-[4.2vw] flex items-center justify-center gap-[2.1vw] transition-all",
                                        "shadow-[0px_0.8vw_2.1vw_rgba(95,0,219,0.25)]"
                                    )}
                                    onClick={scrollToDownload}
                                >
                                    <span className="font-['SF_Pro_Text',sans-serif] font-medium text-[2.9vw] leading-[4.2vw]">
                                        Download App
                                    </span>
                                    <Download className="w-[4.2vw] h-[4.2vw]" />
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
