"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
    { label: "How it Works", href: "#how-it-works" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
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

    return (
        <header
            className={cn(
                "fixed top-4 md:top-2 left-50 right-50 z-50 transition-all duration-300",
                "mx-4 rounded-full",
                isScrolled
                    ? "bg-[#9e83cf]/95 backdrop-blur-md shadow-sm py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className={cn(
                "container mx-auto px-4 md:px-8 flex items-center transition-all duration-300",
                "relative"
            )}>
                {/* Navigation Links - Left */}
                <nav className="hidden md:flex items-center gap-8 flex-1">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className={cn(
                                "font-medium transition-colors",
                                isScrolled 
                                    ? "text-gray-300 hover:text-white" 
                                    : "text-white/80 hover:text-white"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Logo - Center */}
                <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
                    <span className={cn(
                        "text-2xl font-bold transition-colors",
                        isScrolled 
                            ? "bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600"
                            : "text-white"
                    )}>
                        Fenec
                    </span>
                </Link>

                {/* Download Button - Right */}
                <div className="hidden md:flex items-center justify-end flex-1">
                    <Button 
                        className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6"
                        onClick={() => {
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Download App
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-[#1a1a1a] border-t border-gray-800 p-4 shadow-lg flex flex-col gap-4">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-white/80 hover:text-white font-medium py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Button 
                        className="bg-orange-500 hover:bg-orange-600 text-white w-full"
                        onClick={() => {
                            setIsMobileMenuOpen(false);
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Download App
                    </Button>
                </div>
            )}
        </header>
    );
}
