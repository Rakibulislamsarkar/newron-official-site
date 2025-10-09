"use client";
import React, { useState } from "react";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/24/outline";

interface AccordionItem {
    id: number;
    title: string;
    content: string;
}

interface CustomAccordionProps {
    data: AccordionItem[];
    defaultExpanded?: number | false;
}

export default function CustomAccordion({
                                            data,
                                            defaultExpanded = 1,
                                        }: CustomAccordionProps) {
    const [expanded, setExpanded] = useState<number | false>(defaultExpanded);

    const toggleAccordion = (id: number) => {
        setExpanded(expanded === id ? false : id);
    };

    return (
        <div className="w-full space-y-3">
            {data.map(({ id, title, content }) => (
                <div
                    key={id}
                    className="border border-zinc-700/50 rounded-lg bg-[#2E2EFF] backdrop-blur-md overflow-hidden"
                >
                    <button
                        className="w-full flex justify-between p-4 focus:outline-none"
                        onClick={() => toggleAccordion(id)}
                    >
                        <h3 className="text-lg font-medium text-white text-left leading-snug">
                            {title}
                        </h3>

                        {expanded === id ? (
                            <MinusCircleIcon className="w-8 h-8" />
                        ) : (
                            <PlusCircleIcon className="w-8 h-8" />
                        )}
                    </button>

                    <div
                        className={`px-4 pb-4 transition-all duration-300 overflow-hidden ${
                            expanded === id ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                    >
                        <p className="text-sm">{content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
