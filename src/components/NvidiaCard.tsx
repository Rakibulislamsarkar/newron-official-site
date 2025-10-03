import React from 'react';
import Image from "next/image";

const NvidiaCard = () => {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between backdrop-blur-lg rounded-2xl shadow-lg gap-6">
            <div className="flex items-center justify-center bg-white rounded-xl shadow-md p-4 w-40 md:w-56">
                <Image
                    src="/logo/nvidia-green.png"
                    alt="Newron: Official Nvidia AI Partner"
                    width={220}
                    height={100}
                    className="object-contain"
                />
            </div>

            <div className="flex-1 text-center md:text-left space-y-3">
                <h2 className="text-2xl md:text-3xl lg:text-4xl max-w-lg font-medium">
                    Nvidia&apos;s Official AI Solution Partner
                </h2>
                <p className="text-base text-gray-400 max-w-md">
                    We&apos;re proud to join <span className="font-medium text-[#76b900]">Team Green</span>.
                    Newron is now an official partner of Nvidia.
                </p>
            </div>

            <div className="hidden md:flex items-center justify-center">
                <Image
                    src="/home/trust.png"
                    alt="Nvidia-Newron partnership"
                    width={100}
                    height={100}
                />
            </div>
        </section>
    );
};

export default NvidiaCard;
