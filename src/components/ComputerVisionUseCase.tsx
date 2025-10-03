import React from 'react';
import Link from "next/link";
import Triplet from "@/components/Triplet";
import Image from "next/image";

// const YoutubeVideo = dynamic(() => import("@/components/YoutubeVideo"), { ssr: false });


const ComputerVisionUseCase = () => {
    return (
        <section className={"flex flex-col gap-16"} id={"computer-vision"}>
            <div className={"flex flex-col-reverse md:flex-row-reverse justify-between items-center gap-4"}>
                <article className="flex flex-col gap-4">
                    <h2 className={"text-2xl md:text-3xl lg:text-4xl max-w-lg font-medium"}>
                        Enterprise-Scale Computer Vision
                    </h2>
                    <p className={"max-w-lg text-zinc-400 text-base"}>
                        Addressing vision-related issues remains a daunting challenge within the software industry,
                        requiring multi-domain expertise and collaboration. At Newron, we&apos;re equipped with exactly
                        the right resources and have established efficient pipelines to ensure quality model delivery.
                    </p>
                    <p className={"max-w-lg text-zinc-400 text-base"}>
                        Our proficiency extends to several aspects of visual data processing, including real-time video
                        processing, depth extraction from visual data, object detection, model compression, and document
                        understanding.

                    </p>
                    <p className={"max-w-lg text-zinc-300 text-base"}>
                        Dedicated to addressing any AI-related challenges you might encounter, we stand ready to turn
                        your problems into opportunities for growth.
                    </p>
                    <div className={"mt-8"}>
                        <Link href={"/contact-us?cta=computer-vision"}>
                            <button className={"w-full sm:w-1/2 btn-secondary font-medium btn-primary"}>
                                Talk to us
                            </button>
                        </Link>
                    </div>
                </article>
                <div className={'w-full max-w-xs md:max-w-md mb-10'}>
                    <Image src={"/home/computer-vision.png"} alt={"Computer Vision is one of specialities at NewronAI"}
                           width={400}
                           height={400}
                    />
                </div>
            </div>
            <Triplet items={[
                {
                    title: "Real-Time Object Detection",
                    content: "Our in-house, custom-developed model takes object detection to the next level. Not only does it identify objects, but it also gauges their distance from the camera with an impressive accuracy of \n" +
                        "over 97% and all in real time. Remarkably, this groundbreaking model is capable of running on a CPU, enhancing its utility and \n" +
                        "accessibility.",
                    img: {
                        src: "/home/computer-vision/detection.png",
                        alt: "Intelligent Object Detection and Distance Heatmap Computer Vision Solution for Enterprise Scale Applications",
                        width: 191,
                        height: 200,
                    }
                },
                {
                    title: "Document & Pose Analysis",
                    content: "Our custom models are equipped to perform specialised understanding tasks like never before, including human pose and document comprehension. Notably, our models can discern human poses even under potential obscurity and interpret documents, regardless of poor lighting conditions. Experience unparalleled precision and versatility in understanding tasks with our solutions.",
                    img: {
                        src: "/home/computer-vision/understanding.png",
                        alt: "Advanced Document and Human Pose Understanding Computer Vision Solution for Enterprise Scale Applications",
                        width: 238,
                        height: 208,
                    }
                },
                {
                    title: "Cutting-Edge Model Compression",
                    content: "Leveraging our proprietary pruning and quantisation algorithms, we've achieved the ability to accelerate model performance up to 100 times without compromising accuracy. This can be utilised for \n" +
                        "deployments on both the edge and the cloud. Our groundbreaking approach enhances the delivery of accurate models in real-time environments, thereby revolutionising efficiency and speed in AI solutions.",
                    img: {
                        src: "/home/computer-vision/optimization.png",
                        alt: "State of the Art Model Compression Computer Vision Solution for Enterprise Scale Applications",
                        width: 244,
                        height: 208,
                    }
                },
            ]}
                     variant={"secondary"}
            />

            {/* <div>
                <YoutubeVideo />
            </div> */}
        </section>
    );
};

export default ComputerVisionUseCase;