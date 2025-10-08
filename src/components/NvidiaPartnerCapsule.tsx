import Image from "next/image";
import React from "react";

const NvidiaPartnerCapsule = () => {
    return (
        <div className="flex justify-center gap-2 pr-2 rounded-full">
            <span className="flex items-center bg-gradient-to-b from-[#76B900] to-[#4A7A00] px-2 py-1 rounded-l-full rounded-tr-full">
                <Image
                    src="/logo/nvidia-small.png"
                    alt="Nvidia Official Delivery Partner"
                    width={80}
                    height={30}
                />
            </span>
            <div className="h-full flex items-center">
                <span className="text-xs md:text-sm py-1 text-zinc-300">
                    Newron is now an official partner of Nvidia
                </span>
            </div>
        </div>
    );
};

export default NvidiaPartnerCapsule;
