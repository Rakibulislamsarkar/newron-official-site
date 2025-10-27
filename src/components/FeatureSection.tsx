import Image from "next/image"
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
        title: "SmartLogin & Lead Intelligence",
        description:
            "Capture leads from multiple sources and automatically verify identities using digital KYC, document parsing, and instant cross-validation with credit bureaus — turning onboarding into a one-click experience.",
        imgAlt: "Smart lead onboarding and KYC verification",
        placeholderSrc: "/solutions/SmartLogin.jpeg",
    },
    {
        title: "Document Forensics & Validation",
        description:
            "Detect tampering, duplicates, or mismatched data across documents using AI forensics and computer vision. Every document is validated against policy rules to maintain complete integrity and compliance.",
        imgAlt: "Document validation and forensics visualization",
        placeholderSrc: "/solutions/Document_Forensics.jpeg",
    },
    {
        title: "AI Risk Scoring Engine",
        description:
            "Leverages machine learning models to evaluate applicant profiles in real time, assigning intelligent risk scores that improve decision accuracy and reduce first-time-not-right (FTNR) cases.",
        imgAlt: "AI-based credit risk scoring engine preview",
        placeholderSrc: "/solutions/ScoringEngine.jpg",
    }, {
        title: "Geo-Verification & Audit Trail",
        description:
            "Ensure every workflow action is authenticated with precise geo-tagging and time-stamped logs. Maintain full transparency and traceability through an automated AI-powered audit trail.",
        imgAlt: "AI-based credit risk scoring engine preview",
        placeholderSrc: "/solutions/Geo.webp",
    },
    {
        title: "VideoPD & Behavioral Insights",
        description:
            "Digitally capture personal discussions with integrated face matching, voice sentiment analysis, and geo-tagging to ensure authenticity and produce audit-ready behavioral summaries.",
        imgAlt: "Video personal discussion and sentiment AI example",
        placeholderSrc: "/solutions/VideoPDinsights.jpeg",
    },
    {
        title: "AI Audit & Compliance Dashboard",
        description:
            "Monitor every workflow action in real time. Automated audit trails, exception alerts, and compliance dashboards ensure transparency, accountability, and regulatory readiness across all lending operations.",
        imgAlt: "AI audit and compliance dashboard interface",
        placeholderSrc: "/solutions/AIAudit.jpeg",
    },
];


export function FeaturesSection() {
    return (
        <section className={" px-4 md:px-6 lg:px-10 py-10 space-y-20"}>
            <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-16 mx-auto max-w-[1536px]">
                <article className="flex flex-col items-baseline-last sm:flex-row justify-between gap-10 w-full">
                    <h2 className="heading max-w-3xl">
                        Reimagining lending through intelligent automation
                    </h2>
                    <div className={'space-y-6'}>
                        <p className="description max-w-xl mx-auto">
                            From document intelligence to fraud detection — Credilow automates lending so you move
                            faster and stay compliant.
                        </p>
                    </div>
                </article>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
                {features.map((f) => (
                    <Card
                        key={f.title}
                    >
                        <CardContent>
                            <div className="overflow-hidden bg-white">
                                <Image
                                    src={f.placeholderSrc || "/placeholder.svg"}
                                    alt={f.imgAlt}
                                    width={400}
                                    height={400}
                                    className="w-60 h-60 object-cover rounded-lg mx-auto"
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
