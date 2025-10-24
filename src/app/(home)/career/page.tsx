import React from 'react';
import {ArrowUpRightIcon, CheckIcon} from '@heroicons/react/16/solid';
import Image from "next/image";
import Link from "next/link";

const benefitCategories = [
    {
        title: "For employees",
        benefits: [
            "Health, dental, and vision insurance",
            "Mental healthcare support and services",
            "Global travel insurance for you and any dependents traveling with you.",
            "Company sponsored retirement plan",
            "Domestic conference budget for each employee"
        ]
    },
    {
        title: "Life & family",
        benefits: [
            "24-week paid birth-parent leave, WFH for up to 4 weeks after leave",
            "20-week paid parental leave, WFH for up to 4 weeks after leave",
            "Life and AD&D insurance",
            "Fertility treatment and family planning coverage",
            "Unlimited, flexible time off"
        ]
    },
    {
        title: "Culture & development",
        benefits: [
            "Annual learning & development stipend",
            "Employee resource groups",
            "Team-driven celebrations and events",
            "Daily breakfast, lunch, and dinner",
            "6 coaching sessions, for you and your dependents."
        ]
    },
];

export default function BenefitsSection() {
    return (
        <div className="py-16 sm:py-24 px-6 lg:px-8">
            <div className="mx-auto max-w-3xl mb-20">
                <div className="flex flex-col items-center">
                    <h1 className="text-4xl text-center font-medium tracking-tight text-zinc-100 sm:text-6xl lg:text-7xl">
                        Develop safe, beneficial AI systems
                    </h1>
                    <p className="text-base text-center max-w-4xl text-zinc-400 mt-5">
                        We&apos;re looking for curious minds from a wide range of disciplines and backgrounds.
                    </p>
                </div>
            </div>
            <div className=" xl:mx-auto xl:max-w-7xl mb-20">
                <Image
                    src="/gallery/office.jpg"
                    alt="office"
                    width={700}
                    height={400}
                    className="aspect-[5/2] w-full object-cover rounded-sm"
                />
                <p className="mt-6 text-base text-zinc-400">
                    We&apos;re a dynamic group of individuals who are passionate about what we do and dedicated to
                    delivering the
                    best results for our clients. We have some of the best minds in the industry working together to
                    create innovative solutions that help our clients achieve their goals.
                </p>
                <p className={"mt-6 text-base text-zinc-400"}>
                    We are always looking for talented individuals to join our team. Qualified candidates are encouraged
                    to apply for any open positions listed on the link below.
                    Even if there are no open positions, we&apos;d still love to hear from you. You can use the contact
                    form below to get in touch with us.
                </p>

            </div>

            <div className="mx-auto max-w-2xl text-center mb-16">
                <h2 className="text-3xl font-semibold tracking-tight text-zinc-100 sm:text-4xl">
                    Benefits
                </h2>
                <p className="mt-6 text-base text-zinc-400">
                    Well-being centers everyday life. Our benefits package provides comprehensive support as you handle
                    what matters today and confidently plan for your future.
                </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3 max-w-7xl mx-auto">
                {benefitCategories.map((category) => (
                    <div
                        key={category.title}
                        className="bg-zinc-800/30 backdrop-blur-md border border-zinc-700/50 rounded-lg p-8 transition-colors duration-300"
                    >
                        <h3 className="text-xl font-semibold text-zinc-100 mb-6">
                            {category.title}
                        </h3>
                        <ul className="space-y-3">
                            {category.benefits.map((benefit, index) => (
                                <li key={index} className="flex gap-3 text-zinc-300">
                                    <CheckIcon className="h-6 w-5 flex-none mt-0.5 text-white" aria-hidden="true"/>
                                    <span className="text-base leading-relaxed">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="mt-16 flex flex-col items-center justify-center text-center">
                <p className="text-lg text-zinc-300 mb-6 max-w-2xl">
                    Join our team and enjoy these benefits while working on cutting-edge AI solutions
                </p>

                <Link
                    href="https://www.linkedin.com/company/82560420/admin/feed/posts/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#6544F4] text-white rounded-full px-4 py-3 flex items-center justify-between gap-4 text-base font-medium hover:bg-opacity-90 transition-all w-fit"
                >
                    View on LinkedIn
                    <span className="rounded-full bg-background-secondary p-3">
                        <ArrowUpRightIcon width={20} height={20} className="text-[#6544F4]"/>
                    </span>
                </Link>
            </div>

        </div>
    );
}