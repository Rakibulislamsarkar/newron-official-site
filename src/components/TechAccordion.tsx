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
            "Automate the end-to-end lending workflow—from lead acquisition to loan disbursal—using AI-driven document processing, fraud detection, and intelligent decisioning. The goal is to minimize manual intervention, improve compliance and accuracy, and achieve faster loan turnaround times.",
        chips: ["End-to-End Automation", "Compliance-Focused", "Faster TAT", "Human-in-the-Loop"],
        image: "/gen_image/1.png",
    },
    {
        technology: "Inputs",
        description:
            "Applicant-provided documents such as ID proofs, bank statements, income proofs, and KYC files serve as key inputs. Additional data comes from CRM and LOS systems, policy rules, and third-party APIs like PAN, Aadhaar, and CIBIL for cross-verification and validation.",
        chips: ["Data-Driven Inputs", "Multi-Source Validation", "API Integrations", "KYC & Credit Data"],
        image: "/gen_image/2.png",
    },
    {
        technology: "Outputs",
        description:
            "The system produces structured, validated datasets from raw documents, enriched applicant profiles, and automated decision flags (e.g., FTR/FTNR or fraud indicators). It also creates application records in the LOS, along with dashboards and audit trails for compliance tracking.",
        chips: ["Actionable Intelligence", "Structured Data", "Auto-Decision Flags", "Compliance Reports"],
        image: "/gen_image/3.png",
    },
    {
        technology: "AI Features",
        description:
            "Leverages advanced AI capabilities including document classification, extraction, and validation using LLMs and computer vision. It applies AI forensics for fraud detection, enforces policy-based decision automation, and performs data enrichment through API integrations for real-time contextual insights.",
        chips: ["Intelligent Automation", "LLM-Powered", "Computer Vision", "Fraud Detection"],
        image: "/gen_image/1.png",
    },
    {
        technology: "Business Impacts",
        description:
            "Delivers 60–80% reduction in manual processing time, significantly boosts first-time-right rates, and improves overall efficiency. Automation cuts operational costs, accelerates loan approvals, enhances fraud prevention, and strengthens compliance confidence throughout the lending lifecycle.",
        chips: ["High ROI & Efficiency", "Reduced Costs", "Scalable Growth", "Improved Accuracy"],
        image: "/gen_image/2.png",
    },
];

const TechAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="space-y-20 mt-20">
            <div className="max-w-3xl">
                <h2 className="heading">
                    How Crediflow’s AI Lending Workflow Works
                </h2>
                <p className="mt-4 description">
                    A streamlined process designed to automate document handling, verification, and loan decisioning —
                    powered by AI and deep integrations.
                </p>
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
                        <div className="w-full h-[50vh] relative rounded-lg overflow-hidden shadow-lg">
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
