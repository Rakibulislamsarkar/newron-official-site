import React from 'react'
import Image from "next/image";
import clientLogos from "@/defs/hrefs/clientLogos";

const LogoCarousel = () => {
    return (
        <section>
            <h2 className="text-sm text-center font-light leading-8 text-zinc-400">
                Trusted by the world’s most innovative organizations
            </h2>

            <div className={"mt-4 flex justify-center items-center gap-20 flex-wrap"}>
                {
                    clientLogos.map(client => {
                        return <div className={"w-15"} key={client.src}>
                            <Image src={client.src}
                                   alt={client.name}
                                   width={client.width}
                                   height={client.height}
                                   className={"brightness-0 invert"}
                            />
                        </div>
                    })
                }
            </div>

        </section>
    )
}

export default LogoCarousel