import React from 'react';
import Triplet from "@/components/Triplet";
import TechAccordion from "@/components/TechAccordion";

const CrediflowSolution = () => {
    return (
        <section className={'space-y-20 px-4 md:px-6 lg:px-10'}>
            <div className={"flex flex-col gap-16 mx-auto max-w-[1536px]"}>
                <p className={'text-indigo-200'}>Core features</p>
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
                                "Automatically capture and qualify leads using intelligent data extraction and scoring. Crediflow streamlines the transition from potential customer to verified applicant, ensuring no opportunity is lost in the acquisition funnel.",
                        },
                        {
                            header: "( 02 )",
                            title: "Login to Sanction",
                            content:
                                "Analyze loan applications instantly with AI-driven risk assessment and document verification. Crediflow validates applicant information, identifies inconsistencies, and accelerates credit decision-making for faster loan approvals.",
                        },
                        {
                            header: "( 03 )",
                            title: "AI Audit",
                            content:
                                "Gain full visibility into every lending action through real-time AI auditing. Crediflow monitors loan officer activities, personal discussions, and decision logs to ensure compliance, transparency, and accountability across all processes.",
                        },
                        {
                            header: "( 04 )",
                            title: "Disbursal",
                            content:
                                "Automate and secure the final step of loan processing. Crediflow manages disbursement workflows, validates final approvals, and ensures funds are released efficiently while maintaining complete audit and compliance tracking.",
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
