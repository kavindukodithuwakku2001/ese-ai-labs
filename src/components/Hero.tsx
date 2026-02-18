"use client";

export default function Hero() {
    const scrollTo = (id: string) => {
        document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center bg-grid overflow-hidden"
        >
            {/* Glow orbs */}
            <div className="hero-glow top-1/4 -left-40 animate-pulse-glow" />
            <div className="hero-glow bottom-1/4 -right-40 animate-pulse-glow" style={{ animationDelay: "2s" }} />

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8 animate-fade-in-up">
                    <span className="w-2 h-2 rounded-full bg-forest animate-pulse" />
                    <span className="text-xs text-neutral-400 tracking-wide uppercase">
                        A Subsidiary of Evergreen Serendib Enterprises (PVT) Ltd
                    </span>
                </div>

                {/* Headline */}
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
                    Transforming Ideas with{" "}
                    <span className="gradient-text">Artificial Intelligence</span>
                </h1>

                {/* Sub-headline */}
                <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                    We design and build intelligent software solutions — from AI-powered
                    chatbots to stunning websites and mobile apps — engineered to
                    accelerate your growth.
                </p>

                {/* CTAs */}
                <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
                    <button
                        onClick={() => scrollTo("#services")}
                        className="btn-primary text-white px-8 py-3.5 rounded-full text-sm font-medium"
                    >
                        <span className="relative z-10">Get Started</span>
                    </button>
                    <button
                        onClick={() => scrollTo("#about")}
                        className="glass glass-hover text-neutral-300 hover:text-white px-8 py-3.5 rounded-full text-sm font-medium transition-all"
                    >
                        Learn More
                    </button>
                </div>

                {/* Decorative floating shapes */}
                <div className="absolute top-20 left-10 w-3 h-3 rounded-full bg-forest/20 animate-float hidden md:block" />
                <div className="absolute bottom-32 right-16 w-4 h-4 rounded-full bg-forest/15 animate-float hidden md:block" style={{ animationDelay: "1s" }} />
                <div className="absolute top-40 right-20 w-2 h-2 rounded-full bg-forest/25 animate-float hidden md:block" style={{ animationDelay: "3s" }} />
            </div>

            {/* Bottom glow line */}
            <div className="absolute bottom-0 left-0 right-0 glow-line" />
        </section>
    );
}
