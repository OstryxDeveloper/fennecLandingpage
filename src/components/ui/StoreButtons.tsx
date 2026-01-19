"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface StoreButtonProps {
    className?: string;
}

export function AppStoreButton({ className }: StoreButtonProps) {
    return (
        <button className={cn(
            "relative w-[32.2vw] md:w-[8.4vw] h-[10.6vw] md:h-[2.77vw] bg-black border-[0.07vw] border-[#A6A6A6] rounded-[1.6vw] md:rounded-[0.41vw] flex items-center px-[2.1vw] md:px-[0.55vw] gap-[2.1vw] md:gap-[0.55vw] overflow-hidden group hover:border-white transition-all shadow-lg active:scale-95",
            className
        )}>
            <div className="relative w-[5.3vw] md:w-[1.38vw] h-[6.4vw] md:h-[1.66vw] flex-shrink-0">
                <Image src="/assets/hero/Mobile/Apple_icon.png" alt="App Store" fill className="object-contain" />
            </div>
            <div className="flex flex-col items-start leading-[1.1] text-left">
                <span
                    className="text-white text-[2.4vw] md:text-[0.625vw] font-semibold"
                    style={{ fontFamily: "'SF Compact', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}
                >
                    Download on the
                </span>
                <span
                    className="text-white text-[4vw] md:text-[1.04vw] font-semibold tracking-[-0.05vw] whitespace-nowrap"
                    style={{ fontFamily: "'SF Compact', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}
                >
                    App Store
                </span>
            </div>
        </button>
    );
}

export function GooglePlayButton({ className }: StoreButtonProps) {
    return (
        <button className={cn(
            "relative w-[32.2vw] md:w-[8.4vw] h-[10.6vw] md:h-[2.77vw] bg-black border-[0.07vw] border-[#A6A6A6] rounded-[1.6vw] md:rounded-[0.41vw] flex items-center px-[2.1vw] md:px-[0.55vw] gap-[2.1vw] md:gap-[0.55vw] overflow-hidden group hover:border-white transition-all shadow-lg active:scale-95",
            className
        )}>
            <div className="relative w-[5.3vw] md:w-[1.38vw] h-[6.4vw] md:h-[1.66vw] flex-shrink-0">
                <Image src="/assets/hero/Mobile/Playstore_icon.png" alt="Google Play" fill className="object-contain" />
            </div>
            <div className="flex flex-col items-start leading-[1.1] text-left">
                <span
                    className="text-white text-[2.6vw] md:text-[0.69vw] font-normal uppercase"
                    style={{ fontFamily: "'Product Sans', Roboto, Helvetica, Arial, sans-serif" }}
                >
                    Get it on
                </span>
                <span
                    className="text-white text-[3.7vw] md:text-[0.97vw] font-semibold whitespace-nowrap"
                    style={{ fontFamily: "'Product Sans', Roboto, Helvetica, Arial, sans-serif" }}
                >
                    Google Play
                </span>
            </div>
        </button>
    );
}
