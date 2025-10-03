import React from 'react';
import GlassCard from "@/components/GlassCard";
import Image from "next/image";

export type TripletProps = {
    items?: {
        img?: {
            src: string,
            alt: string,
            width: number,
            height: number
        },
        header?: string,
        title?: string,
        content?: any,
        action?: any
    }[],
    variant?: "primary" | "secondary"
}

const Triplet = ({items, variant}: TripletProps = {variant: "primary"}) => {
    return (
        <GlassCard>
            <div className="flex flex-col md:flex-row divide-y divide-x-0 md:divide-y-0 md:divide-x divide-zinc-700/80">
                {items?.map((item, index) => (
                    <article
                        key={item.header || index}
                        className="flex flex-col justify-between gap-4 p-4 lg:p-8 flex-grow basis-0"
                    >
                        <div className="flex-1 !space-y-4 sm:mb-6 order-2 sm:order-1">
                            <h2 className="text-base">{item.header}</h2>
                            <h3 className="text-xl font-medium">{item.title}</h3>
                            <p className="xs:text-[0.95rem] md:text-[1rem] text-zinc-400">{item.content}</p>
                            <div>{item.action}</div>
                        </div>

                        <div className="w-32 h-[100px] relative flex-shrink-0">
                            <Image
                                src={item.img?.src || "/home/placeholder.png"}
                                alt={item.img?.alt || "Newron AI Document"}
                                fill
                                style={{objectFit: "cover"}}
                            />
                        </div>
                    </article>
                ))}
            </div>
        </GlassCard>
    );
};

export default Triplet;
