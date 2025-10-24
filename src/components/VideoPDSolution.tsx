import React from 'react';
import Triplet from "@/components/Triplet";

const VideoPDSolution = () => {
    return (
        <section className={"px-4 md:px-6 lg:px-10 py-20"}>
            <div className={'flex flex-col gap-16 mx-auto max-w-[1536px] space-y-10'}>
                <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-16">
                    <article className="flex flex-col items-baseline-last sm:flex-row justify-between gap-10 w-full">
                        <h2 className="heading max-w-3xl">
                            VideoPD — Intelligent Personal Discussion Automation
                        </h2>
                        <div className={'space-y-6'}>
                            <p className="description max-w-xl mx-auto">
                                VideoPD transforms personal discussions into digital, AI-verified, and audit-ready
                                interactions, enhancing risk visibility and compliance.
                            </p>
                        </div>
                    </article>
                </div>

                <Triplet
                    variant={"primary"}
                    items={[
                        {
                            header: "( 01 )",
                            title: "Automate Discussions",
                            content:
                                "VideoPD digitizes the entire PD lifecycle — from scheduling and recording to data capture and compliance reporting. AI-powered document classification, mapping, and extraction eliminate manual effort and standardize PD workflows across teams.",
                        },
                        {
                            header: "( 02 )",
                            title: "Real-Time Fraud Checks",
                            content:
                                "Powered by computer vision and AI forensics, VideoPD verifies applicant identity through facial recognition, document matching, and tampering detection. Fraudulent or manipulated documents are flagged instantly, ensuring risk-free onboarding.",
                        },
                        {
                            header: "( 03 )",
                            title: "Instant Audit Reports",
                            content:
                                "Generate standardized, AI-summarized PD reports mapped directly to your LOS. Integrated analyzers for bureau, income, and financial data provide actionable insights and complete transparency.",
                        },
                        {
                            header: "( 04 )",
                            title: "Smart Risk Decisions",
                            content:
                                "Leverage AI-driven bureau, income, and financial analysis to generate structured credit insights in seconds. Automated risk scoring and ratio computation cut underwriting time by up to 90%, while LLM-powered analytics ensure consistent, data-backed loan decisions.",
                        },
                    ]}
                />

                <div className={"flex items-center justify-center flex-wrap gap-2 lg:gap-4 text-sm"}>
                    {["Credit Analysts", "Branch Officers", "Risk & Compliance Teams", "Operations", "Managers"].map(text => {
                        return <div key={text}
                                    className={"px-6 py-3 text-zinc-200 border border1 text-xs sm:text-sm border-neutral-600 rounded-full"}>
                            {text}
                        </div>
                    })}
                </div>
            </div>
        </section>
    );
};

export default VideoPDSolution;
