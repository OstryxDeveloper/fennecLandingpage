"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Youtube, ArrowUpRight } from "lucide-react";

import { AppStoreButton, GooglePlayButton } from "@/components/ui/StoreButtons";

export function Download() {
    return (
        <section id="download" className="relative w-full flex flex-col items-center bg-[#111111] overflow-hidden py-[80px] mobile:py-[5.5vw] px-[16px] mobile:px-[7.08vw] lg:px-[152px]">
            {/* The Main Container: Base (Mobile) fixed layout, lg (Desktop) responsive 84.2vw (1616px on 1920px screen) */}
            <div className="relative w-full max-w-[408px] h-[1454px] mobile:max-w-none mobile:w-[75.2vw] mobile:h-[75.2vw] lg:w-[84.2vw] lg:h-[84.2vw] flex flex-col items-center shrink-0">

                {/* Background Circle & Boundaries */}
                <div
                    className="absolute w-[1454px] h-[1454px] mobile:w-full mobile:h-full left-[-528px] mobile:left-1/2 mobile:-translate-x-1/2 top-0 rounded-full z-0 overflow-hidden lg:left-0 lg:translate-x-0"
                    style={{
                        background: '#16003F',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)'
                    }}
                >
                    {/* Circle Border (Boundaries) with Gradient Mask */}
                    <div
                        className="absolute inset-0 rounded-full border-[3px] mobile:border-[0.2vw] lg:border-[0.16vw] border-[rgba(255,255,255,0.88)] pointer-events-none"
                        style={{
                            maskImage: 'linear-gradient(to bottom, black, transparent 30%, transparent 70%, black)',
                            WebkitMaskImage: 'linear-gradient(to bottom, black, transparent 30%, transparent 70%, black)'
                        }}
                    />
                </div>

                {/* Content Area */}
                <div className="relative w-full h-full mobile:absolute mobile:w-[62.4vw] mobile:h-[51.6vw] mobile:top-0 mobile:left-1/2 mobile:-translate-x-1/2 z-10 pointer-events-none">

                    {/* Phones Image Block */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[376px] h-[634px] mobile:w-[37.2vw] mobile:h-[51.6vw] lg:w-[41.7vw] lg:h-[57.8vw] flex justify-center items-center">
                        <div className="relative w-full h-full">
                            <Image
                                src="/assets/download_Section/Phones.png"
                                alt="Fennec App Screens"
                                fill
                                className="object-contain lg:object-top"
                                priority
                            />
                        </div>
                    </div>

                    {/* CTA Card */}
                    <div
                        className="absolute left-1/2 -translate-x-1/2 w-[376px] h-[365px] bg-[#5F00DB] rounded-[24px] flex flex-col items-center justify-center p-[24px] gap-[24px] z-30 shadow-[0px_-100px_100px_rgba(22,0,63,0.5)] pointer-events-auto top-[659px]
                                   mobile:w-[62.3vw] mobile:h-[18.2vw] mobile:rounded-[1.87vw] mobile:p-[1.87vw] mobile:gap-[1.87vw] mobile:shadow-[0px_-4.65vw_4.65vw_rgba(22,0,63,0.5)] mobile:top-[calc(50%-9.1vw+16.6vw)]
                                   lg:w-[69.8vw] lg:h-[20.5vw] lg:rounded-[2.1vw] lg:p-[2.1vw] lg:gap-[2.1vw] lg:shadow-[0px_-5.2vw_5.2vw_rgba(22,0,63,0.5)] lg:top-[37.48vw]"
                    >
                        <h2
                            className="text-white font-bold text-[36px] mobile:text-[3vw] lg:text-[3.33vw] leading-[110%] tracking-[-0.04em] text-center"
                            style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif" }}
                        >
                            Ready to Meet Your Next Circle?
                        </h2>

                        <p
                            className="text-white font-normal text-[18px] mobile:text-[1.32vw] lg:text-[1.46vw] leading-[32px] mobile:leading-[120%] lg:leading-[1.77vw] tracking-[-0.04em] text-center w-[328px] h-[96px] mobile:w-auto mobile:h-auto mobile:max-w-[58.6vw] lg:max-w-[65.6vw]"
                            style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif" }}
                        >
                            Jump into a world of groups that get <br className="mobile:hidden" /> you. Swipe, match, and meet your <br className="mobile:hidden" /> next favorite people.
                        </p>

                        <div className="flex flex-row justify-center items-start gap-[16px] mobile:gap-[1.1vw] lg:gap-[1.25vw] w-full mobile:w-auto">
                            <AppStoreButton className="lg:w-[9.38vw] lg:h-[3.13vw] lg:rounded-[0.47vw] lg:border-[0.08vw] lg:px-[0.63vw] lg:gap-[0.63vw]" />
                            <GooglePlayButton className="lg:w-[9.38vw] lg:h-[3.13vw] lg:rounded-[0.47vw] lg:border-[0.08vw] lg:px-[0.63vw] lg:gap-[0.63vw]" />
                        </div>

                        <p
                            className="text-white font-bold text-[16px] mobile:text-[1.11vw] lg:text-[1.25vw] leading-[120%] tracking-[-0.04em] text-center"
                            style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif" }}
                        >
                            Download Fennec on iOS and Android.
                        </p>
                    </div>
                </div>

                {/* Scan / QR Section */}
                <div
                    className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center justify-center p-[24px] gap-[40px] z-30 w-full top-[1100px]
                               mobile:bottom-0 mobile:top-auto mobile:w-full mobile:h-auto mobile:gap-[1.87vw] mobile:p-[5vw]
                               lg:w-[25vw] lg:h-auto lg:top-[63.78vw] lg:bottom-auto lg:p-0 lg:gap-[3.33vw]"
                >
                    <h3
                        className="text-white font-bold text-[24px] mobile:text-[1.11vw] lg:text-[1.25vw] leading-[120%] tracking-[-0.04em] text-center whitespace-nowrap"
                        style={{ fontFamily: "'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif" }}
                    >
                        Scan the QR Code to get the app
                    </h3>

                    <div className="relative w-[208px] h-[208px] bg-[#5F00DB] border-[4px] border-white rounded-[24px] shadow-[0_0_50px_#5F00DB] flex items-center justify-center p-[24px] gap-[10px]
                                   mobile:w-[47.27vw] mobile:h-[47.27vw] mobile:bg-[#5F00DB] mobile:border-[0.91vw] mobile:border-white mobile:shadow-[0_0_11.36vw_#5F00DB] mobile:rounded-[5.45vw] mobile:p-[5.45vw] mobile:gap-[2.27vw]
                                   lg:w-[12.92vw] lg:h-[12.92vw] lg:bg-[#5F00DB] lg:border-[0.21vw] lg:rounded-[1.25vw] lg:shadow-[0_0_2.6vw_#5F00DB] lg:p-[1.25vw] lg:gap-[0.52vw]">
                        <div className="relative w-[160px] h-[160px] mobile:w-full mobile:h-full lg:w-full lg:h-full">
                            <Image
                                src="/assets/download_Section/QRR.png"
                                alt="QR Code"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


