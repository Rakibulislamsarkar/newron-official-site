import React from "react";
import Image from "next/image";
import clientLogos from "@/defs/hrefs/clientLogos";

const LogoCarousel = () => {
    return (
        <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-10">
            <h2 className="text-sm text-center font-light leading-8 text-white">
                Trusted every day by world&apos;s leading organizations
            </h2>
            <div
                className="
                mt-6
                grid
                grid-cols-4 lg:grid-cols-8
                gap-2
                justify-items-center
                items-center
                px-4
                ">
                {clientLogos.map((client) => (
                    <div
                        key={client.src}
                        className="
                        flex justify-center items-center
                        bg-[#1B1913]
                        rounded-lg
                        border border-[#232018]
                        p-2 sm:p-3
                        w-full max-w-[180px]
                        aspect-[1] sm:aspect-[4/3]">
                        <Image
                            src={client.src}
                            alt={client.name}
                            width={client.width}
                            height={client.height}
                            className="brightness-0 invert w-[90%] sm:w-[85%] lg:w-[70%] h-full object-contain"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LogoCarousel;
