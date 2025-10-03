import React from 'react';
import Link from "next/link";
import Triplet from "@/components/Triplet";

const CrediflowSolution = () => {
    return (
        <section className={"flex flex-col gap-16"}>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16">
                <article className="flex flex-col items-center gap-6">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium max-w-lg text-center mx-auto">
                        Transform LendingWorkflows with Crediflow
                    </h2>
                    <p className="text-base text-zinc-400 max-w-4xl mx-auto text-center">
                        Crediflow transforms lending workflows with AI-driven document and data processing. From initial
                        submission to decision-making, our platform ensures speed, accuracy, and compliance for credit
                        teams.
                    </p>

                    <Link href={"/contact-us?cta=computer-vision"}>
                        <button className={"btn-secondary font-medium btn-primary"}>
                            Request a CrediFlow demo
                        </button>
                    </Link>

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

            <div className="flex flex-col space-y-8">
                <div className={'space-y-2'}>
                    <h3 className="text-2xl md:text-3xl font-medium">
                        Trusted Across Financial Institutions
                    </h3>
                    <p className="text-zinc-400 max-w-2xl">
                        From large banks to specialized lenders, Crediflow adapts to your unique lending requirements
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    <div className="border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors">
                        <h4 className="text-lg font-medium mb-2">Commercial Lending</h4>
                        <p className="text-zinc-400 text-sm">
                            Streamline business loan processing with automated financial analysis and risk assessment
                        </p>
                    </div>
                    <div className="border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors">
                        <h4 className="text-lg font-medium mb-2">Retail Banking</h4>
                        <p className="text-zinc-400 text-sm">
                            Process personal loans, mortgages, and credit applications with speed and precision
                        </p>
                    </div>
                    <div className="border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors">
                        <h4 className="text-lg font-medium mb-2">NBFCs</h4>
                        <p className="text-zinc-400 text-sm">
                            Scale operations efficiently with automated compliance and document verification
                        </p>
                    </div>
                    <div className="border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-colors">
                        <h4 className="text-lg font-medium mb-2">Microfinance</h4>
                        <p className="text-zinc-400 text-sm">
                            Handle high-volume applications with fast turnaround and risk management
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CrediflowSolution;
