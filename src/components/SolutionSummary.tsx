import React from 'react';

const sectors = [
    {
        title: "Commercial Lending",
        description:
            "Automate business loan workflows with AI-driven financial analysis, document validation, and credit scoring.",
        stat: "80% faster processing",
    },
    {
        title: "Retail Banking",
        description:
            "Simplify personal loan, mortgage, and credit card onboarding with automated verification and real-time fraud detection.",
        stat: "90% less manual work",
    },
    {
        title: "NBFCs",
        description:
            "Enhance efficiency and accuracy with integrated compliance checks, API data enrichment, and smart document parsing.",
        stat: "100% audit-ready",
    },
    {
        title: "Microfinance",
        description:
            "Digitally onboard high-volume applicants with instant ID verification and risk-based decision intelligence.",
        stat: "3× faster disbursals",
    },
];

const SolutionSummary = () => {
    return (
        <section className="flex flex-col px-4 md:px-6 lg:px-10">
            <div className={'max-w-[1536px] mx-auto space-y-20'}>
                <div className={'flex flex-col sm:flex-row justify-between gap-10 w-full'}>
                    <h3 className="heading">
                        Trusted Across Financial Institutions
                    </h3>
                    <p className="description max-w-2xl">
                        From large banks to specialized lenders, Crediflow adapts to your unique lending requirements
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    {sectors.map((s) => (
                        <div
                            key={s.title}
                            className="relative border border-neutral-800 rounded-2xl p-6 bg-gradient-to-b from-[#1E1A2A] via-[#14120B] to-transparent"
                        >
                            <h4 className="text-lg font-medium mb-3 text-white">{s.title}</h4>
                            <p className="text-neutral-400 text-sm leading-relaxed">{s.description}</p>

                            <div className="mt-6 pt-4 border-t border-neutral-800">
                                <p className="text-indigo-300 text-sm font-semibold">{s.stat}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-14 text-neutral-400 text-sm">
                    <p>
                        Every workflow connects directly with your <span className="text-indigo-300">LOS</span> for frictionless onboarding and
                        complete audit visibility.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SolutionSummary;