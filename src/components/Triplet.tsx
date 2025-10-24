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
            <div className="flex flex-col md:flex-row gap-5">
                {items?.map((item, index) => (
                    <article
                        key={item.header || index}
                        className="flex-1 flex flex-col justify-between p-6 lg:p-8 bg-gradient-to-t from-[#3A57FC] via-[#1E1A2A] to-[#14120B] rounded-lg"
                    >
                        <div className="flex-1 space-y-4 sm:mb-6">
                            <h2 className="text-base text-foreground-muted">{item.header}</h2>
                            <h3 className="text-2xl md:text-3xl font-medium text-white">
                                {item.title}
                            </h3>
                            <p className="text-neutral-200 text-base">
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
