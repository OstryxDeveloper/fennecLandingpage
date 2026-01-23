"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface StoreButtonProps {
    className?: string;
}

export function AppStoreButton({ className }: StoreButtonProps) {
    return (
        <button className={cn(
            "relative w-[150px] mobile:w-[8.4vw] h-[50px] mobile:h-[2.77vw] bg-black border-[1.25px] mobile:border-[0.07vw] border-[#A6A6A6] rounded-[7.5px] mobile:rounded-[0.41vw] flex items-center px-[10px] mobile:px-[0.55vw] gap-[10px] mobile:gap-[0.55vw] overflow-hidden group hover:border-white transition-all shadow-lg active:scale-95",
            className
        )}>
            <div className="relative w-[25px] mobile:w-[1.38vw] h-[30px] mobile:h-[1.66vw] flex-shrink-0">
                <Image src="/assets/hero/Mobile/Apple_icon.png" alt="App Store" fill className="object-contain" />
            </div>
            <div className="flex flex-col items-start leading-[1] text-left">
                <span
                    className="text-white text-[11.25px] mobile:text-[0.625vw] font-semibold"
                    style={{ fontFamily: "'SF Compact', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}
                >
                    Download on the
                </span>
                <span
                    className="text-white text-[20px] mobile:text-[1.04vw] font-semibold tracking-[-0.04em] mobile:tracking-[-0.05vw] whitespace-nowrap"
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
            "relative w-[150px] mobile:w-[8.4vw] h-[50px] mobile:h-[2.77vw] bg-black border-[1.25px] mobile:border-[0.07vw] border-[#A6A6A6] rounded-[7.5px] mobile:rounded-[0.41vw] flex items-center px-[10px] mobile:px-[0.55vw] gap-[10px] mobile:gap-[0.55vw] overflow-hidden group hover:border-white transition-all shadow-lg active:scale-95",
            className
        )}>
            <div className="relative w-[26.25px] mobile:w-[1.38vw] h-[30px] mobile:h-[1.66vw] flex-shrink-0">
                <Image src="/assets/hero/Mobile/Playstore_icon.png" alt="Google Play" fill className="object-contain" />
            </div>
            <div className="flex flex-col items-start leading-[1.2] mobile:leading-[1.1] text-left">
                <span
                    className="text-white text-[12.5px] mobile:text-[0.69vw] font-normal uppercase"
                    style={{ fontFamily: "'Product Sans', Roboto, Helvetica, Arial, sans-serif" }}
                >
                    Get it on
                </span>
                <span
                    className="text-white text-[16px] mobile:text-[1.04vw] font-semibold tracking-[-0.04em] mobile:tracking-[-0.05vw] whitespace-nowrap"
                    style={{ fontFamily: "'Product Sans', Roboto, Helvetica, Arial, sans-serif" }}
                >
                    Google Play
                </span>
            </div>
        </button>
    );
}
