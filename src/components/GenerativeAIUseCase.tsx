import React from 'react';
import Link from "next/link";
import Triplet from "@/components/Triplet";

const GenerativeAiUseCase = () => {
    return (
        <section className={"mt-8 flex flex-col gap-16 space-y-20"} id={"generative-ai"}>
            <div className={"flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16"}>
                <article className="flex flex-col items-center gap-6">
                    <div className={'flex flex-col sm:flex-row justify-between gap-10 w-full'}>
                        <h2 className={"text-2xl md:text-3xl lg:text-4xl font-medium"}>
                            Generative AI made simple
                        </h2>
                        <div className={'space-y-6'}>
                            <p className={"max-w-xl text-zinc-400 text-base"}>
                                It&apos;s time to shift focus from the complexities of generative AI to the
                                improvement of your product. Here at Newron, we eliminate the fuss and put an end to
                                constant
                                experimentation, allowing you to begin delivering top-notch services promptly.
                            </p>

                            <Link href={'https://ron.newron.ai'} passHref={true}>
                                <button className={"btn-secondary font-medium btn-primary"}>
                                    Meet Ron! Our generative AI assistant.
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                        {
                            [
                                'We ensure agility in the delivery of intelligent data solutions, providing comprehensive support so you can cease going in circles.',
                                'We are dedicated to helping machines comprehend your data, facilitating a smoother workflow for your organisation.',
                                'With our tailor-made Language Learning Models (LLMs), \n' +
                                'we adapt to your unique organisational needs, thereby assisting in achieving your objectives \n' +
                                'more efficiently.'
                            ]
                                .map((text, index) =>
                                    <div key={index}
                                         className={"flex items-center gap-4 max-w-lg bg-zinc-700/30 backdrop-blur-md border border-zinc-700/50 rounded-lg shadow-xl py-5 px-8"}>
                                        <p className={"text-zinc-200 text-base"}>
                                            {text}
                                        </p>
                                    </div>)}
                    </div>


                    {/*<p className={"max-w-lg text-zinc-400 text-base"}>*/}
                    {/*    In an increasingly data-driven world, our aim is to alleviate the pressure that accompanies*/}
                    {/*    the process of integrating AI. Our expertise lies in demystifying AI, making it accessible,*/}
                    {/*    and optimising its application to meet your needs.*/}
                    {/*</p>*/}
                </article>
                {/*<div className="w-full max-w-xs md:max-w-md mb-10">*/}
                {/*    <Image*/}
                {/*        src="/home/generative-ai.png"*/}
                {/*        alt="Newron makes generative AI simple for enterprises"*/}
                {/*        width={400}*/}
                {/*        height={400}*/}
                {/*        className="w-full h-auto"*/}
                {/*    />*/}
                {/*</div>*/}
            </div>
            <Triplet
                variant={"primary"}
                items={[
                    {
                        title: "Unravel your data like never before!",
                        content: "Utilise our advanced AI for real-time answers and insights from your data. Merge multiple data sources for in-depth analysis. \n" +
                            "Predict trends, plot charts, and query your database in a familiar language. Make your data work smarter and faster for you.",
                        img: {
                            src: "/home/gen-ai/analysis.png",
                            alt: "Newron's generative AI analysis on you data in real time",
                            width: 204,
                            height: 166
                        }
                    },
                    {
                        title: "Discover new opportunities!",
                        content: "Discover the potential of Ron CRM, your tool for unearthing valuable customer pipelines from public resources. We've taken the traditional CRM and refined it into a chat-first interface, specifically optimised for proactive discovery. This empowers your business to foresee and seize lucrative opportunities, both within your organisation and in the broader market. ",
                        img: {
                            src: "/home/gen-ai/growth.png",
                            alt: "Newron's generative AI growth tool for unearthing new business opportunities",
                            width: 246,
                            height: 165
                        }
                    },
                    {
                        title: "Turn data into knowledge!",
                        content: "Confront the challenge of managing unstructured information like emails, memos, and reports head-on with Ron Assist. This tool consolidates diverse data into a scalable knowledge bank, ensuring organisation-wide understanding and quality control. Transform chaos into clarity and guarantee the coherence of your information flow.",
                        img: {
                            src: "/home/gen-ai/assistance.png",
                            alt: "Newron's generative AI assistance tool for turning unstructured data into a knowledge bank",
                            width: 246,
                            height: 158
                        }
                    },
                ]}/>
            <article className={"pt-24 flex flex-col items-center gap-8"}>
                <h2 className={"text-3xl md:text-4xl lg:text-5xl text-center font-medium tracking-tight"}>
                    Custom LLM for each business
                </h2>
                <p className={"text-center text-base text-zinc-400 max-w-4xl"}>
                    Not all businesses are the same! Nor should be the LLM for it. We deliver pinpointed tuned models
                    for each industry. Our custom engineered models perform a minimum 85%<sup>*</sup> more accurate than
                    general purpose models.
                </p>
                <div className={"flex items-center justify-center flex-wrap gap-2 lg:gap-4 text-sm"}>
                    {["Retail", "Logistics", "Legal", "Healthcare", "Marketing",].map(text => {
                        return <div key={text}
                                    className={"px-6 py-3 md:px-8 text-zinc-200 border border1 text-xs sm:text-sm border-neutral-600 rounded-full"}>
                            {text}
                        </div>
                    })}
                </div>
                <Triplet variant={"primary"} items={[
                    {
                        title: "Flexible & Secure Deployment",
                        content: "We prioritise your data security and privacy by providing a range of hosting options. Choose from private cloud, secure partnerships with trusted providers such as AWS, Oracle, and Google, or opt for \n" +
                            "Newron’s professionally managed models. \n" +
                            "Full control and utmost security - tailored to your needs.",
                        img: {
                            src: "/home/custom-llm/flexibility.png",
                            alt: "Secure deployment options for custom LLMs with Newron & AWS, Oracle, Google Cloud and Private Cloud",
                            width: 238,
                            height: 166,
                        }
                    },
                    {
                        title: "Custom Models for You",
                        content: "We offer a bespoke service to customise AI models based on your enterprise requirements. With a transparent process, we fine-tune the models to align perfectly with your data and specific needs, \n" +
                            "ensuring an optimised solution that delivers the best results",
                        img: {
                            src: "/home/custom-llm/tailored.png",
                            alt: "Optimised custom LLMs for your business needs with Newron AI",
                            width: 240,
                            height: 157,
                        }
                    },
                    {
                        title: "Expert Support for Success",
                        content: "Recognising the novelty of creating applications based on language \n" +
                            "models, we provide unrivalled customer support. Our dedicated support and development teams are available to collaborate closely with you as needed, ensuring a smooth and successful \n" +
                            "development process.",
                        img: {
                            src: "/home/custom-llm/support.png",
                            alt: "Superior customer support for your custom LLMs with Newron AI",
                            width: 194,
                            height: 170,
                        }
                    },
                ]}/>
            </article>
        </section>
    );
};

export default GenerativeAiUseCase;