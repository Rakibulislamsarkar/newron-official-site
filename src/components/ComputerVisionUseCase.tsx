'use client'
import React, {useRef, useState} from 'react';
import Link from "next/link";
import Triplet from "@/components/Triplet";
import {ArrowUpRightIcon} from "@heroicons/react/16/solid";

// const YoutubeVideo = dynamic(() => import("@/components/YoutubeVideo"), { ssr: false });


const ComputerVisionUseCase = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = async () => {
        if (isTouchDevice()) return;

        setIsHovered(true);

        const video = videoRef.current;
        if (!video || !video.paused) return;

        try {
            await video.play();
            setIsPlaying(true);
        } catch (err) {
            console.warn("Video play failed:", err);
        }
    };

    const handleMouseLeave = () => {
        if (isTouchDevice()) return;

        setIsHovered(false);

        const video = videoRef.current;
        if (video && !video.paused) {
            video.pause();
            setIsPlaying(false);
        }
    };

    const handleClick = async () => {
        const video = videoRef.current;
        if (!video) return;

        try {
            if (video.paused) {
                await video.play();
                setIsPlaying(true);
            } else {
                video.pause();
                setIsPlaying(false);
            }
        } catch (err) {
            console.warn("Video play failed:", err);
        }
    };


    const isTouchDevice = () =>
        typeof window !== "undefined" &&
        ('ontouchstart' in window || navigator.maxTouchPoints > 0);


    return (
        <section className={"py-16 flex flex-col gap-16 mx-auto max-w-8xl px-4 md:px-6 lg:px-10"} id={"computer-vision"}>
            <div className={"flex flex-col-reverse md:flex-row-reverse justify-between items-center gap-4"}>
                <article className="flex flex-col gap-4">
                    <h2 className={"heading"}>
                        Computer Vision at Scale
                    </h2>
                    <p className={"max-w-lg description"}>
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
                            <button className="btn-secondary font-medium flex items-center gap-5">
                                Talk to us
                                <ArrowUpRightIcon width={20} height={20}/>
                            </button>
                        </Link>
                    </div>
                </article>
                <div className="relative w-full max-w-md mb-10">
                    <video
                        ref={videoRef}
                        src="/home/computer-vision/Scale.mp4"
                        muted
                        loop
                        playsInline
                        poster="/home/computer-vision/scale.png"
                        className="w-full h-auto rounded-2xl shadow-lg object-cover border border-neutral-700 cursor-pointer"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleClick}
                    />
                    {!isPlaying && (
                        <div
                            className="absolute inset-0 flex items-center justify-center pointer-events-none transition-opacity duration-300"
                            style={{ opacity: isHovered ? 0 : 1 }}
                        >
                            <div className="bg-cyan-300 bg-opacity-40 p-3 rounded-full flex items-center justify-center">
                                <svg
                                    className="w-8 h-8 text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M6 4l12 6-12 6V4z" />
                                </svg>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Triplet items={[
                {
                    header: "Advanced Object Intelligence",
                    title: "Real-Time Object Detection",
                    content: "Our custom-built model redefines real-time object detection. It not only recognises objects but also estimates their distance from the camera with over 97% accuracy. Designed for efficiency, this breakthrough system operates seamlessly on a CPU, offering exceptional speed, precision, and accessibility — making high-performance computer vision available to all users and deployment environments.",
                },
                {
                    header: "Comprehensive Scene Understanding",
                    title: "Document & Pose Analysis",
                    content: "Our AI models excel at specialised understanding tasks, including human pose estimation and document comprehension. They can accurately detect body movements even in complex or obscured scenes and interpret documents under challenging conditions like poor lighting. Achieve unmatched reliability and adaptability across multiple analysis tasks with our advanced, domain-optimised solutions.",
                },
                {
                    header: "Optimised AI Performance",
                    title: "Smart Model Compression",
                    content: "Through proprietary pruning and quantisation techniques, we accelerate model performance by up to 100 times without sacrificing accuracy. Suitable for both edge and cloud environments, our compression technology enables faster inference, reduced latency, and improved scalability — setting a new standard for efficient, real-time AI deployment in modern production pipelines.",
                }

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