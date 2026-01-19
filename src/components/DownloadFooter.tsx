"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Youtube, ArrowUpRight } from "lucide-react";

import { AppStoreButton, GooglePlayButton } from "@/components/ui/StoreButtons";

export function Download() {
    return (
        <section id="download" className="relative w-full flex flex-col items-center bg-[#111111] overflow-hidden py-[5.5vw]">
            {/* The 1083px Container */}
            <div className="relative w-[75.2vw] h-[75.2vw] flex flex-col items-center">

                {/* Circle BG */}
                <div
                    className="absolute w-[75.2vw] h-[75.2vw] left-0 top-0 rounded-full z-0"
                    style={{
                        background: '#16003F',
                        backdropFilter: 'blur(0.55vw)'
                    }}
                />

                {/* Circle Border (White at top/bottom, transparent in middle) */}
                <div
                    className="absolute w-[75.2vw] h-[75.2vw] left-0 top-0 rounded-full z-0 pointer-events-none"
                    style={{
                        border: '0.2vw solid rgba(255, 255, 255, 0.88)',
                        maskImage: 'linear-gradient(to bottom, black, transparent 30%, transparent 70%, black)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black, transparent 30%, transparent 70%, black)'
                    }}
                />

                {/* Content Wrapper (899x744) */}
                <div className="absolute w-[62.4vw] h-[51.6vw] top-0 left-1/2 -translate-x-1/2 z-10 pointer-events-none">

                    {/* Phones Layer (Inside Content) */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[37.2vw] h-[51.6vw] flex justify-center items-center">
                        <div className="relative w-[37.2vw] h-[51.6vw]">
                            <Image
                                src="/assets/download_Section/Phones.png"
                                alt="Fennec App Screens"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>

                    {/* CTA Card (Col) (Inside Content) */}
                    <div
                        className="absolute left-1/2 -translate-x-1/2 w-[62.3vw] h-[18.2vw] bg-[#5F00DB] rounded-[1.87vw] flex flex-col items-center justify-center p-[1.87vw] gap-[1.87vw] z-30 pointer-events-auto"
                        style={{
                            top: 'calc(50% - 9.1vw + 16.6vw)',
                            boxShadow: '0px -4.65vw 4.65vw rgba(22, 0, 63, 0.5)'
                        }}
                    >
                        <h2
                            className="text-white font-bold text-[3vw] leading-[110%] tracking-[-0.04em] text-center"
                            style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}
                        >
                            Ready to Meet Your Next Circle?
                        </h2>

                        <p
                            className="text-white font-normal text-[1.32vw] leading-[120%] tracking-[-0.04em] text-center max-w-[58.6vw]"
                            style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}
                        >
                            Jump into a world of groups that get you. Swipe, match, and meet your next favorite people.
                        </p>

                        <div className="flex flex-row justify-center items-start gap-[1.1vw]">
                            <AppStoreButton />
                            <GooglePlayButton />
                        </div>

                        <p
                            className="text-white font-bold text-[1.11vw] leading-[120%] tracking-[-0.04em] text-center"
                            style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}
                        >
                            Download Fennec on iOS and Android.
                        </p>
                    </div>
                </div>

                {/* QR Section (Scan) (Directly in 1083px Container) */}
                <div
                    className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[37.2vw] h-[22.2vw] flex flex-col items-center justify-center gap-[1.87vw] z-30 pointer-events-auto"
                >
                    <h3
                        className="text-white font-bold text-[1.11vw] leading-[120%] tracking-[-0.04em] text-center"
                        style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}
                    >
                        Scan the QR Code to get the app
                    </h3>

                    <div className="relative w-[11.5vw] h-[11.5vw]">
                        <Image
                            src="/assets/download_Section/QR.png"
                            alt="QR Code"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}


