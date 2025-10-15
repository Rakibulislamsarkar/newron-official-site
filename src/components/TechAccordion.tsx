"use client";

import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState } from "react";

type Tech = {
    technology: string;
    description: string;
    efficiency_chip: string;
    image: string;
};

const techStack: Tech[] = [
    {
        technology: "React",
        description: "A JavaScript library for building user interfaces.",
        efficiency_chip: "Fast & Flexible",
        image: "/gen_image/1.png",
    },
    {
        technology: "Next.js",
        description: "A React framework for server-side rendering and static websites.",
        efficiency_chip: "SEO Friendly",
        image: "/gen_image/2.png",
    },
    {
        technology: "Tailwind CSS",
        description: "A utility-first CSS framework for rapid UI development.",
        efficiency_chip: "Highly Customizable",
        image: "/gen_image/3.png",
    },
    {
        technology: "React",
        description: "A JavaScript library for building user interfaces.",
        efficiency_chip: "Fast & Flexible",
        image: "/gen_image/1.png",
    },
    {
        technology: "Next.js",
        description: "A React framework for server-side rendering and static websites.",
        efficiency_chip: "SEO Friendly",
        image: "/gen_image/2.png",
    },
];

const TechAccordion = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className={'space-y-20'}>
            <h2 className="text-[2rem] sm:text-[2.75rem] md:text-[3.5rem] font-normal leading-tight">
                Powered by <span className="text-primary">Modern Tech</span>
            </h2>

            <div className="flex flex-col md:flex-row md:gap-10">
                <Accordion
                    type="single"
                    collapsible
                    className="w-full md:w-1/2"
                    defaultValue="item-1"
                    onValueChange={(value: string | null) => {
                        if (!value) return setActiveIndex(-1);
                        const index = parseInt(value.split("-")[1], 10) - 1;
                        setActiveIndex(index);
                    }}
                >
                    {techStack.map((tech, index) => (
                        <AccordionItem key={`tech-${index}`} value={`item-${index + 1}`}>
                            <AccordionTrigger>
                                <h3 className="subheading mb-2">{tech.technology}</h3>
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-foreground-muted">
                                <p className="text-sm md:text-base">{tech.description}</p>
                                <span className="font-medium text-sm text-indigo-200 rounded-md max-w-fit">
                                    {tech.efficiency_chip}
                                </span>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                <div className="hidden md:flex md:w-1/2 justify-center items-center">
                    {activeIndex >= 0 && (
                        <div className="w-full h-[50vh] relative rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src={techStack[activeIndex].image}
                                alt={techStack[activeIndex].technology}
                                fill
                                className="object-cover"
                                priority={activeIndex === 0}
                            />
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default TechAccordion;
