import React from 'react';
import VideoPDSolution from "@/components/VideoPDSolution";
import SolutionsHero from "@/components/SolutionsHero";
import CrediflowSolution from "@/components/CrediflowSolution";
import SolutionIntro from "@/components/SolutionIntro";
import SolutionSummary from "@/components/SolutionSummary";
import FAQs from "@/components/FAQs";
import {FeaturesSection} from "@/components/FeatureSection";

const Page = () => {
    return (
        <div className={'space-y-36'}>
            <div className={'section-gradient'}>
                <SolutionsHero/>
            </div>
            <SolutionIntro/>
            <CrediflowSolution/>
            <FeaturesSection/>
            <VideoPDSolution/>
            <SolutionSummary/>
            <FAQs/>
        </div>
    );
};

export default Page;
