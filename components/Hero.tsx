"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background - Using Page 1.jpg as reference for style, assuming we likely want a clean hero or use the image as bg */}
            {/* For now, I'll use a placeholder standard layout, and if the user wants the EXACT image as bg, we can adjust. 
          The spec says "Background image", so let's try to map 'Page 1.JPG' or a specific hero asset if evident.
          Given the file list, 'Page 1.JPG' is the likely hero refernce. */}

            <div className="absolute inset-0 -z-10">
                <Image
                    src="/assets/Page 1.JPG"
                    alt="Hero Background"
                    fill
                    className="object-cover opacity-100"
                    priority
                />
                {/* Overlay if text contrast is needed */}
                {/* <div className="absolute inset-0 bg-white/50" /> */}
            </div>

            <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div className="max-w-2xl text-white">
                    {/* Assuming white text on the likely dark/rich hero image, adjustment needed after visual check */}
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
                        Everything you need. <br />
                        <span className="text-orange-500">All in one place.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-lg">
                        Experience the future of digital management with Fenec. Simple, fast, and secure.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 h-12 text-lg">
                            Get Started
                        </Button>
                        <Button variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-white/20 rounded-full px-8 h-12 text-lg backdrop-blur-sm">
                            Learn More <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                </div>

                {/* Slider placeholder - Spec mentions horizontal image slider */}
                <div className="hidden md:block relative h-[600px] w-full">
                    {/* Implementation of the 3-card slider will go here */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full h-full bg-contain bg-no-repeat bg-center" />
                </div>
            </div>
        </section>
    );
}
