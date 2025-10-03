import React from 'react';
import Link from "next/link";
import Triplet from "@/components/Triplet";
import Image from "next/image";

const Software3UseCase = () => {
    return (
        <section className={"mt-8 flex flex-col gap-16"} id={"software3"}>
            <div className={"flex flex-col-reverse md:flex-row justify-between items-center gap-4"}>
                <article className="flex flex-col gap-4">
                    <h2 className={"text-2xl md:text-3xl lg:text-4xl max-w-lg font-medium"}>
                        Delivering Next-Gen Software 3.0
                    </h2>
                    <p className={"max-w-lg text-zinc-400 text-base"}>
                        At Newron, we&apos;re at the forefront of the Software 3.0 evolution, harnessing the
                        capabilities of Large
                        Language Models (LLM) - a powerful synergy of artificial intelligence and machine learning. Our
                        methods
                        enhance the processing of complex, high-dimensional data, addressing critical issues like data
                        privacy,
                        model transparency, and skill development in this fast-paced field.
                    </p>

                    <p className={"max-w-lg text-zinc-400 text-base"}>
                        The emergence of Software 3.0, paired with the use of LLM, signals a new age of scalability and
                        efficiency in handling intricate software demands. Under our guidance, software development is
                        transforming to be more streamlined, cost-efficient, and potent than ever before.
                    </p>
                    <div className="mt-8">
                        <Link href={"/contact-us?cta=software-3"}>
                            <button className="w-full sm:w-1/2 btn-secondary font-medium">
                                Talk to us
                            </button>
                        </Link>
                    </div>

                </article>
                <div className={'w-full max-w-xs md:max-w-md mb-10'}>
                    <Image src={"/home/software-3.png"} alt={"Software 3.0 expertise at Newron"}
                           width={400}
                           height={400}
                    />
                </div>
            </div>
            <Triplet
                variant={"primary"}
                items={[
                    {
                        title: "Robust & Flexible",
                        content: "One of the key advantages of Software 3.0 lies in its robustness \n" +
                            "and flexibility. Its capacity to continuously learn and improve over \n" +
                            "time makes it capable of handling unpredictable scenarios and \n" +
                            "adjusting to evolving requirements. This ability to adapt and grow \n" +
                            "with changing needs ensures a level of robustness and resilience \n" +
                            "traditional software often lacks.",
                        img: {
                            src: "/home/software-3/robustness.png",
                            alt: "Newron brings unprecedented robustness and flexibility to your software 3.0 needs",
                            width: 240,
                            height: 163
                        },
                    },
                    {
                        title: "AI-Powered Operations",
                        content: "Software 3.0's integration of AI and machine learning results in \n" +
                            "streamlined operations. Tasks that were once labor-intensive and \n" +
                            "time-consuming can now be automated, reducing human error and \n" +
                            "increasing overall efficiency. This not only enhances operational \n" +
                            "productivity but also frees up your workforce to focus on more \n" +
                            "strategic and creative tasks.",
                        img: {
                            src: "/home/software-3/streamlined.png",
                            alt: "Newron streamlines your operations through AI and machine learning",
                            width: 240,
                            height: 186
                        }
                    },
                    {
                        title: "AI-Enhanced Experiences",
                        content: "The incorporation of AI and machine learning in Software 3.0 paves \n" +
                            "the way for a more intuitive and personalized user experience. It \n" +
                            "can predict user behavior, anticipate needs, and provide tailored \n" +
                            "services. This ability to offer a more personalized interaction leads \n" +
                            "to higher user satisfaction and engagement, thus improving the \n" +
                            "overall user experience.",
                        img: {
                            src: "/home/software-3/enhanced-ux.png",
                            alt: "Newron enhances your user experience through AI and machine learning",
                            width: 180,
                            height: 180
                        }
                    },
                ]}/>
        </section>
    );
};

export default Software3UseCase;