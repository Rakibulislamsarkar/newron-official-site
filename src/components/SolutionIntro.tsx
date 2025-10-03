import React from 'react';
import GlassCard from "@/components/GlassCard";
import Image from "next/image";

const services = [
    "Accelerated market launch",
    "Unified media and creative approach",
    "Personalized growth marketing expertise",
    "Advanced analytics and insights",
    "Custom omnichannel planning",
]


const SolutionIntro = () => {
    return (
        <div className={'py-20'}>
           <div className={'space-y-20'}>
               <h1 className={"text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-100 max-w-4xl "}>
                   We partner with clients to craft solutions that are both practical and perfectly suited to their goals.</h1>
           </div>
            <div className={'flex flex-col lg:flex-row lg:items-center justify-between gap-10 mt-10'}>
                <div className="xl:w-2/5 w-full flex justify-start items-center mb-10 overflow-hidden">
                    <Image
                        src="/solutions/overview.jpeg"
                        alt="Services visualization"
                        width={400}
                        height={400}
                        className="object-contain"
                    />
                </div>

                <div className={'xl:w-1/2 space-y-10'}>
                    <p className={"max-w-2xl text-zinc-400 text-lg"}>
                        We provide digital tools for MSME and retail lending, making compliance, risk management, and
                        credit workflows faster, secure, and audit-ready.
                    </p>
                    {services.map((service, index) => (
                        <div key={index} className="border-b border-zinc-600 pb-4">
                            <p className={'text-base'}>
                                {service}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SolutionIntro;