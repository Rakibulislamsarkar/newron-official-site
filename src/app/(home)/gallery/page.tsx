import React from 'react';
import Image from "next/image";

const photos = [
    {
        src: "/gallery/group-photo.jpg",
        height: 1,
        width: 2,
        alt: "Newron - Group Photo"
    },
    {
        src: "/gallery/nvidia-newron-partnership.jpg",
        height: 1,
        width: 2,
        alt: "Nvidia - Newron partnership"
    },
    {
        src: "/gallery/core/gen-ai-event.jpg",
        height: 1,
        width: 1.5,
        alt: "Team Newron at Nasscom at Gen AI partner"
    },
    {
        src: "/gallery/core/sandeep-speaking-at-nasscom.jpg",
        height: 1,
        width: 2,
        alt: "Newron's co-founder Sandeep speaking at Nasscom"
    },
    {
        src: "/gallery/core/sandeep-speaks-at-nasscom.jpg",
        height: 1,
        width: 2,
        alt: "Newron invited as panel in Nasscom"
    },
    {
        src: "/gallery/core/when-we-party.jpg",
        height: 1,
        width: 2,
        alt: "Team Newron partying"
    },
    {
        src: "/gallery/core/when-we-work.jpg",
        height: 1,
        width: 2,
        alt: "Team Newron working"
    },
    {
        src: "/gallery/core/humble-beginnings.jpg",
        height: 1,
        width: 1.5,
        alt: "When it all started!"
    },

    {
        src: "/gallery/office.jpg",
        height: 1,
        width: 3,
        alt: "Newron's new office"
    },
    {
        src: "/gallery/asian-paint-ceo-at-newron.jpg",
        height: 1,
        width: 2,
        alt: "Asian paint CEO visited our office"
    },
    {
        src: "/gallery/connect-2.jpg",
        height: 1,
        width: 2,
        alt: "Sandeep talking to Asian paint CEO"
    },
]

const Page = () => {
    return (
        <div className={"mt-8 pb-10 mx-auto max-w-8xl px-4 md:px-6 lg:px-10"}>
                <div className={"flex justify-center mb-10"}>
                    <section className={" flex items-center pt-10 pb-10"}>
                        <article className={"flex flex-col justify-center items-center gap-8"}>
                            <h1 className={"heading text-center max-w-xs sm:max-w-3xl"}>
                                Newron through Camera lens
                            </h1>
                            <p className={"description max-w-3xl mx-auto text-center"}>
                                Peek into our everyday at Newron.ai – where moments of creativity and teamwork come to
                                life. Our gallery is a casual snapshot of the tech, the people, and the fun behind our
                                AI adventures.
                            </p>
                        </article>
                    </section>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                    {photos.map((photo, idx) => (
                        <div key={idx} className="relative w-full overflow-hidden rounded-lg">
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                width={800}
                                height={600}
                                className="w-full h-auto object-cover"
                                priority={idx < 3}
                            />
                        </div>
                    ))}
                </div>
        </div>
    );
};

export default Page;