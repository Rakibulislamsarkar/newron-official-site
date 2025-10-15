import React from 'react';
import GlassCard from "@/components/GlassCard";

export type TripletProps = {
    items?: {
        header?: string,
        title?: string,
        content?: string,
        action?: boolean,
    }[],
    variant?: "primary" | "secondary"
}

const Triplet = ({ items }: TripletProps = { variant: "primary" }) => {
    return (
        <GlassCard>
            <div className="flex flex-col md:flex-row divide-y divide-x-0 md:divide-y-0 md:divide-x divide-zinc-700/80">
                {items?.map((item, index) => (
                    <article
                        key={item.header || index}
                        className="relative flex flex-col justify-between gap-4 p-6 lg:p-8 flex-grow basis-0 bg-zinc-800/30 rounded-lg">
                        <div className="flex-1 !space-y-4 sm:mb-6">
                            <h2 className="text-base text-foreground-muted">{item.header}</h2>
                            <h3 className="text-2xl md:text-3xl font-medium text-white">
                                {item.title}
                            </h3>
                            <p className="text-neutral-400 text-base">
                                {item.content}
                            </p>
                            <div>{item.action}</div>
                        </div>
                    </article>
                ))}
            </div>
        </GlassCard>
    );
};

export default Triplet;
