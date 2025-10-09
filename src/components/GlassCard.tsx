import React from 'react';
import clsx from "clsx";

export type GlassCardProps = {
    children: any,
    className?: string
}

const GlassCard = ({children, className}: GlassCardProps) => {
    return (
        <div className={clsx(
            "bg-zinc-800/40  border border-zinc-700/50 rounded-2xl shadow-xl",
            className
        )}>
            {children}
        </div>
    );
};

export default GlassCard;