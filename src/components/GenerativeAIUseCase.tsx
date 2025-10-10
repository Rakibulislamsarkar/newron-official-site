import React from 'react';
import Link from "next/link";
import Triplet from "@/components/Triplet";
import {ArrowUpRightIcon} from "@heroicons/react/16/solid";


const GenerativeAiUseCase = () => {
    return (
        <section className={"py-16 flex flex-col gap-16 mx-auto max-w-8xl px-4 md:px-6 lg:px-10"} id={"generative-ai"}>
            <div className={"flex flex-col md:flex-row items-center gap-10 md:gap-16"}>
                <article className="flex flex-col gap-6">
                    <h2 className={"heading"}>
                        Generative AI made simple
                    </h2>
                    <div className={'space-y-6'}>
                        <p className={"max-w-xl description"}>
                            It&apos;s time to shift focus from the complexities of generative AI to the
                            improvement of your product. Here at Newron, we eliminate the fuss and put an end to
                            constant
                            experimentation, allowing you to begin delivering top-notch services promptly.
                        </p>

                        <Link
                            href="https://ron.newron.ai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary font-medium flex items-center gap-5 w-fit"
                        >
                            Try Ron
                            <ArrowUpRightIcon width={20} height={20} />
                        </Link>

                    </div>
                </article>

            </div>
            <Triplet
                variant={"primary"}
                items={[
                    {
                        header: 'Intelligent Data Insights',
                        title: "Unravel data like never before!",
                        content: "Leverage our advanced AI to get real-time answers and insights from your data. Merge multiple sources for deeper analysis, predict trends, generate visual charts, and query databases using natural language. Empower your team to uncover hidden patterns, automate reporting, and make smarter, faster decisions driven by intelligent data understanding.",
                    },
                    {
                        header: 'Proactive Opportunity Discovery',
                        title: "Discover new opportunities!",
                        content: "Experience the power of Ron CRM — your smart tool for uncovering customer pipelines from public data. Designed as a chat-first interface, it transforms traditional CRM into a proactive discovery engine. Identify high-value prospects, track engagement, and forecast opportunities to help your business anticipate growth and act with strategic precision across every market segment.",
                    },
                    {
                        header: 'Unified Knowledge Management',
                        title: "Turn data into knowledge!",
                        content: "Tackle unstructured information like emails, memos, and reports with Ron Assist. This intelligent system consolidates scattered data into a scalable, searchable knowledge base. Promote organisation-wide clarity, streamline communication, and uphold consistency across all information channels, transforming fragmented details into a single, actionable source of truth for informed decision-making.",
                    }

                ]}/>
        </section>
    );
};

export default GenerativeAiUseCase;