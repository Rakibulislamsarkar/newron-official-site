"use client";

import React, {useEffect, useRef} from 'react';

type SectionWrapperProps = {
    className?: string;
    sectionName: string;
    children?: React.ReactNode;
}

const SectionWrapper = ({className, sectionName, children} : SectionWrapperProps) => {

    const sectionRef = React.useRef(null);

    useEffect(() => {

        const sendUpdate = (ratio : number, screenOccupancy : number) => {
            // console.log("Sending update", sectionName, ratio);
            const ce = new CustomEvent("sectionChange");

            // @ts-ignore
            ce.sectionName = sectionName;
            // @ts-ignore
            ce.intersectionRatio = ratio;
            // @ts-ignore
            ce.screenOccupancy = screenOccupancy;

            window.dispatchEvent(ce);
        }

        const io = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {

                let visibleElementHeight = entry.intersectionRect.height;
                let screenCoveragePercentage = (visibleElementHeight / window.screen.height) * 100;

                // console.log(sectionName, screenCoveragePercentage);

                if (entry.isIntersecting) {
                    sendUpdate( entry.intersectionRatio, screenCoveragePercentage);
                }
                else{
                    sendUpdate(0, screenCoveragePercentage);
                }
            });

        }, {
            threshold: [0, 0.05 , 0.1, 0.15, 0.2, 0.25, 0.3,0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65,0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1],
        });

        sectionRef.current && io.observe(sectionRef.current);

        return () => {
            sendUpdate(0, 0);
            io.disconnect();
        }
    },[]);

    return (
        <div className={className} ref={sectionRef}>
            {children}
        </div>
    );
};

export default SectionWrapper;