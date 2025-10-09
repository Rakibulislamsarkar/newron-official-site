import React from 'react';
import Link from "next/link";
import Triplet from "@/components/Triplet";
import {ArrowUpRightIcon} from "@heroicons/react/16/solid";


const GenerativeAiUseCase = () => {
    return (
        <section className={"mt-8 flex flex-col gap-16 mx-auto max-w-8xl px-4 md:px-6 lg:px-10"} id={"generative-ai"}>
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

                        <Link href={'https://ron.newron.ai'} passHref={true}>
                            <button className={"btn-primary font-medium flex items-center gap-5"}>
                                Try Ron
                                <ArrowUpRightIcon width={20} height={20}/>
                            </button>
                        </Link>
                    </div>
                </article>

            </div>
            <Triplet
                variant={"primary"}
                items={[
                    {
                        header: 'header 1',
                        title: "Unravel your data like never before!",
                        content: "Utilise our advanced AI for real-time answers and insights from your data. Merge multiple data sources for in-depth analysis. \n" +
                            "Predict trends, plot charts, and query your database in a familiar language. Make your data work smarter and faster for you.",
                    },
                    {
                        header: 'header 2',
                        title: "Discover new opportunities!",
                        content: "Discover the potential of Ron CRM, your tool for unearthing valuable customer pipelines from public resources. We've taken the traditional CRM and refined it into a chat-first interface, specifically optimised for proactive discovery. This empowers your business to foresee and seize lucrative opportunities, both within your organisation and in the broader market. ",
                    },
                    {
                        header: 'header 3',
                        title: "Turn data into knowledge!",
                        content: "Confront the challenge of managing unstructured information like emails, memos, and reports head-on with Ron Assist. This tool consolidates diverse data into a scalable knowledge bank, ensuring organisation-wide understanding and quality control. Transform chaos into clarity and guarantee the coherence of your information flow.",
                    },
                ]}/>
        </section>
    );
};

export default GenerativeAiUseCase;