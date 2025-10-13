'use client'
import React from 'react';
import Link from "next/link";
import Triplet from "@/components/Triplet";
import {ArrowUpRightIcon} from "@heroicons/react/16/solid";

const Software3UseCase = () => {
    return (
        <section className={"py-16 flex flex-col gap-16 mx-auto max-w-7xl px-4 md:px-6 lg:px-10"} id={"software3"}>
            <div className={"flex flex-col-reverse md:flex-row justify-between items-center gap-4"}>
                <article className="flex flex-col gap-4">
                    <h2 className={"heading"}>
                        Delivering Next-Gen <br/>Software 3.0
                    </h2>
                    <p className={"description max-w-2xl"}>
                        At Newron, we lead the Software 3.0 evolution, leveraging Large Language Models (LLMs) to
                        advance AI and machine learning. Our approach improves complex data processing while ensuring
                        data privacy, model transparency, and continuous skill growth in this rapidly evolving field.
                    </p>
                    <div className="mt-8">
                        <Link href={"/contact-us?cta=software-3"}
                              target={"_blank"}
                              rel="noopener noreferrer"
                              className="btn-secondary font-medium flex items-center gap-5 w-fit">
                            Build the Future
                            <ArrowUpRightIcon width={20} height={20}/>
                        </Link>
                    </div>

                </article>
            </div>
            <Triplet
                variant={"primary"}
                items={[
                    {
                        header: "Adaptive System Design",
                        title: "Robust & Flexible",
                        content: "One of the key advantages of Software 3.0 lies in its robustness and flexibility. Its capacity to continuously learn and improve over time makes it capable of handling unpredictable scenarios and adjusting to evolving requirements. This ability to adapt and grow with changing needs ensures a level of resilience that traditional software often lacks.",
                    },
                    {
                        header: "Intelligent Workflow Automation",
                        title: "AI-Powered Operations",
                        content: "Software 3.0’s integration of AI and machine learning enables streamlined operations. Tasks that were once labor-intensive and time-consuming can now be automated, reducing human error and increasing overall efficiency. This not only enhances productivity but also frees your workforce to focus on more strategic and creative initiatives.",
                    },
                    {
                        header: "Personalised Intelligence",
                        title: "AI-Enhanced Experiences",
                        content: "The incorporation of AI and machine learning in Software 3.0 enables a more intuitive and personalised user experience. It can predict behaviour, anticipate needs, and provide tailored services. This ability to deliver dynamic, user-focused interactions leads to higher engagement and satisfaction, elevating the overall digital experience.",
                    }
                ]}/>
        </section>
    );
};

export default Software3UseCase;