"use client"
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import About from "@/components/About";
import { Download } from "@/components/DownloadFooter";
import Footer from "@/components/Footer";
import ProblemStatement from "@/components/ProblemStatement";
import StatisticsGrid from "@/components/StatisticsGrid";
import TestimonialsSlider from "@/components/TestimonialsSlider";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <HowItWorks />
      <Features />
      <ProblemStatement />
      <StatisticsGrid />
      <TestimonialsSlider />
      <About />
      <Download />
      <Footer />
    </div>
  );
}
