import React from 'react';
import NvidiaPartnerCapsule from "@/components/NvidiaPartnerCapsule";
import Link from "next/link";

const Hero = () => {
    return (
        <section
            className="min-h-[50vh] flex flex-col items-center justify-center mt-10 bg-zinc-800/30 backdrop-blur-md border border-zinc-700/50 rounded-lg shadow-lg shadow-zinc-100/10 sm:shadow-zinc-900/40 py-28">
            <div className="max-w-5xl mx-auto text-center space-y-8">
                <NvidiaPartnerCapsule/>

                <h1 className="text-4xl font-medium tracking-tight text-zinc-100 sm:text-6xl lg:text-7xl">
                    Empowering Enterprises with Generative AI
                </h1>

                <p className="text-base text-zinc-400 max-w-2xl mx-auto">
                    Revolutionizing Enterprises with Cutting-Edge Generative AI Solutions for Informed Decision-making,
                    Enhanced Productivity, and Sustainable Growth in the Digital Era.
                </p>

                <Link href="/contact-us?cta=talk-to-expert" prefetch={true}>
                    <button
                        className="btn-primary px-6 py-3 md:px-8 text-sm font-medium hover:bg-opacity-90 transition-all">
                        Talk to AI expert
                    </button>
                </Link>
            </div>

        </section>
    );
};

export default Hero;