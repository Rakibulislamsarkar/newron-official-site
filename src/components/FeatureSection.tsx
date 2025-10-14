import Image from "next/image"
import { cn } from "@/lib/utils"
import {Card, CardContent, CardDescription, CardTitle} from "@/components/ui/card"
import React from "react";

type Feature = {
    title: string
    description: string
    imgAlt: string
    placeholderSrc: string
}

const features: Feature[] = [
    {
        title: "AI-Driven Document Intelligence",
        description: "Classifies, extracts, and validates documents automatically — reducing manual effort by up to 70%.",
        imgAlt: "AI document processing",
        placeholderSrc: "/gen_image/1.png",
    },
    {
        title: "Smart Application Creation",
        description: "Converts verified leads into loan applications instantly with automated data population.",
        imgAlt: "Smart loan application creation",
        placeholderSrc: "/gen_image/2.png",
    },
    {
        title: "Fraud & Risk Detection",
        description: "Uses computer vision and AI forensics to detect tampered or suspicious documents early.",
        imgAlt: "Fraud detection preview",
        placeholderSrc: "/gen_image/3.png",
    },
    {
        title: "Workflow Automation Engine",
        description: "Orchestrates document, verification, and approval steps seamlessly for faster disbursals.",
        imgAlt: "Automation engine preview",
        placeholderSrc: "/gen_image/1.png",
    },
    {
        title: "Secure & Compliant Infrastructure",
        description: "Ensures end-to-end encryption, policy compliance, and audit readiness.",
        imgAlt: "Secure infrastructure preview",
        placeholderSrc: "/gen_image/security.png",
    },
]

export function FeaturesSection({ className }: { className?: string }) {
    return (
        <section className={cn("mx-auto max-w-[1536px]", className)}>
            <div className="mb-8">
                <p className="text-indigo-200 uppercase tracking-wide text-sm font-medium">
                    AI Lending Workflow
                </p>
            </div>

            <div className="max-w-3xl">
                <h2 className="heading">
                    Reimagining lending through intelligent automation
                </h2>
                <p className="mt-4 description">
                    From document intelligence to fraud detection — Credilow automates every step of your lending workflow,
                    helping you move faster, stay compliant, and focus on what truly matters: growth.
                </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                {features.map((f) => (
                    <Card
                        key={f.title}
                    >
                        <CardContent className="">
                            <div className="overflow-hidden">
                                <Image
                                    src={f.placeholderSrc || "/placeholder.svg"}
                                    alt={f.imgAlt}
                                    width={640}
                                    height={320}
                                    className="w-full h-60 object-cover"
                                />
                            </div>
                            <CardTitle className={'mt-6 p-6'}>{f.title}</CardTitle>
                            <CardDescription className={'mt-2 px-6 pb-6'}>{f.description}</CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
