import React from 'react';
import BgElements from "@/components/background/BgElements";

interface BackgroundLayoutProps {
    children: React.ReactNode;
}

const BackgroundLayout = ({ children }: BackgroundLayoutProps) => {
    return (
        <div>
            <div className={"w-screen h-screen fixed -z-10"}>
                <BgElements />
            </div>

            <div className={"z-10"}>
                {children}
            </div>
        </div>
    );
};

export default BackgroundLayout;