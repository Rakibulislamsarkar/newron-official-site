"use client";

import Image from "next/image";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import React, {useState} from "react";

type Tech = {
    technology: string;
    description: string;
    chips: string[];
    image: string;
};

const techStack: Tech[] = [
    {
        technology: "Objectives",
        description:
            "Automate the entire lending journey — from lead to disbursal — using AI-driven modules like SmartLogin, Docs Classification, Digital Verification, VideoPD, and AI Audit. The system ensures document integrity, fraud prevention, and end-to-end compliance with minimal manual intervention and maximum efficiency.",
        chips: [
            "End-to-End Lending Automation",
            "AI Workflow Orchestration",
            "Policy-Based Decisioning",
            "Human-in-the-Loop Controls",
        ],
        image: "/gen_image/1.png",
    },
    {
        technology: "Inputs",
        description:
            "Key inputs include applicant KYC documents, income proofs, bank statements, and collateral data. Additional inputs flow from CRM and LOS systems, VideoPD interactions, and external APIs such as PAN, Aadhaar, CKYC, and CIBIL for real-time validation and enrichment.",
        chips: [
            "Multi-Source Data Ingestion",
            "VideoPD Capture",
            "KYC & Credit APIs",
            "CRM/LOS Integration",
        ],
        image: "/gen_image/2.png",
    },
    {
        technology: "Outputs",
        description:
            "Structured and validated data is generated from raw documents, producing enriched applicant profiles, fraud risk indicators, and auto-decision flags (e.g., FTR/FTNR). Standardized PD reports, compliance logs, and audit metadata are automatically created and stored within the LOS for traceability.",
        chips: [
            "Auto-Decision Flags",
            "Standardized PD Reports",
            "Compliance Logs",
            "Audit Trail Metadata",
        ],
        image: "/gen_image/3.png",
    },
    {
        technology: "AI Features",
        description:
            "Combines LLM-based document classification and extraction with computer vision, AI forensics, and geo-tagging. VideoPD integrates voice and sentiment analytics, while policy-rule automation and data enrichment APIs ensure faster, context-aware decisioning with fraud prevention built in.",
        chips: [
            "LLM-Powered Extraction",
            "Computer Vision & AI Forensics",
            "Geo-Tagging & Sentiment AI",
            "Policy-Rule Automation",
        ],
        image: "/gen_image/1.png",
    },
    {
        technology: "Business Impacts",
        description:
            "Achieve up to 80% reduction in manual effort, 90% accuracy improvement, and drastically shorter loan turnaround times. Crediflow enhances compliance visibility, reduces operational costs, and enables scalable, audit-ready lending operations with zero-touch personal discussion management.",
        chips: [
            "80% Faster Loan TAT",
            "90% Accuracy Improvement",
            "Reduced Opex",
            "Scalable, Compliant Lending",
        ],
        image: "/gen_image/2.png",
    },
];


const TechAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="space-y-20 mt-20">
            <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-16">
                <article className="flex flex-col items-baseline-last sm:flex-row justify-between gap-10 w-full">
                    <h2 className="heading max-w-2xl">
                        How Crediflow’s AI Lending Workflow Works
                    </h2>
                    <div className={'space-y-6'}>
                        <p className="description max-w-xl mx-auto">
                            A streamlined process designed to automate document handling, verification, and loan decisioning —
                            powered by AI and deep integrations.
                        </p>
                    </div>
                </article>
            </div>

            <div className="flex flex-col md:flex-row gap-10">
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                    onValueChange={(value: string | null) => {
                        if (!value) return setActiveIndex(-1);
                        const index = parseInt(value.split("-")[1]) - 1;
                        setActiveIndex(index);
                    }}
                >
                    {techStack.map((tech, index) => (
                        <AccordionItem key={`tech-${index}`} value={`item-${index + 1}`}>
                            <AccordionTrigger>
                                <h3 className="text-[1.5rem] leading-[1.7rem] mb-2">
                                    {tech.technology}
                                </h3>
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-foreground-muted">
                                <p className="text-sm md:text-base">{tech.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {tech.chips.map((chip, i) => (
                                        <span
                                            key={i}
                                            className="font-medium text-sm border border-[#6544F4]/50 text-white px-4 py-1 rounded-full"
                                        >
                                            {chip}
                                        </span>
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                <div className="md:w-1/2 justify-center items-center">
                    {activeIndex >= 0 && (
                        <div className="w-full h-[55vh] relative rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src={techStack[activeIndex].image}
                                alt={techStack[activeIndex].technology}
                                fill
                                className="object-cover"
                                priority={activeIndex === 0}
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default TechAccordion;
