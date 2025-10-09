import React from 'react';
import Link from "next/link";
import Triplet from "@/components/Triplet";

const CrediflowSolution = () => {
    return (
        <section className={'space-y-20 mx-auto max-w-8xl px-4 md:px-6 lg:px-10'}>
            <div className={"flex flex-col gap-16"}>
                <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16">
                    <article className="flex flex-col sm:flex-row justify-between gap-10 w-full">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium max-w-lg">
                            Transform LendingWorkflows with Crediflow
                        </h2>
                        <div className={'space-y-6'}>
                            <p className="max-w-xl text-base text-zinc-400">
                                Crediflow transforms lending workflows with AI-driven document and data processing. From initial
                                submission to decision-making, our platform ensures speed, accuracy, and compliance for credit
                                teams.
                            </p>

                            <Link href={"/contact-us?cta=computer-vision"}>
                                <button className={"btn-primary font-medium btn-primary"}>
                                    Request a CrediFlow demo
                                </button>
                            </Link>
                        </div>
                    </article>
                </div>

                <Triplet items={[
                    {
                        title: "Instant, Accurate Credit Decisions",
                        content: "Leverage advanced AI algorithms to analyze loan applications and documents in seconds. Crediflow identifies risks, flags inconsistencies, and provides actionable insights, helping lenders make faster, smarter decisions.",
                        img: {
                            src: "/home/computer-vision/optimization.png",
                            alt: "Document Upload and AI Ingestion in Crediflow",
                            width: 191,
                            height: 200,
                        }
                    },
                    {
                        title: "Automated Document Processing",
                        content: "Automatically extract, validate, and categorize information from loan documents. Crediflow reduces manual effort, minimizes errors, and ensures compliance with banking regulations, streamlining the entire lending workflow.",
                        img: {
                            src: "/home/computer-vision/detection.png",
                            alt: "AI Analysis and Data Review in Crediflow",
                            width: 238,
                            height: 208,
                        }
                    },
                    {
                        title: "Track PDs & Decisions",
                        content: "Crediflow keeps track of personal discussions (PDs), loan officer actions, and decision logs in real-time. Enhance transparency, maintain audit trails, and improve operational efficiency across your lending process.",
                        img: {
                            src: "/home/computer-vision/understanding.png",
                            alt: "CAM Generation and Dashboard in Crediflow",
                            width: 244,
                            height: 208,
                        }
                    },
                ]} variant={"primary"}/>
            </div>
        </section>
    );
};

export default CrediflowSolution;
