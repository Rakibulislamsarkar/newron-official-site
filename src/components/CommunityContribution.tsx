import React from 'react';
import Image from "next/image";
import Link from "next/link";

const CommunityContribution = () => {
    return (
        <section className={"mt-8 flex flex-col gap-16"} id={"generative-ai"}>
            <div className={"flex flex-col-reverse md:flex-row justify-between items-center gap-4"}>
                <article className="flex flex-col gap-4">
                    <h2 className={"text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-lg font-medium"}>
                        Contribution to Community
                    </h2>
                    <p className={"max-w-lg text-zinc-400 text-base"}>
                        Our team at Newron, always filled with immense enthusiasm, is perpetually passionate about actively returning the favour with
                        our meaningful contributions to the Open Source community.
                    </p>
                    <div >
                        <Link href={"/open-source"}>
                            <button className={"sm:w-1/2 btn-primary px-6 py-2 rounded-sm text-xs sm:text-sm"}>
                                Open Source Projects
                            </button>
                        </Link>
                    </div>
                </article>
                <div className={'hidden md:block'}>
                    <Image src={"/home/community-contribution.png"}
                           alt={"Open Source projects by NewronAi Technologies"}
                           width={400}
                           height={400}
                    />
                </div>
            </div>
        </section>
    );
};

export default CommunityContribution;