import React from 'react';
import Link from "next/link";

const SolutionsHero = () => {
    return (
        <section
            className="min-h-[50vh] flex flex-col items-center justify-center mt-10 py-28">
            <div className="max-w-5xl mx-auto text-center space-y-8">
                {/*<NvidiaPartnerCapsule/>*/}

                <h1 className="text-4xl font-medium tracking-tight text-zinc-100 sm:text-6xl lg:text-7xl">
                    Reimagine What’s Possible with AI and Automation

                </h1>

                <p className="text-base text-zinc-400 max-w-2xl mx-auto">
                    Our suite of solutions is designed to streamline operations, enhance compliance, and drive business
                    growth across diverse challenges.
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

export default SolutionsHero;