import React from 'react';
import Link from "next/link";
import {ArrowUpRightIcon} from "@heroicons/react/16/solid";

const SolutionsHero = () => {
    return (
        <section className="min-h-[50vh] sm:min-h-[70vh] flex flex-col items-end justify-end mt-10  px-4 md:px-10">
            <div className=" w-full flex flex-col lg:flex-row lg:items-baseline-last lg:justify-between gap-12">
                <h1 className="
          font-normal
          leading-[1.1]
          text-[clamp(3.5rem,8.5vw,9rem)]
          tracking-[-2px]
          sm:tracking-[-3px]
          md:tracking-[-4px]
          lg:tracking-[-6px]
        ">
                    Redefine AI <br />and Automation
                </h1>

                <div className="flex flex-col items-start gap-5 max-w-sm">
                    <p className="text-[1rem]
                            sm:text-[0.8rem]
                            md:text-[1rem]
                            lg:text-[1rem]
                            max-w-2xl
                            text-balance">
                        Our suite of solutions is designed to streamline operations, enhance compliance, and drive business growth across diverse challenges.
                    </p>

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
        </section>
    );
};

export default SolutionsHero;
