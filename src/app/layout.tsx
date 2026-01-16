import type { Metadata } from "next";
import { Inter, Michroma } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });
const michroma = Michroma({ weight: "400", subsets: ["latin"], variable: "--font-michroma" });

export const metadata: Metadata = {
  title: "Fenec - Digital Management",
  description: "Experience the future of digital management with Fenec.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.className, michroma.variable, "bg-[#1a1a1a] antialiased")}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
