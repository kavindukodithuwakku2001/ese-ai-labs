"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleClick = (href: string) => {
        setMobileOpen(false);
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? "glass py-3 shadow-lg shadow-black/30"
                    : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <button
                    onClick={() => handleClick("#home")}
                    className="flex items-center gap-2 group"
                >
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-forest to-forest-light flex items-center justify-center text-white font-bold text-sm tracking-wider">
                        ESE
                    </div>
                    <span className="text-white font-semibold text-lg tracking-tight">
                        AI Labs
                    </span>
                </button>

                {/* Desktop links */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => handleClick(link.href)}
                            className="nav-link text-sm text-neutral-400 hover:text-white transition-colors"
                        >
                            {link.label}
                        </button>
                    ))}
                    <button
                        onClick={() => handleClick("#contact")}
                        className="btn-primary text-sm text-white px-5 py-2 rounded-full relative z-10"
                    >
                        <span className="relative z-10">Get in Touch</span>
                    </button>
                </div>

                {/* Mobile toggle */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    className="md:hidden text-white p-2"
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {mobileOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="px-6 pb-6 pt-2 flex flex-col gap-3">
                    {NAV_LINKS.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => handleClick(link.href)}
                            className="text-left text-neutral-300 hover:text-white text-sm py-2 transition-colors"
                        >
                            {link.label}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
}
