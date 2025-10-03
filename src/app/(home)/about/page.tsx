import React from "react";
import Image from "next/image";
import type {Metadata} from "next";

const stats = [
    {label: 'API calls every 24 hours', value: '9,000'},
    {label: 'Organisation Currently Serving', value: '50+'},
    {label: 'New users expected', value: '16,000'},
]
const values = [
    {
        name: 'Pioneering Spirit',
        description:
            'We believe in the power of exploring uncharted territories. Our team is not afraid to venture into the unknown, always seeking to discover and create what\'s next in the realm of AI.',
    },
    {
        name: 'Collaboration',
        description:
            'We know that the best solutions come from working together. We value diversity and inclusivity, and we\'re committed to creating an environment where everyone\'s voice is heard and respected.',
    },
    {
        name: 'Integrity',
        description:
            'We hold ourselves to the highest ethical standards in all that we do. We believe in doing the right thing, being transparent, and building trust with our partners, customers, and each other.',
    },
    {
        name: 'Excellence',
        description:
            'We strive for excellence in everything we do. We\'re committed to continuous learning and improvement, and we\'re not satisfied until we\'ve achieved the best possible results.',
    },
    {
        name: 'Empowerment',
        description:
            'We\'re driven by the desire to empower individuals, businesses, and communities through our AI solutions. We believe that AI has the potential to transform lives and industries, and we\'re committed to making this transformation accessible to all.',
    },
    {
        name: 'Responsibility',
        description:
            'We take ownership of our actions and their outcomes. We understand that every decision we make has an impact, and we\'re committed to making decisions that contribute positively to our team, our customers, and the broader community.',
    },
]

export const metadata: Metadata = {
    title: "About Newron",
    description: "We're Newron, a dynamic and forward-thinking AI startup committed to revolutionizing the way we interact with technology."
}

