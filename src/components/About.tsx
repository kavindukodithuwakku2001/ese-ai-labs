export default function About() {
    const stats = [
        { value: "50+", label: "Projects Delivered" },
        { value: "30+", label: "Happy Clients" },
        { value: "5+", label: "Years Experience" },
        { value: "99%", label: "Client Satisfaction" },
    ];

    return (
        <section id="about" className="relative py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section header */}
                <div className="text-center mb-16">
                    <span className="text-xs font-medium tracking-[0.2em] uppercase text-forest mb-3 block">
                        Who We Are
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        About <span className="gradient-text">ESE AI Labs</span>
                    </h2>
                    <div className="w-16 h-0.5 bg-forest mx-auto rounded-full" />
                </div>

                {/* Content grid */}
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                    {/* Text */}
                    <div>
                        <p className="text-neutral-400 leading-relaxed mb-6 text-base md:text-lg">
                            <strong className="text-white">ESE AI Labs</strong> is the
                            innovation hub of{" "}
                            <span className="text-forest-light font-medium">
                                Evergreen Serendib Enterprises (PVT) Ltd
                            </span>
                            , dedicated to harnessing the power of Artificial Intelligence
                            to solve real-world business challenges.
                        </p>
                        <p className="text-neutral-400 leading-relaxed mb-6 text-base md:text-lg">
                            Our team of engineers, designers, and AI researchers work
                            together to deliver solutions that are not only technically
                            robust but beautifully crafted — from intelligent chatbots that
                            transform customer support, to websites and mobile apps that
                            drive engagement and growth.
                        </p>
                        <p className="text-neutral-400 leading-relaxed text-base md:text-lg">
                            We believe technology should be accessible, elegant, and
                            impactful. That belief drives everything we build.
                        </p>
                    </div>

                    {/* Stats grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="glass glass-hover rounded-2xl p-6 text-center transition-all duration-300"
                            >
                                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-neutral-500">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom glow line */}
            <div className="absolute bottom-0 left-0 right-0 glow-line" />
        </section>
    );
}
