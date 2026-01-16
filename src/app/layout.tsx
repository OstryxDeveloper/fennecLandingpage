import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.className, michroma.variable, "bg-[#1a1a1a] antialiased overflow-x-hidden w-full")}>
        <Header />
        <main className="min-h-screen w-full overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