export default function AboutPage() {

    return (
        <div className="mt-8 bg-zinc-800/30 backdrop-blur-md border border-zinc-700/50 rounded-lg shadow-xl pb-10">

            <main className="isolate">
                <div className="relative isolate -z-10">
                    <div className="mx-auto max-w-7xl px-6 pb-32 pt-8 mt-12">
                        <div className="flex flex-col items-center">
                            <h1 className="text-4xl text-center font-medium tracking-tight text-zinc-100 sm:text-6xl lg:text-7xl">
                                We&apos;re <span
                                className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Newron</span>: <br
                                className="hidden sm:block"/> Innovating the Landscape of AI
                            </h1>
                            <p className="text-base text-center max-w-4xl text-zinc-400 mt-10">
                                We&apos;re Newron, a dynamic and forward-thinking AI startup committed to
                                revolutionizing the way we interact with technology. Our team is a diverse group of
                                passionate technologists, researchers, and problem-solvers dedicated to pushing the
                                boundaries of what&apos;s possible in AI.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-10 pb-20">
                        <div className="hidden md:flex w-full gap-3 overflow-hidden">
                            {[1, 2, 3].map((num) => (
                                <div key={num} className="flex-1 h-[520px] overflow-hidden">
                                    <Image
                                        src={`/about/about-photo-${num}.jpg`}
                                        alt={`About photo ${num}`}
                                        className="w-full h-full object-cover"
                                        width={600}
                                        height={600}
                                    />
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col md:hidden gap-4">
                            {[1, 2, 3].map((num) => (
                                <div key={num} className="w-full h-[300px] overflow-hidden rounded-lg">
                                    <Image
                                        src={`/about/about-photo-${num}.jpg`}
                                        alt={`About photo ${num}`}
                                        className="w-full h-full object-cover"
                                        width={600}
                                        height={600}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                        <h2 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">Our mission</h2>
                        <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                                <p className="text-base text-zinc-400">
                                    At Newron, our mission is to be at the forefront of AI innovation, setting trends
                                    rather than following them.
                                    We are committed to creating practical, user-friendly AI solutions that understand
                                    and adapt to human needs, making life more efficient and easier.
                                    We&apos;re driven by the potential of AI to make a significant positive impact on
                                    the world, aiming to use our technology to contribute to solving pressing global
                                    issues.
                                </p>
                                <div className="mt-10 max-w-xl text-base text-zinc-400">
                                    <p>
                                        <span className={"text-zinc-300 font-medium"}>Innovation:</span> We strive to
                                        stay at the cutting edge of AI technology, constantly pushing the boundaries of
                                        what&apos;s possible. We&apos;re not content to follow the trends - we aim to
                                        set them. We believe that the most exciting developments in AI are yet to come,
                                        and we&apos;re committed to being at the forefront of those breakthroughs.
                                    </p>
                                    <p className="mt-10">
                                        <span className={"text-zinc-300 font-medium"}>Practicality:</span> While
                                        we&apos;re passionate about exploring new frontiers in AI, we&apos;re equally
                                        committed to creating practical, user-friendly solutions. We believe that the
                                        true power of AI lies in its ability to make life easier and more efficient for
                                        people. That&apos;s why we&apos;re focused on developing AI that understands and
                                        adapts to human needs.
                                    </p>
                                    <p className="mt-10">
                                        <span className={"text-zinc-300 font-medium"}>Impact:</span> We&apos;re driven
                                        by the potential of AI to make a positive impact on the world. We aim to create
                                        AI solutions that not only improve efficiency and productivity but also
                                        contribute to solving some of the world&apos;s most pressing problems. From
                                        climate change to healthcare, we believe that AI has the potential to make a
                                        real difference.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between gap-12 lg:gap-20 mt-20">
                        {stats.map((stat) => (
                            <dl key={stat.label} className="flex flex-col items-center">
                                <dd className="text-7xl font-semibold text-zinc-100">{stat.value}</dd>
                                <dt className="mt-2 text-base text-zinc-400">{stat.label}</dt>
                            </dl>
                        ))}
                    </div>

                </div>

                {/*<div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">*/}
                {/*    <Image*/}
                {/*        src="/gallery/office.jpg"*/}
                {/*        alt="office"*/}
                {/*        width={700}*/}
                {/*        height={400}*/}
                {/*        className="w-full object-cover rounded-sm"*/}
                {/*    />*/}
                {/*</div>*/}

                <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">Our values</h2>
                        <p className="text-base text-zinc-400 mt-6">
                            At Newron, our values are the guiding principles that shape our work, our relationships, and
                            our impact on the world.
                            They are the foundation of our mission and the compass that guides our journey into the
                            future of AI.
                        </p>
                    </div>
                    <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {values.map((value) => (
                            <div key={value.name}>
                                <dt className="font-semibold text-zinc-100">{value.name}</dt>
                                <dd className="mt-1 text-zinc-400">{value.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>

                {/* Logo cloud */}
                {/*<div className="relative isolate -z-10 mt-32 sm:mt-48">*/}
                {/*    <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">*/}
                {/*        <svg className="h-[40rem] w-[80rem] flex-none stroke-gray-200" aria-hidden="true">*/}
                {/*            <defs>*/}
                {/*                <pattern*/}
                {/*                    id="e9033f3e-f665-41a6-84ef-756f6778e6fe"*/}
                {/*                    width={200}*/}
                {/*                    height={200}*/}
                {/*                    x="50%"*/}
                {/*                    y="50%"*/}
                {/*                    patternUnits="userSpaceOnUse"*/}
                {/*                    patternTransform="translate(-100 0)"*/}
                {/*                >*/}
                {/*                    <path d="M.5 200V.5H200" fill="none" />*/}
                {/*                </pattern>*/}
                {/*            </defs>*/}
                {/*            <svg x="50%" y="50%" className="overflow-visible fill-gray-50">*/}
                {/*                <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" strokeWidth={0} />*/}
                {/*            </svg>*/}
                {/*            <rect width="100%" height="100%" strokeWidth={0} fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)" />*/}
                {/*        </svg>*/}
                {/*    </div>*/}

                {/*</div>*/}


            </main>


        </div>
    )
}