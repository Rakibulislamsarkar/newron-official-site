"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"

import {cn} from "@/lib/utils"
import {ChevronDownIcon} from "@heroicons/react/24/outline";
import Image from "next/image";

interface AccordionImageProps
    extends React.ComponentProps<typeof AccordionPrimitive.Content> {
    src: string
    alt: string
}

function Accordion({
                       ...props
                   }: React.ComponentProps<typeof AccordionPrimitive.Root>) {
    return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
                           className,
                           ...props
                       }: React.ComponentProps<typeof AccordionPrimitive.Item>) {
    return (
        <AccordionPrimitive.Item
            data-slot="accordion-item"
            className={cn("border-b last:border-b-0 border-neutral-600", className)}
            {...props}
        />
    )
}

function AccordionTrigger({
                              className,
                              children,
                              ...props
                          }: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
    return (
        <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger
                data-slot="accordion-trigger"
                className={cn(
                    "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
                    className
                )}
                {...props}
            >
                {children}
                <ChevronDownIcon
                    className=" pointer-events-none size-6 shrink-0 translate-y-0.5 transition-transform duration-200"/>
            </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
    )
}

function AccordionContent({
                              className,
                              children,
                              ...props
                          }: React.ComponentProps<typeof AccordionPrimitive.Content>) {
    return (
        <AccordionPrimitive.Content
            data-slot="accordion-content"
            className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
            {...props}
        >
            <div className={cn("pt-0 pb-4", className)}>{children}</div>
        </AccordionPrimitive.Content>
    )
}

function AccordionImage({
                            className,
                            src,
                            alt,
                            ...props
                        }: AccordionImageProps) {
    return (
        <div className="hidden md:block h-full" {...props}>
            <Image
                src={src}
                alt={alt}
                width={500}
                height={400}
                className={cn("w-full h-full object-cover rounded-lg", className)}
            />
        </div>
    )
}

export {Accordion, AccordionItem, AccordionTrigger, AccordionContent, AccordionImage}