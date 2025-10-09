import React from "react";
import Image from "next/image";
import {ArrowUpRightIcon} from "@heroicons/react/16/solid";

const ProductHighlight = () => {
    return (
        <section
            className="bg-background-secondary mx-auto max-w-8xl px-4 md:px-6 lg:px-10 py-20 sm:py-40">
            <div className={'flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto'}>
                <div className="relative flex justify-center items-center w-full md:w-1/2 h-96  overflow-hidden">
                    <Image src={'/home/ai-solutions.jpeg'} alt={'Ai Tailored Solutions'}
                           width={500}
                           height={400}
                    />
                </div>

                <div className="w-full md:w-1/2 flex flex-col gap-4">
                    <div
                        className="text-[#E04A2E] uppercase text-sm tracking-wider font-medium flex items-center gap-2">
                        AI-Powered Innovation
                    </div>

                    <h2 className="heading">
                        Transforming Businesses with Tailored AI Solutions
                    </h2>

                    <p className="description">
                        We deliver enterprise-grade language models designed to tackle real-world challenges.
                        From secure deployments to custom integrations, our solutions empower organizations to
                        automate processes, enhance decision-making, and accelerate growth in the AI era.
                    </p>

                    <div className="flex gap-3 pt-4">
                        <button
                            className="border border-[#E04A2E] text-[#E04A2E] px-4 py-2 text-sm font-medium hover:bg-[#E04A2E] hover:text-white transition flex gap-5 rounded-full">
                            Discover Our Solutions
                            <ArrowUpRightIcon width={20} height={20} />
                        </button>
                        <button
                            className="border border-[#2D0C02] text-[#2D0C02] px-4 py-2 text-sm font-medium hover:bg-[#2D0C02] hover:text-white transition rounded-full">
                            Connect with Us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductHighlight;
