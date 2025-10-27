"use client";

import React, {useEffect, useRef} from 'react';

type SectionWrapperProps = {
    className?: string;
    sectionName: string;
    children?: React.ReactNode;
}

interface SectionChangeEventDetail {
    sectionName: string;
    intersectionRatio: number;
    screenOccupancy: number;
}

const SectionWrapper = ({className, sectionName, children}: SectionWrapperProps) => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const sendUpdate = (ratio: number, screenOccupancy: number) => {
            const eventDetail: SectionChangeEventDetail = {
                sectionName,
                intersectionRatio: ratio,
                screenOccupancy
            };

            const ce = new CustomEvent("sectionChange", { detail: eventDetail });
            window.dispatchEvent(ce);
        }

        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const visibleElementHeight = entry.intersectionRect.height;
                const screenCoveragePercentage = (visibleElementHeight / window.screen.height) * 100;

                if (entry.isIntersecting) {
                    sendUpdate(entry.intersectionRatio, screenCoveragePercentage);
                } else {
                    sendUpdate(0, screenCoveragePercentage);
                }
            });
        }, {
            threshold: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1],
        });

        if (sectionRef.current) {
            io.observe(sectionRef.current);
        }

        return () => {
            sendUpdate(0, 0);
            io.disconnect();
        };
    }, [sectionName]);

    return (
        <div className={className} ref={sectionRef}>
            {children}
        </div>
    );
};

export default SectionWrapper;