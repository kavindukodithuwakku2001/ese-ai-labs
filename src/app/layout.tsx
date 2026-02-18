import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "ESE AI Labs | AI & Software Solutions",
    description:
        "ESE AI Labs — a subsidiary of Evergreen Serendib Enterprises (PVT) Ltd. We deliver cutting-edge AI solutions, web development, mobile apps, and SEO services to empower your business.",
    keywords: [
        "AI solutions",
        "software development",
        "web development",
        "chatbot",
        "SEO",
        "mobile apps",
        "ESE AI Labs",
    ],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={inter.variable}>
            <body className="antialiased">{children}</body>
        </html>
    );
}
