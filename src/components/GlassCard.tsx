import React from 'react';
import clsx from "clsx";

export type GlassCardProps = {
    children: any,
    className?: string
}

const GlassCard = ({children, className}: GlassCardProps) => {
    return (
        <div className={clsx(
            "bg-zinc-700/30 backdrop-blur-md border border-zinc-700/50 rounded-lg shadow-xl",
            className
        )}>
            {children}
        </div>
    );
};

export default GlassCard;