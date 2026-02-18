"use client";

import { useState, useEffect, useCallback } from "react";

const TESTIMONIALS = [
    {
        name: "Sarah Mitchell",
        role: "CEO, TechVenture Inc.",
        text: "ESE AI Labs transformed our customer support with an AI chatbot that handles 70% of inquiries autonomously. Their team's expertise and attention to detail was outstanding.",
    },
    {
        name: "James Rodrigo",
        role: "Founder, GreenLeaf Digital",
        text: "The website they built for us is not only beautiful but incredibly fast. Our conversion rate jumped 40% within the first month. Highly recommend their web development services.",
    },
    {
        name: "Amara Jayasinghe",
        role: "COO, FastTrack Logistics",
        text: "Their mobile app solution streamlined our delivery operations and reduced errors by 60%. The app is intuitive and our drivers love using it. A game-changer for our business.",
    },
    {
        name: "David Chen",
        role: "Marketing Director, Apex Brands",
        text: "The SEO strategies implemented by ESE AI Labs doubled our organic traffic in just three months. They truly understand what it takes to rank and grow online.",
    },
];

export default function Testimonials() {
    const [active, setActive] = useState(0);

    const next = useCallback(() => {
        setActive((prev) => (prev + 1) % TESTIMONIALS.length);
    }, []);

    const prev = () => {
        setActive((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    };

    useEffect(() => {
        const interval = setInterval(next, 6000);
        return () => clearInterval(interval);
    }, [next]);

    return (
        <section className="relative py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section header */}
                <div className="text-center mb-16">
                    <span className="text-xs font-medium tracking-[0.2em] uppercase text-forest mb-3 block">
                        Client Stories
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        What Our <span className="gradient-text">Clients Say</span>
                    </h2>
                    <div className="w-16 h-0.5 bg-forest mx-auto rounded-full" />
                </div>

                {/* Slider */}
                <div className="max-w-3xl mx-auto">
                    <div className="glass rounded-3xl p-8 md:p-12 testimonial-card min-h-[220px] flex flex-col justify-center transition-all duration-500">
                        <p className="text-neutral-300 text-base md:text-lg leading-relaxed mb-8 italic">
                            &ldquo;{TESTIMONIALS[active].text}&rdquo;
                        </p>
                        <div className="flex items-center gap-4">
                            {/* Avatar placeholder */}
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-forest to-forest-light flex items-center justify-center text-white font-bold text-sm">
                                {TESTIMONIALS[active].name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                            </div>
                            <div>
                                <div className="text-white font-semibold text-sm">
                                    {TESTIMONIALS[active].name}
                                </div>
                                <div className="text-neutral-500 text-xs">
                                    {TESTIMONIALS[active].role}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <button
                            onClick={prev}
                            className="glass glass-hover w-10 h-10 rounded-full flex items-center justify-center text-neutral-400 hover:text-white transition-all"
                            aria-label="Previous testimonial"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <div className="flex gap-2">
                            {TESTIMONIALS.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActive(i)}
                                    className={`h-1.5 rounded-full transition-all duration-300 ${i === active
                                            ? "w-8 bg-forest"
                                            : "w-3 bg-neutral-700 hover:bg-neutral-600"
                                        }`}
                                    aria-label={`Go to testimonial ${i + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={next}
                            className="glass glass-hover w-10 h-10 rounded-full flex items-center justify-center text-neutral-400 hover:text-white transition-all"
                            aria-label="Next testimonial"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom glow line */}
            <div className="absolute bottom-0 left-0 right-0 glow-line" />
        </section>
    );
}
