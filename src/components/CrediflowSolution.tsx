import React from 'react';
import Triplet from "@/components/Triplet";
import TechAccordion from "@/components/TechAccordion";

const CrediflowSolution = () => {
    return (
        <section className={'px-4 md:px-6 lg:px-10'}>
            <div className={"flex flex-col gap-16 mx-auto max-w-[1536px] space-y-20"}>
                <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-16">
                    <article className="flex flex-col items-baseline-last sm:flex-row justify-between gap-10 w-full">
                        <h2 className="heading max-w-2xl">
                            Transform Lending Workflows with Crediflow
                        </h2>
                        <div className={'space-y-6'}>
                            <p className="description max-w-xl mx-auto">
                                Crediflow streamlines lending with AI-powered document and data processing, ensuring
                                fast, accurate, and compliant credit decisions.
                            </p>

                            {/*<Link href={"/contact-us?cta=computer-vision"}*/}
                            {/*      target={"_blank"}*/}
                            {/*      rel="noopener noreferrer"*/}
                            {/*      className="btn-secondary font-medium flex items-center gap-5 w-fit">*/}
                            {/*    Request a CrediFlow demo*/}
                            {/*    <ArrowUpRightIcon width={20} height={20}/>*/}
                            {/*</Link>*/}
                        </div>
                    </article>
                </div>

                <Triplet
                    items={[
                        {
                            header: "( 01 )",
                            title: "Lead to Login",
                            content:
                                "Automate the onboarding pipeline from document upload to verified application creation. Crediflow uses LLM-based document classification, mapping, and extraction to identify, validate, and populate data automatically — reducing manual effort by 70% and improving first-time-right rates across underwriting.",
                        },
                        {
                            header: "( 02 )",
                            title: "Login to Sanction",
                            content:
                                "Instantly verify and enrich applications using AI forensics and computer vision. Crediflow authenticates documents, detects tampering, and enriches data via external APIs — ensuring accurate, fraud-free credit decisions in record time.",
                        },
                        {
                            header: "( 03 )",
                            title: "AI Audit",
                            content:
                                "Gain 360° visibility and compliance tracking through AI-powered audit trails. Every lending action, PD recording, and decision log is automatically tagged, timestamped, and monitored — guaranteeing audit readiness and regulatory transparency.",
                        },
                        {
                            header: "( 04 )",
                            title: "Disbursal",
                            content:
                                "Automate post-sanction checks and disbursement workflows with policy-driven validation. Crediflow ensures funds are released securely, approvals are traceable, and compliance data is maintained seamlessly for audits and reporting.",
                        },
                    ]}
                    variant={"primary"}
                />

                <TechAccordion/>
            </div>
        </section>
    );
};

export default CrediflowSolution;
