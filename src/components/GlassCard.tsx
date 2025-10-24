import React, { ReactNode } from 'react';
import clsx from "clsx";

export type GlassCardProps = {
    children: ReactNode;
    className?: string;
};

const GlassCard = ({ children, className }: GlassCardProps) => {
    return (
        <div className={clsx(className)}>
            {children}
        </div>
    );
};

export default GlassCard;
