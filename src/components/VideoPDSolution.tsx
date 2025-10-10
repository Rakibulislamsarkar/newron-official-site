import React from 'react';
import Link from "next/link";
import Triplet from "@/components/Triplet";
import {ArrowUpRightIcon} from "@heroicons/react/16/solid";

const VideoPDSolution = () => {
    return (
        <section className={"pt-20 flex flex-col gap-16 mx-auto max-w-8xl px-4 md:px-6 lg:px-10"}>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16">
                <article className="flex flex-col items-center gap-6">
                    <div className={'flex flex-col sm:flex-row justify-between gap-10 w-full'}>
                        <h2 className="heading">
                            VideoPD — Smart Personal Discussions
                        </h2>
                        <div className={'space-y-6'}>
                            <p className="description max-w-xl mx-auto">
                                VideoPD digitizes personal discussions, speeds up underwriting, ensures compliance, and delivers audit-ready records seamlessly.
                            </p>

                            <Link href={"/contact-us?cta=computer-vision"}>
                                <button className={"btn-secondary flex items-center justify-center gap-5"}>
                                    Request a VideoPD demo
                                    <ArrowUpRightIcon width={20} height={20} />
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                        {[
                            'Video PD Capture & Verification – Record PD interactions digitally for fast, reliable, and standardized verification.',
                            'Face & Name Matching – Automatically match applicant’s face and name with submitted documents and IDs to ensure authenticity.',
                            'Geo-location Tagging – Capture the location of the PD visit to maintain accurate, auditable records.',
                            'Standardized PD Reports – Generate uniform, ready-to-use reports that simplify underwriting and compliance.',
                            'Audit Trail Logging – Track officer actions during PDs for transparency and regulatory compliance.',
                            'Real-Time Analytics – Gain instant insights from PD interactions to improve decision-making and optimize workflows.',

                        ].map((text, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 bg-zinc-700/30 backdrop-blur-md border border-zinc-700/50 rounded-lg shadow-xl px-4 py-8"
                            >
                                <p className="text-zinc-200 text-base">{text}</p>
                            </div>
                        ))}
                    </div>
                </article>
            </div>

            <div className={"flex items-center justify-center flex-wrap gap-2 lg:gap-4 text-sm"}>
                {["Credit Analysts", "Branch Officers", "Managers", "Risk & Compliance Teams", "Operations"].map(text => {
                    return <div key={text}
                                className={"px-6 py-3 text-zinc-200 border border1 text-xs sm:text-sm border-neutral-600 rounded-full"}>
                        {text}
                    </div>
                })}
            </div>

            <Triplet
                variant={"primary"}
                items={[
                    {
                        header: "Digital PD Management",
                        title: "Streamline Personal Discussions",
                        content: "Capture PD interactions digitally to save time and reduce manual effort. Standardized workflows ensure consistent, audit-ready data for faster underwriting and compliance.",
                    },
                    {
                        header: "Identity Verification",
                        title: "Reliable Identity & Document Checks",
                        content: "Automatically match faces and names with submitted documents and IDs. Geo-location tagging and multi-lingual transcription provide accurate, verifiable evidence of PD visits.",
                    },
                    {
                        header: "Compliant Reporting",
                        title: "Audit-Ready PD Reports",
                        content: "Generate standardized PD reports and maintain a complete audit trail of officer actions. Integration with your LOS ensures seamless storage and access for regulatory and operational needs.",
                    }

                ]}
            />
        </section>
    );
};

export default VideoPDSolution;
