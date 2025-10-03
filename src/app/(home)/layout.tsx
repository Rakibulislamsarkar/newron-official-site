import MainLayout from "@/components/layout/MainLayout";
import React from "react";
import type {Metadata} from "next";

import projectDefs from '@/defs/projectDefs'
import NewsletterSection from "@/components/NewsletterSection";
import Schema from "@/components/Schema";
import companyInformation from "@/defs/companyInformation";


export const metadata: Metadata = {
    title: projectDefs.defaultTitle,
    description: projectDefs.defaultMetaDescription,
}
export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <MainLayout>
            <div className="space-y-24">
                {children}
                {/*<CommunityContribution />*/}
                <NewsletterSection/>
                <Schema id="companyInfo">
                    {
                        companyInformation
                    }
                </Schema>
            </div>
        </MainLayout>
    )
}
