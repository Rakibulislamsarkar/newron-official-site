import React from 'react';
import BgElements from "@/components/background/BgElements";

const BackgroundLayout = ({children} : any) => {
    return (
        <div className={""}>

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