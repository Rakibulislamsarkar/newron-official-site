import React from 'react';
import Link from "next/link";
import Triplet from "@/components/Triplet";
import {ArrowUpRightIcon} from "@heroicons/react/16/solid";

const CrediflowSolution = () => {
    return (
        <section className={'space-y-20 mx-auto max-w-8xl px-4 md:px-6 lg:px-10'}>
            <div className={"flex flex-col gap-16"}>
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

                            <Link href={"/contact-us?cta=computer-vision"}>
                                <button className={"btn-secondary flex items-center justify-center gap-5"}>
                                    Request a CrediFlow demo
                                    <ArrowUpRightIcon width={20} height={20}/>
                                </button>
                            </Link>
                        </div>
                    </article>
                </div>

                <Triplet items={[
                    {
                        header: "Smart Credit Assessment",
                        title: "Fast, Accurate Credit Decisions",
                        content: "Leverage advanced AI algorithms to analyze loan applications and documents in seconds. Crediflow identifies risks, flags inconsistencies, and provides actionable insights, helping lenders make faster, smarter decisions.",
                    },
                    {
                        header: "Effortless Document Automation",
                        title: "Automated Document Processing",
                        content: "Automatically extract, validate, and categorize information from loan documents. Crediflow reduces manual effort, minimizes errors, and ensures compliance with banking regulations, streamlining the entire lending workflow.",
                    },
                    {
                        header: "Comprehensive Tracking & Transparency",
                        title: "Track Decisions in Real-Time",
                        content: "Crediflow keeps track of personal discussions (PDs), loan officer actions, and decision logs in real-time. Enhance transparency, maintain audit trails, and improve operational efficiency across your lending process.",
                    }
                ]} variant={"primary"}/>
            </div>
        </section>
    );
};

export default CrediflowSolution;
