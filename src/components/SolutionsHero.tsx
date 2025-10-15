import React from 'react';
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";

const SolutionsHero = () => {
    return (
        <section
            className=" min-h-[60vh] max-w-[1536px] mx-auto flex flex-col justify-end  px-4 md:px-6 lg:px-10 py-16 md:py-24 mt-10">
            <div className="flex flex-col lg:flex-row lg:items-baseline lg:justify-between gap-10">
                <h1
                    className="
                        font-normal
                        leading-[1.1]
                        text-[clamp(3rem,7vw,8rem)]
                        tracking-tight
                    "
                >
                    Redefine AI <br />and Automation
                </h1>

                <div className="flex flex-col items-start gap-5 max-w-md">
                    <p
                        className="
                            text-base
                            sm:text-sm
                            md:text-base
                            lg:text-lg
                            text-balance
                        "
                    >
                        Our suite of solutions is designed to streamline operations, enhance compliance,
                        and drive business growth across diverse challenges.
                    </p>

                    <Link href="/contact-us?cta=talk-to-expert" prefetch={true}>
                        <button
                            className="
                                bg-[#6544F4]
                                text-white
                                rounded-full
                                px-5
                                py-3
                                flex
                                items-center
                                justify-between
                                gap-3
                                text-base
                                font-medium
                                hover:bg-opacity-90
                                transition-all
                                w-fit
                            "
                        >
                            Talk to AI expert
                            <span className="rounded-full bg-background-secondary p-2">
                                <ArrowUpRightIcon
                                    width={20}
                                    height={20}
                                    className="text-[#6544F4]"
                                />
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default SolutionsHero;
