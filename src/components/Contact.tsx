"use client";

import { useState, type FormEvent } from "react";

const CONTACT_EMAIL = "contact.evergreenserendib@gmail.com";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const [sending, setSending] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSending(true);

        // Build mailto link with form data
        const subject = encodeURIComponent(
            `New Inquiry from ${form.name}`
        );
        const body = encodeURIComponent(
            `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
        );
        window.open(
            `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`,
            "_self"
        );

        setSending(false);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <section id="contact" className="relative py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section header */}
                <div className="text-center mb-16">
                    <span className="text-xs font-medium tracking-[0.2em] uppercase text-forest mb-3 block">
                        Get In Touch
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Contact <span className="gradient-text">Us</span>
                    </h2>
                    <div className="w-16 h-0.5 bg-forest mx-auto rounded-full mb-6" />
                    <p className="text-neutral-400 max-w-xl mx-auto">
                        Have a project in mind? We&apos;d love to hear from you. Drop us a
                        message and we&apos;ll get back within 24 hours.
                    </p>
                </div>

                <div className="grid md:grid-cols-5 gap-10 max-w-5xl mx-auto">
                    {/* Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="md:col-span-3 glass rounded-2xl p-8 space-y-5"
                    >
                        <div>
                            <label className="block text-sm text-neutral-400 mb-1.5" htmlFor="name">
                                Full Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                required
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                className="form-input w-full bg-dark-800 border border-dark-500 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none transition-all"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-neutral-400 mb-1.5" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                required
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                className="form-input w-full bg-dark-800 border border-dark-500 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none transition-all"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-neutral-400 mb-1.5" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={5}
                                required
                                value={form.message}
                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                className="form-input w-full bg-dark-800 border border-dark-500 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none transition-all resize-none"
                                placeholder="Tell us about your project..."
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={sending}
                            className="btn-primary w-full text-white py-3.5 rounded-xl text-sm font-medium disabled:opacity-60"
                        >
                            <span className="relative z-10">
                                {submitted
                                    ? "✓  Message Sent!"
                                    : sending
                                        ? "Opening mail client..."
                                        : "Send Message"}
                            </span>
                        </button>
                    </form>

                    {/* Info cards */}
                    <div className="md:col-span-2 flex flex-col gap-4">
                        {/* Phone (Land Line) */}
                        <a
                            href="tel:0572223398"
                            className="glass glass-hover rounded-2xl p-5 flex items-start gap-4 transition-all duration-300"
                        >
                            <div className="service-icon shrink-0">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-sm font-medium text-white mb-0.5">Contact Number</div>
                                <div className="text-sm text-neutral-400">
                                    057 222 3398 (Land Line)
                                </div>
                            </div>
                        </a>

                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/94757362213"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass glass-hover rounded-2xl p-5 flex items-start gap-4 transition-all duration-300"
                        >
                            <div className="service-icon shrink-0">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-sm font-medium text-white mb-0.5">WhatsApp</div>
                                <div className="text-sm text-neutral-400">
                                    +94 75 736 2213
                                </div>
                            </div>
                        </a>

                        {/* Email */}
                        <a
                            href={`mailto:${CONTACT_EMAIL}`}
                            className="glass glass-hover rounded-2xl p-5 flex items-start gap-4 transition-all duration-300"
                        >
                            <div className="service-icon shrink-0">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-sm font-medium text-white mb-0.5">Email</div>
                                <div className="text-sm text-neutral-400">
                                    contact.evergreenserendib@gmail.com.com
                                </div>
                            </div>
                        </a>

                        {/* Address */}
                        <a
                            href="https://maps.google.com/?q=No12,+Heeloya+Road,+Kolatenna,+Bandarawela"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass glass-hover rounded-2xl p-5 flex items-start gap-4 transition-all duration-300"
                        >
                            <div className="service-icon shrink-0">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-sm font-medium text-white mb-0.5">Address</div>
                                <div className="text-sm text-neutral-400 leading-relaxed">
                                    No12, ESE AI Labs,<br />
                                    Heeloya Road, Kolatenna,<br />
                                    Bandarawela
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
