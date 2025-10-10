import React from 'react';
import Link from "next/link";
import {ArrowUpRightIcon} from "@heroicons/react/16/solid";
import Image from "next/image";

const Hero = () => {
    return (
        <section className=" flex pt-4 md:pt-10">
            <div className="w-full flex flex-col justify-between h-[70vh] mx-auto max-w-8xl px-4 md:px-6 lg:px-10">
                <div className="w-full h-full gap-12 lg:gap-16 xl:gap-20 flex flex-col justify-between items-start">
                    <div>
                        <h1 className="
                            font-normal
                            leading-[1.1]
                            text-[clamp(3.4rem,9vw,9.5rem)]
                            tracking-[-2px]
                            sm:tracking-[-3px]
                            md:tracking-[-4px]
                            lg:tracking-[-6px]
                            ">
                            Empowering Enterprises with Generative AI .

                        </h1>
                        <p className="flex w-fit items-center">
                            Official Partner of
                            <span className="flex items-center ">
                                                <Image
                                                    src="/logo/nvidia.png"
                                                    alt="Nvidia Official Delivery Partner"
                                                    width={40}
                                                    height={20}
                                                />
                                            </span>
                            <span className={'bg-lime-400 bg-clip-text text-transparent'}>nvidia</span>
                        </p>
                    </div>

                    <div className="flex w-full justify-between flex-col lg:flex-row gap-8 lg:gap-12">
                        <p
                            className="
                            text-[1rem]
                            sm:text-[0.8rem]
                            md:text-[1rem]
                            lg:text-[1.2rem]
                            max-w-2xl
                            text-balance
                            ">
                            Redefining enterprise performance through autonomous, insight-driven generative AI
                            solutions.
                        </p>

                        <div className="flex items-start lg:items-center">
                            <Link href="/contact-us?cta=talk-to-expert" prefetch={true}>
                                <button
                                    className="bg-[#6544F4] text-white rounded-full px-3 py-3 flex items-center justify-between gap-4 lg:px-4 text-base font-medium hover:bg-opacity-90 transition-all w-fit">
                                    Talk to AI expert
                                    <span className={'rounded-full bg-background-secondary p-3'}>
                                    <ArrowUpRightIcon width={20} height={20} className={'text-[#6544F4]'} />
                                </span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;